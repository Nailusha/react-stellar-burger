import { FC, useEffect, useMemo } from "react";
import styles from "./orders.module.css";
import { Link, useLocation } from "react-router-dom";

import { OrderCard } from "../../components/order-card/order-card";
import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";
import { ingredientSelector } from "../../services/store/selector/ingredientSelector";
import { allOrdersInf } from "../../services/store/selector/allOrders/allOrders";
import { connect, wsClose } from "../../services/store/reducers/socket/actions";
import { ORDERS, ORDERS_ALL } from "../../utils/api";
import { Torder } from "../../utils/types";

export default function OrdersPage() {
  const dispatch = useAppDispatch();
  const ordersInf = useAppSelector(allOrdersInf);
  const ordersData = ordersInf && ordersInf.orders;
  const ordersDataReversed = (ordersData && [...ordersData].reverse()) || [];
  const location = useLocation();
  console.log(ordersData);

  const ingredientsData = useAppSelector(ingredientSelector);

  const accessToken = useMemo(
    () => localStorage.getItem("accessToken")?.replace("Bearer ", ""),
    [localStorage.getItem("accessToken")]
  );

  function price(item: Torder) {
    let totalPrice = 0;
    if (item) {
      item.ingredients.forEach((ingrAll) => {
        ingredientsData.forEach((itemData: { _id: string; type: string; price: number; }) => {
          if (itemData._id === ingrAll) {
            totalPrice +=
              itemData.type === "bun" ? itemData.price * 2 : itemData.price;
          }
        });
      });
    }
    return totalPrice;
  }

  useEffect(() => {
    dispatch(connect(`${ORDERS}?token=${accessToken}`));

    return () => {
      wsClose();
    };
  }, []);

  return (
    ordersDataReversed && (
      <section className={`${styles.orders} custom-scroll pr-2`}>
        {ordersDataReversed.map((item: Torder) => {
          return (
            <Link
              className={styles.link}
              key={item._id}
              to={`${item.number}`}
              state={{ background: location }}
            >
              <OrderCard key={item._id} ordersData={item} price={price(item)} />
            </Link>
          );
        })}
      </section>
    )
  );
}

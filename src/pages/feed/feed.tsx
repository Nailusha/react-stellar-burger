import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./feed.module.css";

import { OrderStats } from "../../components/order-stats/order-stats";
import { OrderCard } from "../../components/order-card/order-card";
import { OrderList } from "../../components/order-icon/order-icon";

import { ORDERS_ALL } from "../../utils/api";
import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";
import {connect,wsClose,wsConnecting,wsMessage} from "../../services/store/reducers/socket/actions";
import { allOrdersInf } from "../../services/store/selector/allOrders/allOrders";
import { ingredientSelector } from "../../services/store/selector/ingredientSelector";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { TingredintsConstructor, Torder } from "../../utils/types";
import { TFeedOrder } from "../../utils/live-table";

export default function Feed() {
  const dispatch = useAppDispatch();
  const ordersInf = useAppSelector(allOrdersInf);
  const ordersData = ordersInf && ordersInf.orders;
  const ingredientsData = useAppSelector(ingredientSelector);
  const location = useLocation();

  function price(item:TFeedOrder) {
    let totalPrice = 0;
    if (item) {
      item.ingredients.forEach((ingrAll) => {
        ingredientsData.forEach(
          (itemData: { _id: string; type: string; price: number }) => {
            if (itemData._id === ingrAll) {
              totalPrice +=
                itemData.type === "bun" ? itemData.price * 2 : itemData.price;
            }
          }
        );
      });
    }
    return totalPrice;
  }

  useEffect(() => {
    dispatch(connect(ORDERS_ALL));

    return () => {
      wsClose();
    };
  }, []);

  return (
    ordersData && (
      <div className={styles.main}>
        <h1 className={`text text_type_main-large mb-5 mt-10  ${styles.title}`}>
          Лента заказов
        </h1>
        <section className={`${styles.orders} custom-scroll pr-2`}>
          {ordersData.map((item) => {
            return (
              <Link
                className={styles.link}
                key={item._id}
                to={`${item.number}`}
                state={{ background: location }}
              >
                <OrderCard
                  key={item._id}
                  ordersData={item}
                  price={price(item)}
                />
              </Link>
            );
          })}
        </section>
        <div className={styles.stats}>
          <OrderStats ordersInf={ordersInf} number={""} _id={""} status={""} />
        </div>
      </div>
    )
  );
}

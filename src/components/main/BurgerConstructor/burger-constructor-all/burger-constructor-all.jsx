import React, { useCallback, useMemo } from "react";
import styles from "./burger-constructor-all.module.css";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { clickOpen, clickOrderList } from "../../../../services/store/reducers/modalOverlaySlice";
import { clickDetails } from "../../../../services/store/reducers/orderDetailsSlice";
import { setDetails } from "../../../../services/store/reducers/detailsQuery";
import { clearOrder } from "../../../../services/store/reducers/burgerConstructorSlice";

function BurgerConstructorAll({ name }) {
  const { draggedBun, draggedIngredients } = useSelector(
    (state) => state.constIngredient
  );

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(clickDetails(true));
    dispatch(clickOpen(true));
    dispatch(setDetails([...draggedBun, ...draggedIngredients]));
    dispatch(clearOrder([]))
  };

  return (
    <div className={styles.constructorall + " pt-10"}>
      <div className={"pr-10"}>
        <span className="text_type_digits-medium">
          {draggedIngredients.reduce(function (acc, data) {
            return acc + data.price;
          }, 0) +
            2 *
              draggedBun.reduce(function (acc, data) {
                return acc + data.price;
              }, 0)}
        </span>
        <CurrencyIcon />
      </div>
      <Button disabled={[...draggedBun, ...draggedIngredients].length<=0} onClick={onClick} htmlType="submit" type="primary" size="large">
        {name}
      </Button>
    </div>
  );
}

export default BurgerConstructorAll;
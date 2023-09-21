import styles from "./burger-constructor-all.module.css";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../../services/hooks/hooks";
import { clickOpen } from "../../../../services/store/reducers/modalOverlaySlice";
import { clickDetails } from "../../../../services/store/reducers/orderDetailsSlice";
import { clearOrder } from "../../../../services/store/reducers/burgerConstructorSlice";
import { TingredintsConstructor } from "../../../../utils/types";
import { sendOrder } from "../../../../utils/api";

function BurgerConstructorAll({ name }: { name: string }) {
  const { draggedBun, draggedIngredients } = useAppSelector(
    (state) => state.constIngredient
  );

  const isDisabled = useAppSelector((store) => store.userStatus.user);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    !isDisabled ? navigate("/login") : dispatch(clickDetails(true));
    !isDisabled ? navigate("/login") : dispatch(clickOpen(true));
    dispatch(sendOrder([...draggedBun, ...draggedIngredients]));
    isDisabled && dispatch(clearOrder([]));
  };

  return (
    <div className={styles.constructorTotal + " pt-10"}>
      <div className={"pr-10"}>
        <span className="text_type_digits-medium" data-test={'total'}>
          {draggedIngredients.reduce(function (
            acc: number,
            data: TingredintsConstructor
          ) {
            return acc + data.price;
          },
          0) +
            2 *
              draggedBun.reduce(function (
                acc: number,
                data: TingredintsConstructor
              ) {
                return acc + data.price;
              },
              0)}
        </span>
        <CurrencyIcon type="primary" />
      </div>
      <Button
        disabled={[...draggedBun, ...draggedIngredients].length <= 0}
        onClick={onClick}
        htmlType="submit"
        type="primary"
        size="large"
      >
        {name}
      </Button>
    </div>
  );
}

export default BurgerConstructorAll;
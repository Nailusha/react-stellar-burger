import React from "react";
import styles from './burger-constructor-all.module.css'
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructorAll({ingridients, name}) {
  return (
    <div className={styles.constructorall + " pt-10"}>
      <div className={"pr-10"}>
        <span className="text_type_digits-medium">
          {ingridients.reduce(function (acc, data) { return acc + data.price; }, 0)}
        </span>
        <CurrencyIcon/>
      </div>
      <Button htmlType="button" type="primary" size="large">{ name }</Button>
    </div>
  )
}

export default BurgerConstructorAll
import React from "react";
import styles from "./burger-ingredient-head.module.css";

import BurgerIngredient from "../burger-ingridient/burger-ingredient";
import PropTypes from "prop-types";

import { ingredientPropType } from "../../../../utils/prop-types";
import { memoIngredientsSelector } from "../../../../services/store/selector/memoIngredientSelector";
import { Link, useLocation } from "react-router-dom";
import { TWithChildren, TingredientType, TingredintsConstructor } from "../../../../utils/types";
import { useAppSelector } from "../../../../services/hooks/hooks";

function BurgerIngredients({ productName, typeProduct }: TWithChildren<TingredientType>) {
  const ingredients = useAppSelector(memoIngredientsSelector);
  const location = useLocation();

  return (
    <>
      <p className={"text_type_main-default " + styles.text}>{productName}</p>
      <div className={styles.burgerIngredientBlock + " pt-6 pb-10 pl-4 pr-4"}>
        {ingredients
          .filter((item: TingredintsConstructor) => item.type === typeProduct)
          .map((item: TingredintsConstructor) => {
            return <Link className={styles.link} key={item._id} to={`profile/orders/${item._id}`} state={{ background: location }}> <BurgerIngredient key={item._id} ingredient={item}/> </Link>;
          })}
      </div>
    </>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType),
  productName: PropTypes.string,
  typeProduct: PropTypes.string,
};

export default BurgerIngredients;
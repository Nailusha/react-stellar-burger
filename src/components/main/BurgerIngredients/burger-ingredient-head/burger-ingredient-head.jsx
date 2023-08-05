import React from 'react';
import styles from './burger-ingredient-head.module.css';

import PropTypes from 'prop-types';
import BurgerIngredient from "../burger-ingredient/burger-ingredient";

import { ingredientPropType } from '../../../utils/prop-types';
import { useSelector } from "react-redux";
import { memoIngredientsSelector } from '../../../services/store/selector/memoIngredientSelector';

function BurgerIngredients({ productName, typeProduct }) {
  const ingredients = useSelector(memoIngredientsSelector);

  return (
    <>
      <p className={"text_type_main-default " + styles.text}>{productName}</p>
      <div className={styles.burgerIngredient + " pt-6 pb-10 pl-4 pr-4"}>
        {ingredients
          .filter((item) => item.type === typeProduct)
          .map((item) => {
            return <BurgerIngredient key={item._id} ingredient={item} />;
          })}
      </div>
    </>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType),
  setIsOpen: PropTypes.func,
  setClickIngredient: PropTypes.func,
  setImageIngredient: PropTypes.func,
  productName: PropTypes.string,
  typeProduct: PropTypes.string,
}

export default BurgerIngredients;

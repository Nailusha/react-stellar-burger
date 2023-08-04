import React from 'react';
import styles from './burger-ingridient-head.module.css';

import PropTypes from 'prop-types';
import BurgerIngridient from "../burger-ingridient/burger-ingridient";

import { ingridientPropType } from '../../../utils/prop-types';
import { useSelector } from "react-redux";
import { memoIngridientsSelector } from '../../../services/store/selector/memoIngridientSelector';
import { ingridientPropType } from '../../../utils/prop-types';

function BurgerIngridients({ productName, typeProduct }) {
  const ingridients = useSelector(memoIngridientsSelector);

  return (
    <>
      <p className={"text_type_main-default " + styles.text}>{productName}</p>
      <div className={styles.burgerIngridientBlock + " pt-6 pb-10 pl-4 pr-4"}>
        {ingridients
          .filter((item) => item.type === typeProduct)
          .map((item) => {
            return <BurgerIngridient key={item._id} ingredient={item} />;
          })}
      </div>
    </>
  );
}

BurgerIngridients.propTypes = {
  ingridients: PropTypes.arrayOf(ingridientPropType),
  setIsOpen: PropTypes.func,
  setClickIngridient: PropTypes.func,
  setImageIngridient: PropTypes.func,
  productName: PropTypes.string,
  typeProduct: PropTypes.string,
}

export default BurgerIngridients;

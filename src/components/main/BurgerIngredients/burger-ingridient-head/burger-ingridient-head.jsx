import React from 'react';
import styles from './burger-ingridient-head.module.css';
import PropTypes from 'prop-types';
import BurgerIngridient from "../burger-ingridient/burger-ingridient";
import { ingridientPropType } from '../../../utils/prop-types';

function BurgerIngridientHead({setIsOpen, setClickIngridient, setImageIngridient, ingridients, productName, typeProduct}) {
    
    return (
        <>
        <p className={"text_type_main-default " + styles.text}>{productName}</p>
        <div className={styles.burgerIngridient + " pt-6 pb-10 pl-4 pr-4"}>
        {ingridients.filter(item => item.type === typeProduct).map(item => {
            
          return (
              <BurgerIngridient 
              setIsOpen={setIsOpen} 
              setClickIngridient={setClickIngridient} 
              setImageIngridient={setImageIngridient} 
              key={item._id} ingridient={item} />
            )
        })
    }
        </div>
      </>
    )
}

BurgerIngridientHead.propTypes = {
  ingridients: PropTypes.arrayOf(ingridientPropType),
  setIsOpen: PropTypes.func,
  setClickIngridient: PropTypes.func,
  setImageIngridient: PropTypes.func,
  productName: PropTypes.string,
  typeProduct: PropTypes.string,
}

export default BurgerIngridientHead

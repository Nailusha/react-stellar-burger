import React from 'react';
import styles from './burger-ingridient-head.module.css';

import BurgerIngridient from "../burger-ingridient/burger-ingridient";


function BurgerIngridientHead({setIsOpen, setClickIngridient, setImageIngridient, ingridients, productName, typeProduct}) {
    
    return (
        <>
        <p className={"text_type_main-default " + styles.text}>{productName}</p>
        <div className={styles.BurgerIngridient + " pt-6 pb-10 pl-4 pr-4"}>
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

export default BurgerIngridientHead

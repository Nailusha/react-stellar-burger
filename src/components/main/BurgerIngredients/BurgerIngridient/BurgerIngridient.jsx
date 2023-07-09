import React from 'react';

import styles from './BurgerIngredient.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngridient({ingridient, setImageIngridient, setIsOpen, setClickIngridient}) {
    
    const onClick = () => {
        setImageIngridient(ingridient)
        setIsOpen(true)
        setClickIngridient(true)
        console.log(ingridient.image)
        console.log(typeof (ingridient.image))
      }

    return (

        <div className={styles.card}>
            <Counter />
            <img className={styles.image} src={ingridient.image} onClick={onClick}/>
            <span className={"text_type_main-default pt-1 " + styles.price}>{ingridient.price}
            <CurrencyIcon type="primary" />
            </span>
            <p className={"text_type_main-default " + styles.name + ' pt-1'}>{ingridient.name}</p>
        </div>

    )
}

export default BurgerIngridient
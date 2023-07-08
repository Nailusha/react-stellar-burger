import React from 'react';

import styles from './BurgerIngredient.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngridient({ingridient}) {
    
    return (

        <div className={styles.card}>
            <img src={ingridient.image} />
            <span>{ingridient.price}
            <CurrencyIcon type="primary" />
            </span>
            <p>{ingridient.name}</p>
        </div>

    )
}

export default BurgerIngridient
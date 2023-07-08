import React from 'react';

import { BurgerIngridient } from './BurgerIngredient/BurgerIngredient'

function BurgerIngridients({ingridients}) {
    
    return (
        <div>
            <p>Булки</p>
            {ingridients.map(item => {
                <BurgerIngridient key={item._id} ingridient={item} />
            })}
        </div>
    )
}

export default BurgerIngridients
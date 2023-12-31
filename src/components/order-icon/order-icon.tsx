
 /* if (!ingredients) {
    // Обработка случая, когда ingredients не определено или равно null
    return null; // или другая логика по умолчанию
  }*/


  import React, { FC } from "react";
  import styles from "./order-icon.module.css";
  import { IngredientsIcon } from "../ingredients-icon/ingredients-icon";
  import { TingredientType } from "../../utils/types";
  
  interface Props {
    ingredients: string[];
    shift?: boolean;
  }
  
  export const OrderList: FC<Props> = ({ ingredients, shift = true }) => {
    const uniqueIngredients = ingredients.filter(
      (item: string, index: number) => {
        return ingredients.indexOf(item) === index;
      }
    );
  
    const listsIconOrder =
      uniqueIngredients.length > 6
        ? uniqueIngredients.slice(0, 6)
        : uniqueIngredients;
  
    const remains = uniqueIngredients.length > 6 && uniqueIngredients.length - 6;
  
    function countDuplicates(arr:any[]) {
      return arr.reduce(
        (counts: { [x: string]:any }, current: string | number) => {
          counts[current] = (counts[current] || 0) + 1;
          return counts;
        },
        {}
      );
    }
  
    const count = countDuplicates(ingredients);
  
    return (
      <ul
        className={shift === true ? styles.list : styles.icon + " custom-scroll"}
      >
        {listsIconOrder.map(
          (ingredient: string, index: number) => (
            <li key={index}>
              <IngredientsIcon
                count={count[`${ingredient}`]}
                ingredient={ingredient}
                index={index}
                shift={shift}
                remains={remains}
              />
            </li>
          )
        )}
      </ul>
    );
  };
import React from 'react';
import styles from './ingridient-details.module.css'
import image from '../../../images/done.svg';
import { string } from 'prop-types';

function Ingridient({ imageIngridient }) {
  console.log(imageIngridient)
  return (
    <>
      <div className={styles.ingridient + ' pt-30'}>
      <p className={styles.ingridient_title + " text_type_main-large pt-10 pl-10"}>Детали ингредиента</p>
      <img src={`${imageIngridient.image_large}`} alt=""/>
      <p className={styles.text + " text_type_main-medium pt-4"}>{imageIngridient.name}</p>
      <ul className={styles.table + " pt-8"}>
          <li><p className={styles.text + " text_type_main-default text_color_inactive"}>Калории,ккал</p>
          <p className={styles.text + " text_type_main-default text_color_inactive pt-4"}>{imageIngridient.calories}</p>
          </li>    
          <li><p className={styles.text + " text_type_main-default text_color_inactive"}>Белки, г</p>
          <p className={styles.text + " text_type_main-default text_color_inactive pt-4"}>{imageIngridient.proteins}</p>
          </li>    
          <li><p className={styles.text + " text_type_main-default text_color_inactive"}>Жиры, г</p>
          <p className={styles.text + " text_type_main-default text_color_inactive pt-4"}>{imageIngridient.fat}</p>
          </li>    
          <li><p className={styles.text + " text_type_main-default text_color_inactive"}>Углеводы, г</p>
            <p className={styles.text + " text_type_main-default text_color_inactive pt-4"}>{imageIngridient.carbohydrates}</p>
          </li>    
      </ul>
    </div>
      </>
  )
}

export default Ingridient
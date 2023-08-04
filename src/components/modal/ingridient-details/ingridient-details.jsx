import React from 'react';
import styles from './ingridient-details.module.css'
import { string } from "prop-types";
import { useSelector } from "react-redux";
import { detailsSelector } from "../../services/store/selector/detailsSelector";

import image from '../../../images/done.svg';

function IngridientDetails() {
  const detailsIngridient = useSelector(detailsSelector);
  return (
    <div className={styles.ingridientDetails + " pt-30"}>
      <p
        className={
          styles.ingridientDetails_title + " text_type_main-large pt-10 pl-10"
        }
      >
        Детали ингредиента
      </p>
      <img
        src={`${detailsIngridient.image_large}`}
        alt={detailsIngridient.name}
      />
      <p className={styles.text + " text_type_main-medium pt-4"}>
        {detailsIngridient.name}
      </p>
      <ul className={styles.table + " pt-8"}>
        <li>
          <p
            className={
              styles.text + " text_type_main-default text_color_inactive"
            }
          >
            Калории,ккал
          </p>
          <p
            className={
              styles.text + " text_type_main-default text_color_inactive pt-4"
            }
          >
            {detailsIngridient.calories}
          </p>
        </li>
        <li>
          <p
            className={
              styles.text + " text_type_main-default text_color_inactive"
            }
          >
            Белки, г
          </p>
          <p
            className={
              styles.text + " text_type_main-default text_color_inactive pt-4"
            }
          >
            {detailsIngridient.proteins}
          </p>
        </li>
        <li>
          <p
            className={
              styles.text + " text_type_main-default text_color_inactive"
            }
          >
            Жиры, г
          </p>
          <p
            className={
              styles.text + " text_type_main-default text_color_inactive pt-4"
            }
          >
            {detailsIngridient.fat}
          </p>
        </li>
        <li>
          <p
            className={
              styles.text + " text_type_main-default text_color_inactive"
            }
          >
            Углеводы, г
          </p>
          <p
            className={
              styles.text + " text_type_main-default text_color_inactive pt-4"
            }
          >
            {detailsIngridient.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default IngridientDetails;
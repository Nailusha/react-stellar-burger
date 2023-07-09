import React from 'react';
import styles from './Details.module.css';

function Details() {
    return (
        <>
          <div className={styles.details + ' pt-30'}>
          <p className={styles.text_num +" shadow text text_type_digits-large pt-8"}>034536</p>
          <p className={styles.text_order + " text_type_main-medium pt-8"}>идентификатор заказа</p>
          <img className="mt-15" src={image} alt=""/>
          <p className={styles.text_status + " text_type_main-default pt-15"}>ваш заказ начали готовить</p>
          <p className={styles.text_end + " text_type_main-default text_color_inacti pt-2"}>Дождитесь готовности на орбитальной станции</p>
        </div>
          </>
      )
}

export default Details
import React from 'react';
import styles from './burger-ingridient-tab.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";

function BurgerIngridientTab({ current, handleTabClick }) {
    return (
      <>
        <h1
          className={styles.main_title + " text_type_main-large" + " pt-10 pb-5"}
        >
          Соберите бургер
        </h1>
        <div className={styles.container + " pb-10"}>
          <Tab
            value="bun"
            active={current === "bun"}
            onClick={(e) => handleTabClick(e)}
          >
            Булки
          </Tab>
          <Tab
            value="sauce"
            active={current === "sauce"}
            onClick={(e) => handleTabClick(e)}
          >
            Соусы
          </Tab>
          <Tab
            value="main"
            active={current === "main"}
            onClick={(e) => handleTabClick(e)}
          >
            Начинки
          </Tab>
        </div>
      </>
    );
  }
  
  BurgerIngridientTab.propTypes = {
    current: PropTypes.string,
    handleTabClick: PropTypes.func,
  };
  

export default BurgerIngridientTab;
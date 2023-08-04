import React from "react";
import styles from './app-main.module.css';

import BurgerIngridientTab from "../BurgerIngredients/burger-ingridient-tab/burger-ingridient-tab";
import BurgerIngridientHead from '../BurgerIngredients/burger-ingridient-head/burger-ingridient-head';
import { BurgerConstructorBottom } from "../BurgerConstructor/burger-constructor";
import { BurgerConstructorMiddle } from "../BurgerConstructor/burger-constructor";
import { BurgerConstructorTop } from "../BurgerConstructor/burger-constructor";
import BurgerConstructorAll from "../BurgerConstructor/burger-constructor-all/burger-constructor-all";

import PropTypes from 'prop-types';
import { ingridientPropType } from '../../utils/prop-types';

function AppMain({setClickIngridient, setIsOpen, setImageIngridient, ingridients}) {
    return (
      <main className={styles.main}>
        
        <section >
          <BurgerIngridientTab/>
          <div className={styles.main_ingridientBlock + " custom-scroll"}>
            <BurgerIngridientHead 
            setIsOpen={setIsOpen} setClickIngridient={setClickIngridient} 
            setImageIngridient={setImageIngridient} ingridients={ingridients} 
            productName={"Булки"} typeProduct={"bun"} />
            <BurgerIngridientHead 
            setIsOpen={setIsOpen} setClickIngridient={setClickIngridient} 
            setImageIngridient={setImageIngridient} ingridients={ingridients} 
            productName={"Соусы"} typeProduct={"sauce"} />
            <BurgerIngridientHead 
            setIsOpen={setIsOpen} setClickIngridient={setClickIngridient} 
            setImageIngridient={setImageIngridient} ingridients={ingridients} 
            productName={"Начинки"} typeProduct={"main"} />
          </div>
  
        </section>  
        <section className={styles.main_constructorBlock +' pt-25 pl-4'}>
          <BurgerConstructorTop ingridient={ingridients} index={0} />
            <div className={styles.main_constructorMidleBlock + " custom-scroll pr-2"}>
              <BurgerConstructorMiddle ingridient={ingridients}/>
            </div>
          <BurgerConstructorBottom ingridient={ingridients} index={0} />
          <BurgerConstructorAll ingridients={ingridients} name={ "Оформить заказ" } />
        </section>
    </main>
    )
  }
  
  AppMain.propTypes = {
    ingridients: PropTypes.arrayOf(ingridientPropType),
    setClickIngridient: PropTypes.func,
    setIsOpen: PropTypes.func,
    setImageIngridient: PropTypes.func,
  }

  export default AppMain
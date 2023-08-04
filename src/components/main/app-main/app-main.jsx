import React from "react";
import styles from './app-main.module.css';

import BurgerIngridientTab from "../BurgerIngredients/burger-ingridient-tab/burger-ingridient-tab";
import BurgerConstructorAll from "../BurgerConstructor/burger-constructor-all/burger-constructor-all";
import BurgerConstructor

import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { changeTypeTab } from "../../../services/store/reducers/ingridientsTab";

function AppMain() {
  const dispatch = useDispatch();

  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const current = useSelector((state) => state.ingridientsTab.typeTab);

  function handleTabClick(type) {
    dispatch(changeTypeTab(type));

    switch (type) {
      case "bun":
        bunRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      case "sauce":
        sauceRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      case "main":
        mainRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }

  function handleTab(evt) {
    const target = evt.target;
    const scrollTop = target.scrollTop;
    const sauceScroll =
      sauceRef.current.getBoundingClientRect().y -
      bunRef.current.getBoundingClientRect().y -
      40;
    const mainScroll =
      mainRef.current.getBoundingClientRect().y -
      bunRef.current.getBoundingClientRect().y -
      40;

    if (scrollTop >= mainScroll) {
      dispatch(changeTypeTab("main"));
    } else if (scrollTop < sauceScroll) {
      dispatch(changeTypeTab("bun"));
    } else {
      dispatch(changeTypeTab("sauce"));
    }
  }

  return (
    <main className={styles.main}>
      <section>
        <BurgerIngridientTab
          current={current}
          handleTabClick={handleTabClick}
        />

        <div
          className={styles.main_ingredientBlock + " custom-scroll"}
          onScroll={handleTab}
        >
          <div ref={bunRef}>
            <BurgerIngridients productName={"Булки"} typeProduct={"bun"} />
          </div>
          <div ref={sauceRef}>
            <BurgerIngridients productName={"Соусы"} typeProduct={"sauce"} />
          </div>
          <div ref={mainRef}>
            <BurgerIngridients productName={"Начинки"} typeProduct={"main"} />
          </div>
        </div>
      </section>

      <section className={"pt-25"}>
        <BurgerConstructor index={0} />
        <BurgerConstructorAll name={"Оформить заказ"} />
      </section>
    </main>
  );
}

/*function AppMain({setClickIngridient, setIsOpen, setImageIngridient, ingridients}) {
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
  }*/

  export default AppMain
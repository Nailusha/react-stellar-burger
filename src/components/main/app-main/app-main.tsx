import React, { SyntheticEvent } from "react";
import styles from "./app-main.module.css";
import { useRef } from "react";

import BurgerIngredientTab from "../BurgerIngredients/burger-ingredient-tab/burger-ingredient-tab";
import BurgerConstructorAll from "../BurgerConstructor/burger-constructor-all/burger-constructor-all";
import BurgerConstructor from "../BurgerConstructor/burger-constructor";
import BurgerIngredients from "../BurgerIngredients/burger-ingredient-head/burger-ingredient-head";

import { changeTypeTab } from "../../../services/store/reducers/ingredientsTab";
import { useAppDispatch, useAppSelector } from "../../../services/hooks/hooks";

function AppMain() {
  const dispatch = useAppDispatch();

  const bunRef = useRef<HTMLHeadingElement>(null);
  const sauceRef = useRef<HTMLHeadingElement>(null);
  const mainRef = useRef<HTMLHeadingElement>(null);

  const current = useAppSelector((state: any) => state.ingredientsTab.typeTab);

  function handleTabClick(type: string) {
    dispatch(changeTypeTab(type));

    switch (type) {
      case "bun":
        if (bunRef.current !== null) {
          bunRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;

      case "sauce":
        if (sauceRef.current !== null) {
          sauceRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;

      case "main":
        if (mainRef.current !== null) {
          mainRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      default:
        break;
    }
  }

  function handleTab(evt: SyntheticEvent) {
    const target = evt.target as HTMLDivElement;
    const scrollTop = target.scrollTop;
    if (
      sauceRef.current !== null &&
      bunRef.current !== null &&
      mainRef.current !== null
    ) {
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
  }

  return (
    <main className={styles.main}>
      <section>
        <BurgerIngredientTab
          current={current}
          handleTabClick={handleTabClick}
        />
        <div
          className={styles.main_ingredientBlock + " custom-scroll"}
          onScroll={handleTab}
        >
          <div ref={bunRef}>
            <BurgerIngredients productName={"Булки"} typeProduct={"bun"} />
          </div>
          <div ref={sauceRef}>
            <BurgerIngredients productName={"Соусы"} typeProduct={"sauce"} />
          </div>
          <div ref={mainRef}>
            <BurgerIngredients productName={"Начинки"} typeProduct={"main"} />
          </div>
        </div>
      </section>

      <section className={"pt-25"}>
        <BurgerConstructor />
        <BurgerConstructorAll name={"Оформить заказ"} />
      </section>
    </main>
  );
}

export default AppMain;
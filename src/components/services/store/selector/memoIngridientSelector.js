import { createSelector } from "@reduxjs/toolkit";
import { ingridientSelector } from "./ingridientSelector";
import { constructorSelector } from "./IngredientsSelector/constructorSelector";
import { useDispatch } from "react-redux";
import { constructorBunSelector } from "./IngredientsSelector/constructorBunSelector";

export const memoIngridientsSelector = createSelector(
  [ingridientSelector, constructorSelector, constructorBunSelector],
  (ingridients, constructorIngridients, constructorBunSelector) => {
    const newIngridientsArr = ingridients.reduce((acc, item) => {
      const count = [
        ...constructorIngridients,
        ...constructorBunSelector,
      ].filter((el) => el._id === item._id).length;
      const newIngridient = { ...item, count };
      return [...acc, newIngridient];
    }, []);

    return newIngridientsArr;
  }
);
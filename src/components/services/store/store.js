import { configureStore } from "@reduxjs/toolkit";
import ingridientsReducer from "./reducers/burgerIngridientsSlice";
import constructorReducer from "./reducers/burgerConstructorSlice";
import ingridDetailsReducer from "./reducers/ingridientDetails";
import orderDetailsReducer from "./reducers/orderDetailsSlice";
import modalOverlayReducer from "./reducers/modalOverlaySlice";
import ingridientsTabReducer from "./reducers/ingridientsTab";

export const store = configureStore({
  reducer: {
    ingridients: ingridientsReducer,
    constIngridient: constructorReducer,
    ingridDetails: ingridDetailsReducer,
    orderDetails: orderDetailsReducer,
    modalOverlay: modalOverlayReducer,
    ingridientsTab: ingridientsTabReducer,
  },
});
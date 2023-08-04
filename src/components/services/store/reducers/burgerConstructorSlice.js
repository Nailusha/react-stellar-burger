import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  draggedBun: [],
  draggedIngredients: [],
};

const burgerConstructorSlice = createSlice({
  name: "constIngridient",
  initialState,

  reducers: {
    addBun: (state, action) => {
      state.draggedBun = [action.payload];
    },

    addIngridient: (state, action) => {
      state.draggedIngridients = [...state.draggedIngridients, action.payload];
      console.log(action.payload);
    },

    moveIngridients: (state, action) => {
      const { indexFrom, indexTo, ingridient } = action.payload;
      state.draggedIngridients.splice(indexFrom, 1);
      state.draggedIngridients.splice(indexTo, 0, ingridient);
    },

    deliteIngridient: (state, action) => {
      state.draggedIngridients = [
        ...state.draggedIngridients.filter(
          (item) => item._uuid !== action.payload
        ),
      ];
    },

    clearOrder: (state, action) => {
      state.draggedIngridients = action.payload;
      state.draggedBun = action.payload;
    },
  },
});

export const {
  addBun,
  addIngridient,
  deliteIngridient,
  moveIngridients,
  clearOrder,
} = burgerConstructorSlice.actions;
export default burgerConstructorSlice.reducer;
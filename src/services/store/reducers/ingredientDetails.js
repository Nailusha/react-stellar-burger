import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selctIngredient: [],
  clickStutus: false,
  count: 0,
};

const ingredientDetailsSlice = createSlice({
  name: "ingredDetails",
  initialState,

  reducers: {
    addIngredDetails: (state, action) => {
      state.selctIngredient = action.payload;
    },

    clickIngredient: (state, action) => {
      state.clickStutus = action.payload;
    },

    counter: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { addIngredDetails, clickIngredient, counter } =
  ingredientDetailsSlice.actions;
export default ingredientDetailsSlice.reducer;
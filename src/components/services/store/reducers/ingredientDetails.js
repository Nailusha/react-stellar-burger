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
    addIngridDetails: (state, action) => {
      state.selctIngredient = action.payload;
    },

    clickIngridient: (state, action) => {
      state.clickStutus = action.payload;
    },

    counter: (state, action) => {
      state.count = action.payload;
      console.log(action.payload);
    },
  },
});

export const { addIngredDetails, clickIngredient, counter } =
  ingredientDetailsSlice.actions;
export default ingredientDetailsSlice.reducer;
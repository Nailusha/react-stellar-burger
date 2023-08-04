import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selctIngridient: [],
  clickStutus: false,
  count: 0,
};

const ingridientDetailsSlice = createSlice({
  name: "ingridDetails",
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

export const { addIngridDetails, clickIngridient, counter } =
  ingridientDetailsSlice.actions;
export default ingridientDetailsSlice.reducer;
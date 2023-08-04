import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  typeTab: null,
};

const ingridientsTabSlice = createSlice({
  name: "ingridientsTab",
  initialState,

  reducers: {
    changeTypeTab: (state, action) => {
      state.typeTab = action.payload;
    },
  },
});

export const { changeTypeTab } = ingridientsTabSlice.actions;
export default ingridientsTabSlice.reducer;
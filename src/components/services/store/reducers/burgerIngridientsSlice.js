import { fetchIngridients } from "./ingridientQuery";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredients: [],
  isLoding: false,
  error: " ",
};

const burgerIngridientsSlice = createSlice({
  name: "ingridients",
  initialState,
  /*
  reducers: {
    ingridientsUploading(state, action) {
      state.isLoding = true;
      state.error = " ";
    },

    ingridientsUpload(state, action) {
      state.isLoding = false;
      state.error = " ";
      state.bun = action.payload.data.filter(item => item.type === 'bun');
      state.ingridients = action.payload.data.filter(item => item.type !== 'bun');
      console.log(state.ingredients)
    },

    ingridientsUploadError(state) {
      state.isLoding = false;
      state.error = "action.error";
    }
  }, */
  extraReducers: (builder) => {
    builder
      // Add reducers for additional action types here, and handle loading state as needed
      .addCase(fetchIngridients.pending.type, (state) => {
        state.isLoding = false;
        state.error = " ";
      })

      .addCase(fetchIngridients.fulfilled.type, (state, action) => {
        state.isLoding = true;
        state.error = " ";
        state.ingridients = action.payload.data;
      })

      .addCase(fetchIngridients.rejected.type, (state, action) => {
        state.isLoding = false;
        state.error = action.payload;
      });
  },
});

export const {
  ingridientsUploading,
  ingridientsUpload,
  ingridientsUploadError,
} = burgerIngridientsSlice.actions;
export default burgerIngridientsSlice.reducer;
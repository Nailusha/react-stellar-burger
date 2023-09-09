import { createAsyncThunk } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { BASE_URL, checkResponse, getIngredients } from "../../../utils/api";

export const fetchIngredients = createAsyncThunk(
  "ingredients/get",
  getIngredients
);
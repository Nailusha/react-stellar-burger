import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import thunk from "redux-thunk";
import {
  BASE_URL,
  checkResponse,
  request,
  sendOrder,
} from "../../../utils/api";

import { addBun, addIngridient, clearOrder } from "./burgerConstructorSlice";

// у thunkApi есть методы
export const setDetails = createAsyncThunk("details/post", (id, thunkApi) => sendOrder(id));
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import thunk from "redux-thunk";

import { BASE_URL, checkResponse, request, sendOrder } from "../../../utils/api";
import { addBun, addIngredient, clearOrder } from "./burgerConstructorSlice";


export const setDetails = createAsyncThunk("details/post", (id, thunkApi) => sendOrder(id));
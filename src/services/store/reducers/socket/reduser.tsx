import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { wsOpen, wsClose, wsMessage, wsError, wsConnecting } from "./actions";
import { TWSMessage, WebsocketStatus } from "../../../../utils/live-table";

export type LiveTableStore = {
  status: WebsocketStatus;
  connectionError: string;
  data: TWSMessage | null;
};

const initialState: LiveTableStore = {
  status: WebsocketStatus.OFFLINE,
  connectionError: "",
  data: null,
};

export const wsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(wsConnecting, (state) => {
      state.status = WebsocketStatus.CONNECTING;
    })
    .addCase(wsOpen, (state) => {
      state.status = WebsocketStatus.ONLINE;
      state.connectionError = "";
    })
    .addCase(wsClose, (state) => {
      state.status = WebsocketStatus.OFFLINE;
    })
    .addCase(wsError, (state, action) => {
      state.connectionError = action.payload;
    })
    .addCase(wsMessage, (state, action: PayloadAction<TWSMessage | null>) => {
      state.data = action.payload;
    });
});
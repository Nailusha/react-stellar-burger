import { TordersInf } from "./types";

export enum WebsocketStatus {
    CONNECTING = 'CONNECTING...',
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE'
}

export interface TableRow {
    id: number;
    text: string;
}

export type LiveTable = Array<TFeedOrder>;

export enum IOrderStatus {
    done = 'done',
    pending = 'pending',
    created = 'created',
}

export type TFeedOrder = {
    _id: string;
    ingredients: string[];
    name: string;
    number: number;
    status: IOrderStatus;
    createdAt: string;
    updatedAt: string;
    ordersInf: TordersInf;
  }

export type TWSMessage = {
    success: boolean;
    orders: TFeedOrder[];
    total: number;
    totalToday: number;
  }

export type TWsData = {
    wsMessage: null | TWSMessage;
    wsConnected: boolean;
  }

export enum LiveTableActionType {
    DATA = 'data',
    INSERT = 'insert',
    DELETE = 'delete',
    UPDATE = 'update',
    MOVE = 'move',
}

export type Data = {
    type: LiveTableActionType.DATA,
    data: LiveTable
}

export type Insert = {
    type: LiveTableActionType.INSERT,
    data: {
        rows: Array<TableRow>,
        pos: number
    }
}

export type Update = {
    type: LiveTableActionType.UPDATE,
    data: LiveTable
}

export type Delete = {
    type: LiveTableActionType.DELETE,
    data: Array<number>
}

export type Move = {
    type: LiveTableActionType.MOVE,
    data: Array<{from: number, to: number}>
}

export type LiveTableAction = Insert | Data | Delete | Update | Move;

export type LiveTableActions = Array<LiveTableAction>;



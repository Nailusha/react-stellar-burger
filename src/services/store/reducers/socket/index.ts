import { combineReducers } from "redux";
import { wsReducer } from "./reduser";

const reducer = combineReducers({
    wsData: wsReducer
})

export default reducer;
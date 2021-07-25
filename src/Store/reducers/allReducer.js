import productReducer from "./productReducer";
import {combineReducers} from "redux";

const allReducer = combineReducers({
    product: productReducer
});

export default allReducer;
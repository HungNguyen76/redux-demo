import { combineReducers } from "redux";

import countReducer from './counter/reducer'
import productReducer from './product/reducer'
import listProduct from "./cart/reducer/listProduct";
import listCart from "./cart/reducer/listCart";
import notify from "./cart/reducer/notify";

export default combineReducers({countReducer, productReducer, listProduct, listCart, notify})
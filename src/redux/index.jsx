import { combineReducers } from "redux";

import countReducer from './counter/reducer'
import productReducer from './product/reducer'

export default combineReducers({countReducer, productReducer})
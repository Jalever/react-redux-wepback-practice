import cartReducer from "./cart-reducer.js";
import productReducer from "./product-reducer.js";

import { combineReducers } from "redux";

var allReducer = {
	carts: cartReducer,
	products: productReducer
};

const rootReducer = combineReducers(allReducer);
export default rootReducer;















import { createStore,applyMiddleware } from "redux";
import rootReducer from "./reducer/index.js";
import { composeWithDevTools } from "redux-devtools-extension";

var store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;




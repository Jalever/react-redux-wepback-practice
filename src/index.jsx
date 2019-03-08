import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store.jsx";

import TodoApp from "./TodoApp.jsx";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<Provider store={store}>
		<TodoApp />
	</Provider>,
	rootElement
)







import React from "react";

import AddTodo from "./components/AddTodo.jsx";
import TodoList from "./components/TodoList.jsx";
import VisibilityFilters from "./components/VisibilityFilters.jsx";

import "./styles/style.scss";

export default function TodoApp() {
	return(
		<div>
			<h1 className="todo-title">Add Todo List: </h1>
			<AddTodo />
			<VisibilityFilters />
			<TodoList />
		</div>
	);
}

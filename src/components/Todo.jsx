import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions.jsx";
import { Icon } from "antd";

const Todo = ({ todo, toggleTodo }) => (
	<li
		className="todo-item"
		onClick={ () => {
			toggleTodo(todo.id);
		} }>
		{ todo && todo.completed ? 
			(<Icon type="check" />) : (<Icon type="frown" />) }
		{" "}
		<span
			className={cx(
				"todo-item__text",
				todo && todo.completed && "todo-item-text-completed"
			)}>
			{ todo.content }
		</span>
	</li>
);

export default connect(
	null,
	{ toggleTodo }
)(Todo);




















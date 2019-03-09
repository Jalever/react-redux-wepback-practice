import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions.jsx";

import { Input,Button } from "antd";

import { BUTTON } from "../constants/constants.js";

class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ""
		};
		this.updateInput = this.updateInput.bind(this);
		this.handleAddTodo = this.handleAddTodo.bind(this);
	}

	updateInput(e) {
		this.setState({
			input: e.target.value
		});
	}

	handleAddTodo() {
		this.props.addTodo(this.state.input);
		this.setState({
			input: ""
		});
	}

	render() {
		return(
			<div className="add-todo-div">
				<Input
					className="add-todo-input"
					value={ this.state.input }
					onChange={this.updateInput}/>

				<Button
					className="add-todo-button"
					onClick={ this.handleAddTodo }>
					{ BUTTON.ADD_TODO }
				</Button>
			</div>
		);
	}
}

export default connect(
	null,
	{ addTodo }
)(AddTodo);










import React, { useState } from "react";
import ReactDOM from "react-dom";

import style from "./style.scss";
import store from "./store.js";

import { addToCart,updateToCart,deleteFromCart } from "./actions/cart-actions";

console.log("Initial State: ",store.getState());

var unsubscribe = store.subscribe( () => {
	console.log(store.getState());
	console.log("\n");
} );


store.dispatch(addToCart("House",3,33333));
store.dispatch(addToCart("Car",4,44444));
store.dispatch(updateToCart("Car",4,44445));
store.dispatch(deleteFromCart("Car"));
store.dispatch(deleteFromCart("House"));


unsubscribe();


function Example() {
	const [count, setCount] = useState(0);
	return(
		<div>
			<p>You clicked {count} times.</p>
			<button onClick={ () => { setCount( count + 1 ) } }>
				Click Me!
			</button>
		</div>
	);
}



class Rect extends React.Component {
	render() {
		return(
			<h1 className={style.rect}>Hello World!</h1>
		);
	}
}


ReactDOM.render(
	<Example />,
	document.getElementById("root")
)
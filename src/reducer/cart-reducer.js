import {
	ADD_TO_CART,
	UPDATE_TO_CART,
	DELETE_FROM_CART
} from "../actions/cart-actions";

var initialState = {
	cart: [
		{
			product: "Flour",
			quantity: "1",
			unitCost: "11111"
		},
		{
			product: "Milk",
			quantity: "2",
			unitCost: "22222"
		}
	]
};

export default function(state = initialState, action) {
	switch(action.type) {
		case ADD_TO_CART: {
			return {
				...state,
				cart:[...state.cart,action.payload]
			}
		}

		case UPDATE_TO_CART: {
			return {
				cart: state.cart.map( (oldStateCart) => {
					return oldStateCart.product === action.payload.product ? action.payload : oldStateCart;
				} )
			}
		}

		case DELETE_FROM_CART: {
			return {
				cart: state.cart.filter( (oldStateCart) => {
					return oldStateCart.product !== action.payload.product ? oldStateCart : null;
				} )
			}
		}

		default:
			return state;
	}
}




















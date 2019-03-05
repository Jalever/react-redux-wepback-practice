export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_TO_CART = "UPDATE_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";

export function addToCart(product, quantity, unitCost) {
	return {
		type: ADD_TO_CART,
		payload: {
			product,
			quantity,
			unitCost
		}
	};
}

export function updateToCart(product, quantity, unitCost) {
	return {
		type: UPDATE_TO_CART,
		payload: {
			product,
			quantity,
			unitCost
		}
	};
}


export function deleteFromCart(product) {
	return {
		type: DELETE_FROM_CART,
		payload: {
			product
		}
	};
}
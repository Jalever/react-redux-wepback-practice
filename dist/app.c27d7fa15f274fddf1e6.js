(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/style.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/style.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".rect {\n  color: #00ffff; }\n", ""]);



/***/ }),

/***/ "./src/actions/cart-actions.js":
/*!*************************************!*\
  !*** ./src/actions/cart-actions.js ***!
  \*************************************/
/*! exports provided: ADD_TO_CART, UPDATE_TO_CART, DELETE_FROM_CART, addToCart, updateToCart, deleteFromCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TO_CART", function() { return UPDATE_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FROM_CART", function() { return DELETE_FROM_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToCart", function() { return updateToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFromCart", function() { return deleteFromCart; });
var ADD_TO_CART = "ADD_TO_CART";
var UPDATE_TO_CART = "UPDATE_TO_CART";
var DELETE_FROM_CART = "DELETE_FROM_CART";
function addToCart(product, quantity, unitCost) {
  return {
    type: ADD_TO_CART,
    payload: {
      product: product,
      quantity: quantity,
      unitCost: unitCost
    }
  };
}
function updateToCart(product, quantity, unitCost) {
  return {
    type: UPDATE_TO_CART,
    payload: {
      product: product,
      quantity: quantity,
      unitCost: unitCost
    }
  };
}
function deleteFromCart(product) {
  return {
    type: DELETE_FROM_CART,
    payload: {
      product: product
    }
  };
}

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.js */ "./src/store.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Rect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Rect, _React$Component);

  function Rect() {
    _classCallCheck(this, Rect);

    return _possibleConstructorReturn(this, _getPrototypeOf(Rect).apply(this, arguments));
  }

  _createClass(Rect, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rect
      }, "Hello World!");
    }
  }]);

  return Rect;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rect, null), document.getElementById("root"));

/***/ }),

/***/ "./src/reducer/cart-reducer.js":
/*!*************************************!*\
  !*** ./src/reducer/cart-reducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/cart-actions */ "./src/actions/cart-actions.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  cart: [{
    product: "Flour",
    quantity: "1",
    unitCost: "11111"
  }, {
    product: "Milk",
    quantity: "2",
    unitCost: "22222"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_CART"]:
      {
        return _objectSpread({}, state, {
          cart: state.cart.map(function (oldStateCart) {
            return oldStateCart.product === action.payload.product ? action.payload : oldStateCart;
          })
        });
      }
  }
});

/***/ }),

/***/ "./src/reducer/index.js":
/*!******************************!*\
  !*** ./src/reducer/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cart_reducer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-reducer.js */ "./src/reducer/cart-reducer.js");
/* harmony import */ var _product_reducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-reducer.js */ "./src/reducer/product-reducer.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");



var allReducer = {
  carts: _cart_reducer_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  products: _product_reducer_js__WEBPACK_IMPORTED_MODULE_1__["default"]
};
var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])(allReducer);
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/reducer/product-reducer.js":
/*!****************************************!*\
  !*** ./src/reducer/product-reducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return state;
});

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducer_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer/index.js */ "./src/reducer/index.js");


var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducer_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/style.scss", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/style.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ })

},[["./src/index.jsx","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jYXJ0LWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci9jYXJ0LXJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvcHJvZHVjdC1yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2Nzcz9mOGYzIl0sIm5hbWVzIjpbIkFERF9UT19DQVJUIiwiVVBEQVRFX1RPX0NBUlQiLCJERUxFVEVfRlJPTV9DQVJUIiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInF1YW50aXR5IiwidW5pdENvc3QiLCJ0eXBlIiwicGF5bG9hZCIsInVwZGF0ZVRvQ2FydCIsImRlbGV0ZUZyb21DYXJ0IiwiUmVjdCIsInN0eWxlIiwicmVjdCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5pdGlhbFN0YXRlIiwiY2FydCIsInN0YXRlIiwiYWN0aW9uIiwibWFwIiwib2xkU3RhdGVDYXJ0IiwiYWxsUmVkdWNlciIsImNhcnRzIiwiY2FydFJlZHVjZXIiLCJwcm9kdWN0cyIsInByb2R1Y3RSZWR1Y2VyIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDbkY7QUFDQSxjQUFjLFFBQVMsVUFBVSxtQkFBbUIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7QUNGdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxXQUFXLEdBQUcsYUFBcEI7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QTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1HQUFnRDs7QUFFckU7O0FBRUEsR0FBRyxJQUFVO0FBQ2IsbUJBQW1CLHVNQUFpRztBQUNwSCxtQkFBbUIsbUJBQU8sQ0FBQyx1TUFBaUc7O0FBRTVILG9EQUFvRCxRQUFTOztBQUU3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6ImFwcC5jMjdkN2ZhMTVmMjc0ZmRkZjFlNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJlY3Qge1xcbiAgY29sb3I6ICMwMGZmZmY7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnQgY29uc3QgQUREX1RPX0NBUlQgPSBcIkFERF9UT19DQVJUXCI7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfVE9fQ0FSVCA9IFwiVVBEQVRFX1RPX0NBUlRcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9GUk9NX0NBUlQgPSBcIkRFTEVURV9GUk9NX0NBUlRcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvQ2FydChwcm9kdWN0LCBxdWFudGl0eSwgdW5pdENvc3QpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogQUREX1RPX0NBUlQsXHJcblx0XHRwYXlsb2FkOiB7XHJcblx0XHRcdHByb2R1Y3QsXHJcblx0XHRcdHF1YW50aXR5LFxyXG5cdFx0XHR1bml0Q29zdFxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUb0NhcnQocHJvZHVjdCwgcXVhbnRpdHksIHVuaXRDb3N0KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IFVQREFURV9UT19DQVJULFxyXG5cdFx0cGF5bG9hZDoge1xyXG5cdFx0XHRwcm9kdWN0LFxyXG5cdFx0XHRxdWFudGl0eSxcclxuXHRcdFx0dW5pdENvc3RcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUZyb21DYXJ0KHByb2R1Y3QpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogREVMRVRFX0ZST01fQ0FSVCxcclxuXHRcdHBheWxvYWQ6IHtcclxuXHRcdFx0cHJvZHVjdFxyXG5cdFx0fVxyXG5cdH07XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcblxyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vc3RvcmUuanNcIjtcclxuXHJcbmNsYXNzIFJlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGgxIGNsYXNzTmFtZT17c3R5bGUucmVjdH0+SGVsbG8gV29ybGQhPC9oMT5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG5cdDxSZWN0IC8+LFxyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxyXG4pIiwiaW1wb3J0IHtcclxuXHRBRERfVE9fQ0FSVCxcclxuXHRVUERBVEVfVE9fQ0FSVCxcclxuXHRERUxFVEVfVE9fQ0FSVFxyXG59IGZyb20gXCIuLi9hY3Rpb25zL2NhcnQtYWN0aW9uc1wiO1xyXG5cclxudmFyIGluaXRpYWxTdGF0ZSA9IHtcclxuXHRjYXJ0OiBbXHJcblx0XHR7XHJcblx0XHRcdHByb2R1Y3Q6IFwiRmxvdXJcIixcclxuXHRcdFx0cXVhbnRpdHk6IFwiMVwiLFxyXG5cdFx0XHR1bml0Q29zdDogXCIxMTExMVwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRwcm9kdWN0OiBcIk1pbGtcIixcclxuXHRcdFx0cXVhbnRpdHk6IFwiMlwiLFxyXG5cdFx0XHR1bml0Q29zdDogXCIyMjIyMlwiXHJcblx0XHR9XHJcblx0XVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBBRERfVE9fQ0FSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGNhcnQ6IHN0YXRlLmNhcnQubWFwKCAob2xkU3RhdGVDYXJ0KSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gb2xkU3RhdGVDYXJ0LnByb2R1Y3QgPT09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QgPyBhY3Rpb24ucGF5bG9hZCA6IG9sZFN0YXRlQ2FydDtcclxuXHRcdFx0XHR9IClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGNhcnRSZWR1Y2VyIGZyb20gXCIuL2NhcnQtcmVkdWNlci5qc1wiO1xyXG5pbXBvcnQgcHJvZHVjdFJlZHVjZXIgZnJvbSBcIi4vcHJvZHVjdC1yZWR1Y2VyLmpzXCI7XHJcblxyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbnZhciBhbGxSZWR1Y2VyID0ge1xyXG5cdGNhcnRzOiBjYXJ0UmVkdWNlcixcclxuXHRwcm9kdWN0czogcHJvZHVjdFJlZHVjZXJcclxufTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKGFsbFJlZHVjZXIpO1xyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlID0gW10sIGFjdGlvbikge1xyXG5cdHJldHVybiBzdGF0ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2VyL2luZGV4LmpzXCI7XHJcblxyXG5cclxudmFyIHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcblxyXG5cclxuXHJcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=
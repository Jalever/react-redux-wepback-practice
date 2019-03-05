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
!(function webpackMissingModule() { var e = new Error("Cannot find module './src/actions/cart-actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
    case !(function webpackMissingModule() { var e = new Error("Cannot find module './src/actions/cart-actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()):
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL2NhcnQtcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci9wcm9kdWN0LXJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzP2Y4ZjMiXSwibmFtZXMiOlsiUmVjdCIsInN0eWxlIiwicmVjdCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5pdGlhbFN0YXRlIiwiY2FydCIsInByb2R1Y3QiLCJxdWFudGl0eSIsInVuaXRDb3N0Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQUREX1RPX0NBUlQiLCJtYXAiLCJvbGRTdGF0ZUNhcnQiLCJwYXlsb2FkIiwiYWxsUmVkdWNlciIsImNhcnRzIiwiY2FydFJlZHVjZXIiLCJwcm9kdWN0cyIsInByb2R1Y3RSZWR1Y2VyIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDbkY7QUFDQSxjQUFjLFFBQVMsVUFBVSxtQkFBbUIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z0RDtBQUNBO0FBRUE7QUFDQTs7SUFFTUEsSTs7Ozs7Ozs7Ozs7Ozs2QkFDSTtBQUNSLGFBQ0M7QUFBSSxpQkFBUyxFQUFFQyxrREFBSyxDQUFDQztBQUFyQix3QkFERDtBQUdBOzs7O0VBTGlCQyw0Q0FBSyxDQUFDQyxTOztBQVN6QkMsZ0RBQVEsQ0FBQ0MsTUFBVCxDQUNDLDJEQUFDLElBQUQsT0FERCxFQUVDQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQU1BLElBQUlDLFlBQVksR0FBRztBQUNsQkMsTUFBSSxFQUFFLENBQ0w7QUFDQ0MsV0FBTyxFQUFFLE9BRFY7QUFFQ0MsWUFBUSxFQUFFLEdBRlg7QUFHQ0MsWUFBUSxFQUFFO0FBSFgsR0FESyxFQU1MO0FBQ0NGLFdBQU8sRUFBRSxNQURWO0FBRUNDLFlBQVEsRUFBRSxHQUZYO0FBR0NDLFlBQVEsRUFBRTtBQUhYLEdBTks7QUFEWSxDQUFuQjtBQWVlLDJFQUF1QztBQUFBLE1BQTlCQyxLQUE4Qix1RUFBdEJMLFlBQXNCO0FBQUEsTUFBUk0sTUFBUTs7QUFDckQsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0MsU0FBS0Msb0pBQUw7QUFBa0I7QUFDakIsaUNBQ0lILEtBREo7QUFFQ0osY0FBSSxFQUFFSSxLQUFLLENBQUNKLElBQU4sQ0FBV1EsR0FBWCxDQUFnQixVQUFDQyxZQUFELEVBQWtCO0FBQ3ZDLG1CQUFPQSxZQUFZLENBQUNSLE9BQWIsS0FBeUJJLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlVCxPQUF4QyxHQUFrREksTUFBTSxDQUFDSyxPQUF6RCxHQUFtRUQsWUFBMUU7QUFDQSxXQUZLO0FBRlA7QUFNQTtBQVJGO0FBVUEsQzs7Ozs7Ozs7Ozs7O0FDaENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUEsSUFBSUUsVUFBVSxHQUFHO0FBQ2hCQyxPQUFLLEVBQUVDLHdEQURTO0FBRWhCQyxVQUFRLEVBQUVDLDJEQUFjQTtBQUZSLENBQWpCO0FBS0EsSUFBTUMsV0FBVyxHQUFHQyw2REFBZSxDQUFDTixVQUFELENBQW5DO0FBQ2VLLDBFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1RBO0FBQWUsMkVBQTZCO0FBQUEsTUFBcEJaLEtBQW9CLHVFQUFaLEVBQVk7QUFBQSxNQUFSQyxNQUFRO0FBQzNDLFNBQU9ELEtBQVA7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNIRDtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0EsSUFBSWMsS0FBSyxHQUFHQyx5REFBVyxDQUFDSCx5REFBRCxDQUF2QjtBQUVlRSxvRUFBZixFOzs7Ozs7Ozs7Ozs7QUNQQSxjQUFjLG1CQUFPLENBQUMsdU1BQWlHOztBQUV2SCw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsbUdBQWdEOztBQUVyRTs7QUFFQSxHQUFHLElBQVU7QUFDYixtQkFBbUIsdU1BQWlHO0FBQ3BILG1CQUFtQixtQkFBTyxDQUFDLHVNQUFpRzs7QUFFNUgsb0RBQW9ELFFBQVM7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoiYXBwLjVmZDFjMGY0NjQyZTg1YTc5Y2ZjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucmVjdCB7XFxuICBjb2xvcjogIzAwZmZmZjsgfVxcblwiLCBcIlwiXSk7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuXHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdG9yZS5qc1wiO1xyXG5cclxuY2xhc3MgUmVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8aDEgY2xhc3NOYW1lPXtzdHlsZS5yZWN0fT5IZWxsbyBXb3JsZCE8L2gxPlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcblx0PFJlY3QgLz4sXHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXHJcbikiLCJpbXBvcnQge1xyXG5cdEFERF9UT19DQVJULFxyXG5cdFVQREFURV9UT19DQVJULFxyXG5cdERFTEVURV9UT19DQVJUXHJcbn0gZnJvbSBcIi4vc3JjL2FjdGlvbnMvY2FydC1hY3Rpb25zXCI7XHJcblxyXG52YXIgaW5pdGlhbFN0YXRlID0ge1xyXG5cdGNhcnQ6IFtcclxuXHRcdHtcclxuXHRcdFx0cHJvZHVjdDogXCJGbG91clwiLFxyXG5cdFx0XHRxdWFudGl0eTogXCIxXCIsXHJcblx0XHRcdHVuaXRDb3N0OiBcIjExMTExXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHByb2R1Y3Q6IFwiTWlsa1wiLFxyXG5cdFx0XHRxdWFudGl0eTogXCIyXCIsXHJcblx0XHRcdHVuaXRDb3N0OiBcIjIyMjIyXCJcclxuXHRcdH1cclxuXHRdXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEFERF9UT19DQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Y2FydDogc3RhdGUuY2FydC5tYXAoIChvbGRTdGF0ZUNhcnQpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBvbGRTdGF0ZUNhcnQucHJvZHVjdCA9PT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdCA/IGFjdGlvbi5wYXlsb2FkIDogb2xkU3RhdGVDYXJ0O1xyXG5cdFx0XHRcdH0gKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgY2FydFJlZHVjZXIgZnJvbSBcIi4vY2FydC1yZWR1Y2VyLmpzXCI7XHJcbmltcG9ydCBwcm9kdWN0UmVkdWNlciBmcm9tIFwiLi9wcm9kdWN0LXJlZHVjZXIuanNcIjtcclxuXHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxudmFyIGFsbFJlZHVjZXIgPSB7XHJcblx0Y2FydHM6IGNhcnRSZWR1Y2VyLFxyXG5cdHByb2R1Y3RzOiBwcm9kdWN0UmVkdWNlclxyXG59O1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoYWxsUmVkdWNlcik7XHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGUgPSBbXSwgYWN0aW9uKSB7XHJcblx0cmV0dXJuIHN0YXRlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIlxyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXIvaW5kZXguanNcIjtcclxuXHJcblxyXG52YXIgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuXHJcblxyXG5cclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
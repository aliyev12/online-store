webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _styles_NavStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/NavStyles */ "./components/styles/NavStyles.js");
/* harmony import */ var _Signout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Signout */ "./components/Signout.js");
/* harmony import */ var _CartCount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CartCount */ "./components/CartCount.js");
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Cart */ "./components/Cart.js");
/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useUser */ "./hooks/useUser.js");

var _jsxFileName = "/Users/abdulaliyev/tut/nextjs-graphql/online-store/frontend/components/Nav.js";








/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_Cart__WEBPACK_IMPORTED_MODULE_7__["TOGGLE_CART_MUTATION"]),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 1),
      toggleCart = _useMutation2[0];

  var _useUser = Object(_hooks_useUser__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      me = _useUser.data.me;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "data-test": "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Shop")), me && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/sell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Sell")), me && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/orders",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Orders")), me && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Account")), me && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Signout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), me && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: toggleCart,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "My Cart", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CartCount__WEBPACK_IMPORTED_MODULE_6__["default"], {
    count: me.cart.reduce(function (acc, cartItem) {
      return acc + cartItem.quantity;
    }, 0),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), !me && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Sign In")));
});

/***/ })

})
//# sourceMappingURL=_app.js.fe7b45fe3099da827ad7.hot-update.js.map
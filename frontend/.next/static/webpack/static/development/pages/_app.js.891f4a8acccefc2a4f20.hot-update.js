webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/RemoveFromCart.js":
/*!**************************************!*\
  !*** ./components/RemoveFromCart.js ***!
  \**************************************/
/*! exports provided: REMOVE_FROM_CART_MUTATION, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FROM_CART_MUTATION", function() { return REMOVE_FROM_CART_MUTATION; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/queries */ "./lib/queries.js");


var _jsxFileName = "/Users/abdulaliyev/tut/nextjs-graphql/online-store/frontend/components/RemoveFromCart.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {\n    removeFromCart(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var REMOVE_FROM_CART_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject());
var BigButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.withConfig({
  displayName: "RemoveFromCart__BigButton",
  componentId: "emvtd6-0"
})(["font-size:3rem;background:none;border:0;&:hover{color:", ";cursor:pointer;}"], function (props) {
  return props.theme.red;
});

var RemoveFromCart = function RemoveFromCart(_ref) {
  var id = _ref.id;

  // This gets called as soon as we get a response back from the server as soon as the mutation gets performed
  var update = function update(cache, payload) {
    // 1. First read the cache
    var data = cache.readQuery({
      query: _lib_queries__WEBPACK_IMPORTED_MODULE_7__["CURRENT_USER_QUERY"]
    }); // 2. Remove that item from the cart

    var cartItemId = payload.data.removeFromCart.id;
    data.me.cart = data.me.cart.filter(function (cartItem) {
      return cartItem.id !== cartItemId;
    }); // 3. Write it back to the cache

    cache.writeQuery({
      query: _lib_queries__WEBPACK_IMPORTED_MODULE_7__["CURRENT_USER_QUERY"],
      data: data
    });
  };

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(REMOVE_FROM_CART_MUTATION, {
    variables: {
      id: id
    },
    update: update
  }),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 2),
      removeFromCart = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BigButton, {
    title: "Delete Item",
    disabled: loading,
    onClick: function onClick() {
      removeFromCart()["catch"](function (err) {
        return alert(err.message);
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "\xD7", loading && '...');
};

RemoveFromCart.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RemoveFromCart);

/***/ })

})
//# sourceMappingURL=_app.js.891f4a8acccefc2a4f20.hot-update.js.map
webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/TakeMyMoney.js":
/*!***********************************!*\
  !*** ./components/TakeMyMoney.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-stripe-checkout */ "./node_modules/react-stripe-checkout/dist/main.js");
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/calcTotalPrice */ "./lib/calcTotalPrice.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/queries */ "./lib/queries.js");
/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../hooks/useUser */ "./hooks/useUser.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/helpers */ "./lib/helpers.js");




var _jsxFileName = "/Users/abdulaliyev/web-projects/wes-bos/online-store/frontend/components/TakeMyMoney.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  mutation createOrder($token: String!) {\n    createOrder(token: $token) {\n      id\n      charge\n      total\n      items {\n        id\n        title\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var CREATE_ORDER_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_9__["gql"])(_templateObject());

var TakeMyMoney = function TakeMyMoney(_ref) {
  var children = _ref.children;

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(CREATE_ORDER_MUTATION, {
    refetchQueries: [{
      query: _lib_queries__WEBPACK_IMPORTED_MODULE_12__["CURRENT_USER_QUERY"]
    }]
  }),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation, 1),
      createOrder = _useMutation2[0];

  var _useUser = Object(_hooks_useUser__WEBPACK_IMPORTED_MODULE_13__["default"])(),
      me = _useUser.data.me;

  var totalItems = function totalItems(cart) {
    return cart.reduce(function (acc, cartItem) {
      return acc + cartItem.quantity;
    }, 0);
  };

  var onToken =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res, create) {
      var order;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              nprogress__WEBPACK_IMPORTED_MODULE_8___default.a.start(); // Manually call the mutation once we have the stripe token

              _context.next = 3;
              return create({
                variables: {
                  token: res.id
                }
              })["catch"](function (err) {
                alert(err.message);
              });

            case 3:
              order = _context.sent;
              next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push({
                pathname: "/order",
                query: {
                  id: order.data.createOrder.id
                }
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onToken(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_5___default.a, {
    amount: Object(_lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_10__["default"])(me.cart),
    name: "Tent Store",
    description: "Order of ".concat(totalItems(me.cart), " item").concat(totalItems(me.cart) === 1 ? "" : "s"),
    image: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_14__["idx"])(["cart", "0", "item", "image"], me) // image={me.cart && me.cart.length && me.cart[0].item && me.cart[0].item.image ? me.cart[0].item.image : ''}
    ,
    stripeKey: "pk_test_hhz29HQbQz30mWS5QF59kLKN00Nv74hEX0",
    currency: "USD",
    email: me.email,
    token: function token(res) {
      return onToken(res, createOrder);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (TakeMyMoney);

/***/ })

})
//# sourceMappingURL=_app.js.17c479610b511474df65.hot-update.js.map
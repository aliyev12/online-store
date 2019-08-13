webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STATE_QUERY", function() { return LOCAL_STATE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_CART_MUTATION", function() { return TOGGLE_CART_MUTATION; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _lib_handleError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/handleError */ "./lib/handleError.js");
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/useUser */ "./hooks/useUser.js");
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CartItem */ "./components/CartItem.js");
/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/calcTotalPrice */ "./lib/calcTotalPrice.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");


var _jsxFileName = "/Users/abdulaliyev/tut/nextjs-graphql/online-store/frontend/components/Cart.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  mutation {\n    toggleCart @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query {\n    cartOpen @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}















var LOCAL_STATE_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject());
var TOGGLE_CART_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject2());

var Cart = function Cart() {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(LOCAL_STATE_QUERY),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(TOGGLE_CART_MUTATION),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 1),
      toggleCart = _useMutation2[0];

  var _useUser = Object(_hooks_useUser__WEBPACK_IMPORTED_MODULE_12__["default"])(),
      me = _useUser.data.me;

  if (!me) {
    return null;
  } else {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_7__["default"], {
      open: data.cartOpen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, loading && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Loading..."), error && Object(_lib_handleError__WEBPACK_IMPORTED_MODULE_6__["default"])(error), !loading && !error && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onClick: toggleCart,
      title: "close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_Supreme__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, me.cart.map(function (cartItem) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_CartItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
        key: cartItem.id,
        cartItem: cartItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      });
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("footer", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }))));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Cart); // import React from 'react';
// import { Query, Mutation } from 'react-apollo';
// import gql from 'graphql-tag';
// import CartStyles from './styles/CartStyles';
// import Supreme from './styles/Supreme';
// import CloseButton from './styles/CloseButton';
// import SickButton from './styles/SickButton';
// import User from './User';
// export const LOCAL_STATE_QUERY = gql`
//   query {
//     cartOpen @client
//   }
// `;
// export const TOGGLE_CART_MUTATION = gql`
//   mutation {
//     toggleCart @client
//   }
// `;
// const Cart = () => {
//   return (
//     <Mutation mutation={TOGGLE_CART_MUTATION}>
//       {toggleCart => (
//         <Query query={LOCAL_STATE_QUERY}>
//           {({ data }) =>
//             console.log('data = ', data) || (
//               <CartStyles open={data.cartOpen}>
//                 <header>
//                   <CloseButton onClick={toggleCart} title="close">&times;</CloseButton>
//                   <Supreme>
//                     {/* Your Cart */}
//                     11111
//                     </Supreme>
//                   <p>
//                     22222
//                     {/* You have __ items in your cart. */}
//                     </p>
//                   <footer>
//                     <p>
//                       $
//                       {/* $10.10 */}
//                       </p>
//                     <SickButton />
//                   </footer>
//                 </header>
//               </CartStyles>
//             )
//           }
//         </Query>
//       )}
//     </Mutation>
//   );
// };
// export default Cart;

/***/ })

})
//# sourceMappingURL=_app.js.7063af4c956d2819c881.hot-update.js.map
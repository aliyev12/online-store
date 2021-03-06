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

var _jsxFileName = "/Users/abdulaliyev/web-projects/wes-bos/online-store/frontend/components/Nav.js";








/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_Cart__WEBPACK_IMPORTED_MODULE_7__["TOGGLE_CART_MUTATION"]),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 1),
      toggleCart = _useMutation2[0];

  var _useUser = Object(_hooks_useUser__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      data = _useUser.data;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "data-test": "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Shop")), data && data.me && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/sell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Sell")), data && data.me && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/orders",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Orders")), data && data.me && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Account")), data && data.me && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Signout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), data && data.me && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: toggleCart,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "My Cart", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CartCount__WEBPACK_IMPORTED_MODULE_6__["default"], {
    count: data.me.cart.reduce(function (acc, cartItem) {
      return acc + cartItem.quantity;
    }, 0),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), data && !data.me && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Sign In")));
}); // import Link from "next/link";
// import { useMutation } from "@apollo/react-hooks";
// import NavStyles from "./styles/NavStyles";
// import Signout from "./Signout";
// import CartCount from "./CartCount";
// import { TOGGLE_CART_MUTATION } from "./Cart";
// import useUser from "../hooks/useUser";
// import { displayDummyNav } from "../config";
// import styled from "styled-components";
// const DummyContentDisclaimer = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   font-size: 7px !important;
//   font-weight: 300;
//   background-color: #00000075;
//   color: #ffffffd6;
//   padding: 5px 19px;
//   border-bottom-left-radius: 30px;
//   border: 0;
//   z-index: 99;
//   margin-left: 20px;
// `;
// export default () => {
//   const [toggleCart] = useMutation(TOGGLE_CART_MUTATION);
//   const { data } = useUser();
//   return (
//     <NavStyles data-test="nav">
//       <Link href="/items">
//         <a>Shop</a>
//       </Link>
//       {displayDummyNav || (data && data.me) ? (
//         <Link href="/sell">
//           <a>Sell</a>
//         </Link>
//       ) : null}
//       {displayDummyNav || (data && data.me) ? (
//         <Link href="/orders">
//           <a>Orders</a>
//         </Link>
//       ) : null}
//       {displayDummyNav || (data && data.me) ? (
//         <Link href="/me">
//           <a>Account</a>
//         </Link>
//       ) : null}
//       {!displayDummyNav || (data && data.me) ? (
//         <Link href="/signout">
//           <Signout />
//         </Link>
//       ) : null}
//       {displayDummyNav || (data && data.me) ? (
//         <button onClick={toggleCart}>
//           My Cart
//           <CartCount
//             count={
//               displayDummyNav
//                 ? 3
//                 : data.me.cart.reduce(
//                     (acc, cartItem) => acc + cartItem.quantity,
//                     0
//                   )
//             }
//           />
//         </button>
//       ) : null}
//       {displayDummyNav && (
//         <DummyContentDisclaimer>
//           You are viewing dummy content. To sign up and experiment with the app,
//           please reach out to site developer - aaliyev.com{" "}
//           <span role="image">😊</span>
//         </DummyContentDisclaimer>
//       )}
//       {data && !data.me && (
//         <Link href="/signup">
//           <a>Sign In</a>
//         </Link>
//       )}
//     </NavStyles>
//   );
// };

/***/ })

})
//# sourceMappingURL=_app.js.ae397a6dd9090e8e5c1d.hot-update.js.map
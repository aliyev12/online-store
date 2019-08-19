webpackHotUpdate("static/development/pages/items.js",{

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/*! exports provided: PAGINATION_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATION_QUERY", function() { return PAGINATION_QUERY; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/PaginationStyles */ "./components/styles/PaginationStyles.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");

var _jsxFileName = "/Users/abdulaliyev/tut/nextjs-graphql/online-store/frontend/components/Pagination.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query PAGINATION_QUERY {\n    itemsConnection {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var PAGINATION_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject());

var Pagination = function Pagination(_ref) {
  var page = _ref.page;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(PAGINATION_QUERY),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Loading...");
  if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
    error: error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  });
  var count = data.itemsConnection.aggregate.count;
  var pages = Math.ceil(count / _config__WEBPACK_IMPORTED_MODULE_7__["perPage"]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "data-test": "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Great Fits! Page ", page, " of ", pages)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    prefetch: true,
    href: {
      pathname: 'items',
      query: {
        page: page - 1
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "prev",
    "aria-disabled": page <= 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "\u2190 Prev")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Page ", page, " of", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "totalPages",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, pages)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, count, " Items Total"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    prefetch: true,
    href: {
      pathname: 'items',
      query: {
        page: page + 1
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "next",
    "aria-disabled": page >= pages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Next \u2192")));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination); // import React from 'react';
// import gql from 'graphql-tag';
// import Head from 'next/head';
// import Link from 'next/link';
// import { Query } from 'react-apollo';
// import PaginationStyles from './styles/PaginationStyles';
// import { perPage } from '../config';
// export const PAGINATION_QUERY = gql`
//   query PAGINATION_QUERY {
//     itemsConnection {
//       aggregate {
//         count
//       }
//     }
//   }
// `;
// const Pagination = ({ page }) => {
//   return (
//     <Query query={PAGINATION_QUERY}>
//       {({ data, loading, error }) => {
//         if (loading) return <p>Loading...</p>;
//         const count = data.itemsConnection.aggregate.count;
//         const pages = Math.ceil(count / perPage);
//         return (
//           <PaginationStyles>
//             <Head>
//               <title>
//                 Great Fits! Page {page} of {pages}
//               </title>
//             </Head>
//             <Link
//               prefetch
//               href={{
//                 pathname: 'items',
//                 query: { page: page - 1 }
//               }}
//             >
//               <a className="prev" aria-disabled={page <= 1}>← Prev</a>
//             </Link>
//             <p>
//               Page {page} of {pages}
//             </p>
//             <p>{count} Items Total</p>
//             <Link
//               prefetch
//               href={{
//                 pathname: 'items',
//                 query: { page: page + 1 }
//               }}
//             >
//               <a className="next" aria-disabled={page >= pages}>Next →</a>
//             </Link>
//           </PaginationStyles>
//         );
//       }}
//     </Query>
//   );
// };
// export default Pagination;

/***/ })

})
//# sourceMappingURL=items.js.aa0e86e115d40c7e953f.hot-update.js.map
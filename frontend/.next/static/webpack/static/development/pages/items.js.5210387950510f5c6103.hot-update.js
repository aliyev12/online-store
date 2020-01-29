webpackHotUpdate("static/development/pages/items.js",{

/***/ "./components/Items.js":
/*!*****************************!*\
  !*** ./components/Items.js ***!
  \*****************************/
/*! exports provided: ALL_ITEMS_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_ITEMS_QUERY", function() { return ALL_ITEMS_QUERY; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _lib_handleError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/handleError */ "./lib/handleError.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Item */ "./components/Item.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pagination */ "./components/Pagination.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./config.tsx");

var _jsxFileName = "/Users/abdulaliyev/web-projects/wes-bos/online-store/frontend/components/Items.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ", ") {\n    items(first: $first, skip: $skip, orderBy: createAt_DESC) {\n      id\n      title\n      price\n      description\n      image\n      largeImage\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var ALL_ITEMS_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject(), _config__WEBPACK_IMPORTED_MODULE_8__["perPage"]);
var Center = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Items__Center",
  componentId: "m9ubh0-0"
})(["text-align:center;"]);
var ItemsList = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Items__ItemsList",
  componentId: "m9ubh0-1"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;max-width:", ";margin:0 auto;"], function (props) {
  return props.theme.maxWidth;
});

var Items = function Items(_ref) {
  var page = _ref.page;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(ALL_ITEMS_QUERY, {
    variables: {
      skip: page * _config__WEBPACK_IMPORTED_MODULE_8__["perPage"] - _config__WEBPACK_IMPORTED_MODULE_8__["perPage"],
      first: _config__WEBPACK_IMPORTED_MODULE_8__["perPage"]
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Center, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    page: page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Loading..."), error && Object(_lib_handleError__WEBPACK_IMPORTED_MODULE_4__["default"])(error), !loading && !error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemsList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, data.items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: item.id,
      item: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    page: page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Items); // import React from 'react';
// import { Query } from 'react-apollo';
// import gql from 'graphql-tag';
// import handleError from '../lib/handleError';
// import styled from 'styled-components';
// import Item from './Item';
// import Pagination from './Pagination';
// import {perPage} from '../config';
// export const ALL_ITEMS_QUERY = gql`
//   query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
//     items(first: $first, skip: $skip, orderBy: createAt_DESC) {
//       id
//       title
//       price
//       description
//       image
//       largeImage
//     }
//   }
// `;
// const Center = styled.div`
//   text-align: center;
// `;
// const ItemsList = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-gap: 60px;
//   max-width: ${props => props.theme.maxWidth};
//   margin: 0 auto;
// `;
// const Items = ({ page }) => {
//   return (
//     <Center>
//       <p>Items!</p>
//       <Pagination page={page} />
//       <Query
//         query={ALL_ITEMS_QUERY}
//         variables={{
//           skip: page * perPage - perPage,
//           first: perPage
//         }}
//       >
//         {({ data, error, loading }) => {
//           if (loading) return <p>Loading...</p>;
//           if (error) return <p>{handleError(error)}</p>;
//           return (
//             <ItemsList>
//               {data.items.map(item => (
//                 <Item key={item.id} item={item} />
//               ))}
//             </ItemsList>
//           );
//         }}
//       </Query>
//       <Pagination page={page} />
//     </Center>
//   );
// };
// export default Items;

/***/ })

})
//# sourceMappingURL=items.js.5210387950510f5c6103.hot-update.js.map
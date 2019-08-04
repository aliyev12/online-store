webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_handleError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/handleError */ "./lib/handleError.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Item */ "./components/Item.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pagination */ "./components/Pagination.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./config.js");

var _jsxFileName = "/Users/abdulaliyev/tut/nextjs-graphql/online-store/frontend/components/Items.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ", ") {\n    items(first: $first, skip: $skip, orderBy: createAt_DESC) {\n      id\n      title\n      price\n      description\n      image\n      largeImage\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








 //, orderBy: createdAt_DESC

var ALL_ITEMS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject(), _config__WEBPACK_IMPORTED_MODULE_8__["perPage"]);
var Center = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Items__Center",
  componentId: "tikday-0"
})(["text-align:center;"]);
var ItemsList = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Items__ItemsList",
  componentId: "tikday-1"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;max-width:", ";margin:0 auto;"], function (props) {
  return props.theme.maxWidth;
});

var Items = function Items(_ref) {
  var page = _ref.page;
  console.log('page = ', page);
  console.log('perPage = ', _config__WEBPACK_IMPORTED_MODULE_8__["perPage"]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Center, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Items!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    page: page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: ALL_ITEMS_QUERY,
    variables: {
      skip: page * _config__WEBPACK_IMPORTED_MODULE_8__["perPage"] - _config__WEBPACK_IMPORTED_MODULE_8__["perPage"],
      first: _config__WEBPACK_IMPORTED_MODULE_8__["perPage"]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, function (_ref2) {
    var data = _ref2.data,
        error = _ref2.error,
        loading = _ref2.loading;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Loading...");
    if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, Object(_lib_handleError__WEBPACK_IMPORTED_MODULE_4__["default"])(error));
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemsList, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, data.items.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: item.id,
        item: item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      });
    }));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    page: page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Items);

/***/ })

})
//# sourceMappingURL=index.js.21e1dcc52a95741f4cdf.hot-update.js.map
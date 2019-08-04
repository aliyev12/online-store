webpackHotUpdate("static/development/pages/items.js",{

/***/ "./components/DeleteItem.js":
/*!**********************************!*\
  !*** ./components/DeleteItem.js ***!
  \**********************************/
/*! exports provided: DELETE_ITEM_MUTATION, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ITEM_MUTATION", function() { return DELETE_ITEM_MUTATION; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Items */ "./components/Items.js");

var _jsxFileName = "/Users/abdulaliyev/tut/nextjs-graphql/online-store/frontend/components/DeleteItem.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation DELETE_ITEM_MUTATION($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var DELETE_ITEM_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

var DeleteItem = function DeleteItem(_ref) {
  var children = _ref.children,
      id = _ref.id;

  var update = function update(cache, payload) {
    // Manually update the cache on the client so it matches the server
    // 1. Read the cache for items we want
    var data = cache.readQuery({
      query: _Items__WEBPACK_IMPORTED_MODULE_4__["ALL_ITEMS_QUERY"]
    }); // 2. Filter the deleted item out of the page

    data.items = data.items.filter(function (item) {
      return item.id !== payload.data.deleteItem.id;
    }); // 3. Put the items back

    cache.writeQuery({
      query: _Items__WEBPACK_IMPORTED_MODULE_4__["ALL_ITEMS_QUERY"],
      data: data
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
    mutation: DELETE_ITEM_MUTATION,
    variables: {
      id: id
    },
    update: update,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, function (deleteItem, _ref2) {
    var error = _ref2.error;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: function onClick() {
        if (confirm('Are you sure you wanted to delete this?')) {
          deleteItem();
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, children);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DeleteItem);

/***/ })

})
//# sourceMappingURL=items.js.68a2800640c78026efff.hot-update.js.map
webpackHotUpdate("static/development/pages/update.js",{

/***/ "./components/UpdateItem.js":
/*!**********************************!*\
  !*** ./components/UpdateItem.js ***!
  \**********************************/
/*! exports provided: SINGLE_ITEM_QUERY, UPDATE_ITEM_MUTATION, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_ITEM_QUERY", function() { return SINGLE_ITEM_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ITEM_MUTATION", function() { return UPDATE_ITEM_MUTATION; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");


var _jsxFileName = "/Users/abdulaliyev/tut/nextjs-graphql/online-store/frontend/components/UpdateItem.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  mutation UPDATE_ITEM_MUTATION(\n    $title: String!\n    $description: String!\n    $price: Int!\n  ) {\n    createItem(\n      title: $title\n      description: $description\n      price: $price\n      image: $image\n      largeImage: $largeImage\n    ) {\n      id\n      title\n      description\n      price\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query SINGLE_ITEM_QUERY($id: ID!) {\n    item(where: { id: $id }) {\n      id\n      title\n      description\n      price\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var SINGLE_ITEM_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
var UPDATE_ITEM_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject2());

var UpdateItem = function UpdateItem(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      description = _useState4[0],
      setDescription = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      image = _useState6[0],
      setImage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      largeImage = _useState8[0],
      setLargeImage = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      price = _useState10[0],
      setPrice = _useState10[1];

  var updateItem = function updateItem(e, updateItemMutation) {
    console.log('updating item..');
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
    query: SINGLE_ITEM_QUERY,
    variables: {
      id: props.id
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading;
    if (loading) react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Loading...");
    if (!data.item) return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "No item for ID ", props.id);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Mutation"], {
      mutation: UPDATE_ITEM_MUTATION,
      variables: {
        title: title,
        description: description,
        image: image,
        largeImage: largeImage,
        price: price
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, function (updateItem, _ref2) {
      var loading = _ref2.loading,
          error = _ref2.error;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onSubmit: function onSubmit(e) {
          return updateItem(e, updateItem);
        },
        method: "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
        error: error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", {
        disabled: loading,
        "aria-busy": loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        htmlFor: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Title", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        id: "title",
        name: "title",
        placeholder: "Title",
        required: true,
        defaultValue: data.item.title,
        onChange: function onChange(e) {
          return setTitle(e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        htmlFor: "price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Price", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "number",
        id: "price",
        name: "price",
        placeholder: "Price",
        required: true,
        defaultValue: data.item.price,
        onChange: function onChange(e) {
          return setPrice(e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        htmlFor: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Description", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", {
        id: "description",
        name: "description",
        placeholder: "Enter a Description",
        required: true,
        defaultValue: data.item.description,
        onChange: function onChange(e) {
          return setDescription(e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Submit")));
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (UpdateItem);

/***/ })

})
//# sourceMappingURL=update.js.4006d0db6a8f780f9dda.hot-update.js.map
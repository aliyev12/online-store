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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");




var _jsxFileName = "/Users/abdulaliyev/tut/nextjs-graphql/online-store/frontend/components/UpdateItem.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  mutation UPDATE_ITEM_MUTATION(\n    $id: ID!\n    $title: String\n    $description: String\n    $price: Int\n  ) {\n    updateItem(\n      id: $id\n      title: $title\n      description: $description\n      price: $price\n    ) {\n      id\n      title\n      description\n      price\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  query SINGLE_ITEM_QUERY($id: ID!) {\n    item(where: { id: $id }) {\n      id\n      title\n      description\n      price\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var SINGLE_ITEM_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());
var UPDATE_ITEM_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject2());

var UpdateItem = function UpdateItem(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      description = _useState4[0],
      setDescription = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      price = _useState6[0],
      setPrice = _useState6[1];

  var handleUpdateItem =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, updateItemMutation) {
      var variables, res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              console.log('updating item..');
              variables = {
                id: props.id
              };
              title ? variables.title = title : null;
              description ? variables.description = description : null;
              price ? variables.price = price : null;
              console.log('variables = ', variables);
              _context.next = 9;
              return updateItemMutation({
                variables: variables
              });

            case 9:
              res = _context.sent;

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleUpdateItem(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Query"], {
    query: SINGLE_ITEM_QUERY,
    variables: {
      id: props.id
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, function (_ref2) {
    var data = _ref2.data,
        loading = _ref2.loading;
    if (loading) react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Loading...");
    if (!data.item) return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "No item for ID ", props.id);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Mutation"], {
      mutation: UPDATE_ITEM_MUTATION,
      variables: {
        title: title,
        description: description,
        price: price
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, function (updateItem, _ref3) {
      var loading = _ref3.loading,
          error = _ref3.error;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onSubmit: function onSubmit(e) {
          return handleUpdateItem(e, updateItem);
        },
        method: "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_10__["default"], {
        error: error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("fieldset", {
        disabled: loading,
        "aria-busy": loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
        htmlFor: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Title", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
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
          lineNumber: 79
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
        htmlFor: "price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Price", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
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
          lineNumber: 91
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
        htmlFor: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Description", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("textarea", {
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
          lineNumber: 103
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Submit")));
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (UpdateItem);

/***/ })

})
//# sourceMappingURL=update.js.974685c26a009db7143c.hot-update.js.map
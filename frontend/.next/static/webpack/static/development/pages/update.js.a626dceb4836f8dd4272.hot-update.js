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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  mutation UPDATE_ITEM_MUTATION(\n    $title: String!\n    $description: String!\n    $price: Int!\n    $image: String\n    $largeImage: String\n  ) {\n    createItem(\n      title: $title\n      description: $description\n      price: $price\n      image: $image\n      largeImage: $largeImage\n    ) {\n      id\n      title\n    }\n  }\n"]);

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

var UpdateItem = function UpdateItem() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('Item Title'),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('Item Description'),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      description = _useState4[0],
      setDescription = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('./temp.img'),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      image = _useState6[0],
      setImage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('./temp.img'),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      largeImage = _useState8[0],
      setLargeImage = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(9998),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
      price = _useState10[0],
      setPrice = _useState10[1];

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Query"], {
    query: SINGLE_ITEM_QUERY,
    variables: {
      id: props.id
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading;
    if (loading) react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Loading...");
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Mutation"], {
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
        lineNumber: 53
      },
      __self: this
    }, function (createItem, _ref2) {
      var loading = _ref2.loading,
          error = _ref2.error;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onSubmit:
        /*#__PURE__*/
        function () {
          var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
            var res;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Stop the form from submitting
                    e.preventDefault(); // Call the mutation

                    _context.next = 3;
                    return createItem();

                  case 3:
                    res = _context.sent;
                    // Change them to the single item page
                    console.log('res = ', res);
                    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push({
                      pathname: '/item',
                      query: {
                        id: res.data.createItem.id
                      }
                    });

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref3.apply(this, arguments);
          };
        }(),
        method: "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_10__["default"], {
        error: error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("fieldset", {
        disabled: loading,
        "aria-busy": loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
        htmlFor: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
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
          lineNumber: 83
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
        htmlFor: "price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Price", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
        type: "number",
        id: "price",
        name: "price",
        placeholder: "Price",
        required: true,
        value: price,
        onChange: function onChange(e) {
          return setPrice(e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
        htmlFor: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Description", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("textarea", {
        id: "description",
        name: "description",
        placeholder: "Enter a Description",
        required: true,
        value: description,
        onChange: function onChange(e) {
          return setDescription(e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Submit")));
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (UpdateItem);

/***/ })

})
//# sourceMappingURL=update.js.a626dceb4836f8dd4272.hot-update.js.map
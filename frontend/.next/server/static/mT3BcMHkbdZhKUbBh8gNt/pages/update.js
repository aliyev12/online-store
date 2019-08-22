module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("oQRt");


/***/ }),

/***/ "2y/O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (amount) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }; // if its a whole, dollar amount, leave off the .00

  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  const formatter = new Intl.NumberFormat('en-US', options);
  return formatter.format(amount / 100);
});

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "VUBQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-11u5fgj-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

const DisplayError = ({
  error
}) => {
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      "data-test": "graphql-error"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Shoot!"), error.message.replace('GraphQL error: ', ''))));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
/* harmony default export */ __webpack_exports__["a"] = (DisplayError);

/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "mzXK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "sc-1xszr8q-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:", ";}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient(to right,#ff3019 0%,#e2b04a 50%,#ff3019 100%);}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], props => props.theme.red, loading);
/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ "oQRt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/styles/Form.js
var Form = __webpack_require__("mzXK");

// EXTERNAL MODULE: ./lib/formatMoney.js
var formatMoney = __webpack_require__("2y/O");

// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__("VUBQ");

// CONCATENATED MODULE: ./components/UpdateItem.js







const SINGLE_ITEM_QUERY = external_apollo_boost_["gql"]`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      price
    }
  }
`;
const UPDATE_ITEM_MUTATION = external_apollo_boost_["gql"]`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $price: Int
  ) {
    updateItem(
      id: $id
      title: $title
      description: $description
      price: $price
    ) {
      id
      title
      description
      price
    }
  }
`;

const UpdateItem = props => {
  const [title, setTitle] = Object(external_react_["useState"])('');
  const [description, setDescription] = Object(external_react_["useState"])('');
  const [price, setPrice] = Object(external_react_["useState"])(0);

  const handleUpdateItem = async (e, updateItemMutation) => {
    e.preventDefault();
    const variables = {
      id: props.id
    };
    title ? variables.title = title : null;
    description ? variables.description = description : null;
    price ? variables.price = price : null;
    const res = await updateItemMutation({
      variables
    });
  };

  const {
    data,
    loading: queryLoading
  } = Object(react_hooks_["useQuery"])(SINGLE_ITEM_QUERY, {
    variables: {
      id: props.id
    }
  });
  const [updateItem, {
    loading: mutationLoading,
    error
  }] = Object(react_hooks_["useMutation"])(UPDATE_ITEM_MUTATION, {
    variables: {
      title,
      description,
      price
    }
  });
  if (!data.item) return external_react_default.a.createElement("p", null, "No item for ID ", props.id);
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, queryLoading && external_react_default.a.createElement("p", null, "Loading..."), external_react_default.a.createElement(Form["a" /* default */], {
    onSubmit: e => handleUpdateItem(e, updateItem),
    method: "post"
  }, external_react_default.a.createElement(ErrorMessage["a" /* default */], {
    error: error
  }), external_react_default.a.createElement("fieldset", {
    disabled: mutationLoading,
    "aria-busy": mutationLoading
  }, external_react_default.a.createElement("label", {
    htmlFor: "title"
  }, "Title", external_react_default.a.createElement("input", {
    type: "text",
    id: "title",
    name: "title",
    placeholder: "Title",
    required: true,
    defaultValue: data.item.title,
    onChange: e => setTitle(e.target.value)
  })), external_react_default.a.createElement("label", {
    htmlFor: "price"
  }, "Price", external_react_default.a.createElement("input", {
    type: "number",
    id: "price",
    name: "price",
    placeholder: "Price",
    required: true,
    defaultValue: data.item.price,
    onChange: e => setPrice(e.target.value)
  })), external_react_default.a.createElement("label", {
    htmlFor: "title"
  }, "Description", external_react_default.a.createElement("textarea", {
    id: "description",
    name: "description",
    placeholder: "Enter a Description",
    required: true,
    defaultValue: data.item.description,
    onChange: e => setDescription(e.target.value)
  })), external_react_default.a.createElement("button", {
    type: "submit"
  }, "Sav", mutationLoading ? 'ing' : 'e', " Changes"))));
};

/* harmony default export */ var components_UpdateItem = (UpdateItem); // import React, { useState } from 'react';
// import { Mutation, Query } from 'react-apollo';
// import gql from 'graphql-tag';
// import Router from 'next/router';
// import Form from './styles/Form';
// import formatMoney from '../lib/formatMoney';
// import Error from './ErrorMessage';
// export const SINGLE_ITEM_QUERY = gql`
//   query SINGLE_ITEM_QUERY($id: ID!) {
//     item(where: { id: $id }) {
//       id
//       title
//       description
//       price
//     }
//   }
// `;
// export const UPDATE_ITEM_MUTATION = gql`
//   mutation UPDATE_ITEM_MUTATION(
//     $id: ID!
//     $title: String
//     $description: String
//     $price: Int
//   ) {
//     updateItem(
//       id: $id
//       title: $title
//       description: $description
//       price: $price
//     ) {
//       id
//       title
//       description
//       price
//     }
//   }
// `;
// const UpdateItem = props => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState(0);
//   const handleUpdateItem = async (e, updateItemMutation) => {
//     e.preventDefault();
//     console.log('updating item..');
//     const variables = {
//       id: props.id,
//     };
//     title ? variables.title = title : null;
//     description ? variables.description = description : null;
//     price ? variables.price = price : null;
//     console.log('variables = ', variables);
//     const res = await updateItemMutation({ variables });
//   }
//   return (
//     <Query query={SINGLE_ITEM_QUERY} variables={{ id: props.id }}>
//       {({ data, loading }) => {
//         if (loading) <p>Loading...</p>;
//         if (!data.item) return <p>No item for ID {props.id}</p>
//         return (
//           <Mutation
//             mutation={UPDATE_ITEM_MUTATION}
//             variables={{
//               title,
//               description,
//               price
//             }}
//           >
//             {(updateItem, { loading, error }) => (
//               <Form onSubmit={e => handleUpdateItem(e, updateItem)} method="post">
//                 <Error error={error} />
//                 <fieldset disabled={loading} aria-busy={loading}>
//                   <label htmlFor="title">
//                     Title
//                     <input
//                       type="text"
//                       id="title"
//                       name="title"
//                       placeholder="Title"
//                       required
//                       defaultValue={data.item.title}
//                       onChange={e => setTitle(e.target.value)}
//                     />
//                   </label>
//                   <label htmlFor="price">
//                     Price
//                     <input
//                       type="number"
//                       id="price"
//                       name="price"
//                       placeholder="Price"
//                       required
//                       defaultValue={data.item.price}
//                       onChange={e => setPrice(e.target.value)}
//                     />
//                   </label>
//                   <label htmlFor="title">
//                     Description
//                     <textarea
//                       id="description"
//                       name="description"
//                       placeholder="Enter a Description"
//                       required
//                       defaultValue={data.item.description}
//                       onChange={e => setDescription(e.target.value)}
//                     />
//                   </label>
//                   <button type="submit">Sav{loading ? 'ing' : 'e'} Changes</button>
//                 </fieldset>
//               </Form>
//             )}
//           </Mutation>
//         );
//       }}
//     </Query>
//   );
// };
// export default UpdateItem;
// CONCATENATED MODULE: ./pages/update.js


/* harmony default export */ var update = __webpack_exports__["default"] = (({
  query
}) => external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(components_UpdateItem, {
  id: query.id
})));

/***/ })

/******/ });
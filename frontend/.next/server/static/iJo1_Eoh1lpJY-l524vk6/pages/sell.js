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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "4UCa":
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
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./components/styles/Form.js
var Form = __webpack_require__("mzXK");

// EXTERNAL MODULE: ./lib/formatMoney.js
var formatMoney = __webpack_require__("2y/O");

// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__("VUBQ");

// EXTERNAL MODULE: ./components/User.js
var User = __webpack_require__("VliS");

// CONCATENATED MODULE: ./components/CreateItem.js








const CREATE_ITEM_MUTATION = external_apollo_boost_["gql"]`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
      title
    }
  }
`;

const CreateItem = () => {
  const [title, setTitle] = Object(external_react_["useState"])('Item Title');
  const [description, setDescription] = Object(external_react_["useState"])('Item Description');
  const [image, setImage] = Object(external_react_["useState"])('');
  const [largeImage, setLargeImage] = Object(external_react_["useState"])('');
  const [price, setPrice] = Object(external_react_["useState"])(9998);
  const [createItem, {
    loading,
    error
  }] = Object(react_hooks_["useMutation"])(CREATE_ITEM_MUTATION);

  const uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'greatfits'); // https://res.cloudinary.com/greatfits/image/upload/v1564874789/sample.jpg

    const res = await fetch(`https://api.cloudinary.com/v1_1/greatfits/image/upload`, {
      method: 'POST',
      body: data
    });
    const file = await res.json();
    setImage(file.secure_url);
    setLargeImage(file.eager[0].secure_url);
  };

  return external_react_default.a.createElement(Form["a" /* default */], {
    "data-test": "form",
    onSubmit: async e => {
      // Stop the form from submitting
      e.preventDefault(); // Call the mutation

      const res = await createItem({
        variables: {
          title,
          description,
          image,
          largeImage,
          price
        }
      }); // Change them to the single item page

      router_default.a.push({
        pathname: '/item',
        query: {
          id: res.data.createItem.id
        }
      });
    },
    method: "post"
  }, external_react_default.a.createElement(ErrorMessage["a" /* default */], {
    error: error
  }), external_react_default.a.createElement("fieldset", {
    disabled: loading,
    "aria-busy": loading
  }, external_react_default.a.createElement("label", {
    htmlFor: "file"
  }, "Image", external_react_default.a.createElement("input", {
    type: "file",
    id: "file",
    name: "file",
    placeholder: "Upload an image",
    required: true,
    onChange: uploadFile
  }), image && external_react_default.a.createElement("img", {
    src: image,
    alt: "Upload Preview",
    width: "200"
  })), external_react_default.a.createElement("label", {
    htmlFor: "title"
  }, "Title", external_react_default.a.createElement("input", {
    type: "text",
    id: "title",
    name: "title",
    placeholder: "Title",
    required: true,
    value: title,
    onChange: e => setTitle(e.target.value)
  })), external_react_default.a.createElement("label", {
    htmlFor: "price"
  }, "Price", external_react_default.a.createElement("input", {
    type: "number",
    id: "price",
    name: "price",
    placeholder: "Price",
    required: true,
    value: price,
    onChange: e => setPrice(e.target.value)
  })), external_react_default.a.createElement("label", {
    htmlFor: "title"
  }, "Description", external_react_default.a.createElement("textarea", {
    id: "description",
    name: "description",
    placeholder: "Enter a Description",
    required: true,
    value: description,
    onChange: e => setDescription(e.target.value)
  })), external_react_default.a.createElement("button", {
    type: "submit"
  }, "Submit")));
};

/* harmony default export */ var components_CreateItem = (CreateItem); // import React, { useState } from 'react';
// import { Mutation } from 'react-apollo';
// import gql from 'graphql-tag';
// import Router from 'next/router';
// import Form from './styles/Form';
// import formatMoney from '../lib/formatMoney';
// import Error from './ErrorMessage';
// import User from './User';
// export const CREATE_ITEM_MUTATION = gql`
//   mutation CREATE_ITEM_MUTATION(
//     $title: String!
//     $description: String!
//     $price: Int!
//     $image: String
//     $largeImage: String
//   ) {
//     createItem(
//       title: $title
//       description: $description
//       price: $price
//       image: $image
//       largeImage: $largeImage
//     ) {
//       id
//       title
//     }
//   }
// `;
// const CreateItem = (props) => {
//   const [title, setTitle] = useState('Item Title');
//   const [description, setDescription] = useState('Item Description');
//   const [image, setImage] = useState('');
//   const [largeImage, setLargeImage] = useState('');
//   const [price, setPrice] = useState(9998);
//   const uploadFile = async e => {
//     const files = e.target.files;
//     const data = new FormData();
//     data.append('file', files[0]);
//     data.append('upload_preset', 'greatfits');
//     // https://res.cloudinary.com/greatfits/image/upload/v1564874789/sample.jpg
//     const res = await fetch(`https://api.cloudinary.com/v1_1/greatfits/image/upload`, {
//       method: 'POST',
//       body: data
//     });
//     const file = await res.json();
//     setImage(file.secure_url);
//     setLargeImage(file.eager[0].secure_url);
//   }
//   return (
//     <Mutation
//       mutation={CREATE_ITEM_MUTATION}
//       variables={{
//         title,
//         description,
//         image,
//         largeImage,
//         price
//       }}
//     >
//       {(createItem, { loading, error }) => (
//         <Form
//           onSubmit={ async e => {
//             // Stop the form from submitting
//             e.preventDefault();
//             // Call the mutation
//             const res = await createItem();
//             // Change them to the single item page
//             Router.push({
//                 pathname: '/item',
//                 query: { id: res.data.createItem.id }
//             });
//           }}
//           method="post"
//         >
//         <Error error={error}/>
//           <fieldset disabled={loading} aria-busy={loading}>
//             <label htmlFor="file">
//               Image
//               <input
//                 type="file"
//                 id="file"
//                 name="file"
//                 placeholder="Upload an image"
//                 required
//                 onChange={uploadFile}
//               />
//               {image && <img src={image} alt="Upload Preview" width="200"/>}
//             </label>
//             <label htmlFor="title">
//               Title
//               <input
//                 type="text"
//                 id="title"
//                 name="title"
//                 placeholder="Title"
//                 required
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//               />
//             </label>
//             <label htmlFor="price">
//               Price
//               <input
//                 type="number"
//                 id="price"
//                 name="price"
//                 placeholder="Price"
//                 required
//                 value={price}
//                 onChange={e => setPrice(e.target.value)}
//               />
//             </label>
//             <label htmlFor="title">
//               Description
//               <textarea
//                 id="description"
//                 name="description"
//                 placeholder="Enter a Description"
//                 required
//                 value={description}
//                 onChange={e => setDescription(e.target.value)}
//               />
//             </label>
//             <button type="submit">Submit</button>
//           </fieldset>
//         </Form>
//       )}
//     </Mutation>
//   );
// };
// export default CreateItem;
// EXTERNAL MODULE: ./components/PleaseSignin.js
var PleaseSignin = __webpack_require__("eADE");

// CONCATENATED MODULE: ./pages/sell.js



/* harmony default export */ var sell = __webpack_exports__["default"] = (() => external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(PleaseSignin["a" /* default */], null, external_react_default.a.createElement(components_CreateItem, null))));

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4UCa");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "R9qi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YvTO");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);

const CURRENT_USER_QUERY = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query {
    me {
      id
      email
      name
      permissions
      cart {
        id
        quantity
        item {
          id
          price
          image
          title
          description 
        }
      }
    }
  }
`;

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

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

/***/ "VliS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YvTO");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rf6O");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



const CURRENT_USER_QUERY = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  query {
    me {
      id
      email
      name
      permissions
    }
  }
`;

const User = ({
  children
}) => {
  const currentUserQueryPayload = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__["useQuery"])(CURRENT_USER_QUERY);
  return children(currentUserQueryPayload);
};

User.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["b"] = (User); ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// import { Query } from 'react-apollo';
// import gql from 'graphql-tag';
// import PropTypes from 'prop-types';
// export const CURRENT_USER_QUERY = gql`
//   query {
//     me {
//       id
//       email
//       name
//       permissions
//     }
//   }
// `;
// const User = props => {
//   console.log('props = ', props);
//   return (
//   <Query {...props} query={CURRENT_USER_QUERY}>
//     {currentUserQueryPayload => {
//         console.log('currentUserQueryPayload = ', currentUserQueryPayload);
//       return props.children(currentUserQueryPayload);
//       }}
//   </Query>
// );
// }
// User.propTypes = {
//   children: PropTypes.func.isRequired
// };
// export default User;

/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eADE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("R9qi");
/* harmony import */ var _Signin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("km3s");





const PleaseSignIn = props => {
  const {
    data,
    loading
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_lib_queries__WEBPACK_IMPORTED_MODULE_2__[/* CURRENT_USER_QUERY */ "a"]);
  if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading...");
  if (!data) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Sorry, something went wrong. Error code: PS-01");
  if (!data.me) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Please sign in before continuing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Signin__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null));
  return props.children;
};

/* harmony default export */ __webpack_exports__["a"] = (PleaseSignIn);

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "km3s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YvTO");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mzXK");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("VUBQ");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("VliS");







const SIGNIN_MUTATION = apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"]`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

const Signin = () => {
  const [inputs, setInputs] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    email: '',
    name: '',
    password: ''
  });
  const [signup, {
    error,
    loading
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(SIGNIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_6__[/* CURRENT_USER_QUERY */ "a"]
    }]
  });

  const handleFormField = ({
    target
  }) => {
    setInputs(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, inputs, {
      [target.name]: target.value
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    method: "post",
    onSubmit: async e => {
      e.preventDefault();
      const res = await signup();
      setInputs(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, inputs, {
        email: '',
        name: '',
        password: ''
      }));
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
    disabled: loading,
    "aria-busy": loading
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Sign Into Your Account"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    error: error
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "email"
  }, "Email", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Email",
    value: inputs.email,
    onChange: handleFormField
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "password"
  }, "Password", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "password",
    name: "password",
    value: inputs.password,
    onChange: handleFormField
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit"
  }, "Sign In!")));
};

/* harmony default export */ __webpack_exports__["a"] = (Signin); // import React, { useState } from 'react';
// import { Mutation } from 'react-apollo';
// import gql from 'graphql-tag';
// import Form from './styles/Form';
// import Error from './ErrorMessage';
// import { CURRENT_USER_QUERY } from './User';
// const SIGNIN_MUTATION = gql`
//   mutation SIGNIN_MUTATION($email: String!, $password: String!) {
//     signin(email: $email, password: $password) {
//       id
//       email
//       name
//     }
//   }
// `;
// const Signin = () => {
//   const [inputs, setInputs] = useState({
//     email: '',
//     name: '',
//     password: ''
//   });
//   const handleFormField = ({ target }) => {
//     setInputs({
//       ...inputs,
//       [target.name]: target.value
//     });
//   };
//   return (
//     <Mutation
//       mutation={SIGNIN_MUTATION}
//       variables={inputs}
//       refetchQueries={[{ query: CURRENT_USER_QUERY }]}
//     >
//       {(signup, { error, loading }) => {
//         return (
//           <Form
//             method="post"
//             onSubmit={async e => {
//               e.preventDefault();
//               const res = await signup();
//               setInputs({
//                 ...inputs,
//                 email: '',
//                 name: '',
//                 password: ''
//               });
//             }}
//           >
//             <fieldset disabled={loading} aria-busy={loading}>
//               <h2>Sign Into Your Account</h2>
//               <Error error={error} />
//               <label htmlFor="email">
//                 Email
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={inputs.email}
//                   onChange={handleFormField}
//                 />
//               </label>
//               <label htmlFor="password">
//                 Password
//                 <input
//                   type="password"
//                   name="password"
//                   value={inputs.password}
//                   onChange={handleFormField}
//                 />
//               </label>
//               <button type="submit">Sign In!</button>
//             </fieldset>
//           </Form>
//         );
//       }}
//     </Mutation>
//   );
// };
// export default Signin;

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

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });
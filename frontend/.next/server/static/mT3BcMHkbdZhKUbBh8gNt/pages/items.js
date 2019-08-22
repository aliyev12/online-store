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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "+sDd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (error => {
  console.log(`Error from handleError.js: `, error); // throw new Error(`Something went wrong. Check console for more details`);

  return `Error: ${error && error.message ? error.message : 'No error message'}`;
});

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("GL6l");


/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "GL6l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("RNiq");

/* harmony default export */ __webpack_exports__["default"] = (_index__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

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

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js
var parse_float = __webpack_require__("Wa2I");
var parse_float_default = /*#__PURE__*/__webpack_require__.n(parse_float);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// EXTERNAL MODULE: ./lib/handleError.js
var handleError = __webpack_require__("+sDd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/styles/Title.js

const Title = external_styled_components_default.a.h3.withConfig({
  displayName: "Title",
  componentId: "sc-16nq74k-0"
})(["margin:0 1rem;text-align:center;transform:skew(-5deg) rotate(-1deg);margin-top:-3rem;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:", ";display:inline;line-height:1.3;font-size:4rem;text-align:center;color:white;padding:0 1rem;}"], props => props.theme.red);
/* harmony default export */ var styles_Title = (Title);
// CONCATENATED MODULE: ./components/styles/ItemStyles.js

const Item = external_styled_components_default.a.div.withConfig({
  displayName: "ItemStyles__Item",
  componentId: "sc-16pk14u-0"
})(["background:white;border:1px solid ", ";box-shadow:", ";position:relative;display:flex;flex-direction:column;img{width:100%;height:400px;object-fit:cover;}p{font-size:12px;line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}.buttonList{display:grid;width:100%;border-top:1px solid ", ";grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:", ";& > *{background:white;border:0;font-size:1rem;padding:1rem;}}"], props => props.theme.offWhite, props => props.theme.bs, props => props.theme.lightgrey, props => props.theme.lightgrey);
/* harmony default export */ var ItemStyles = (Item);
// CONCATENATED MODULE: ./components/styles/PriceTag.js

const PriceTag = external_styled_components_default.a.span.withConfig({
  displayName: "PriceTag",
  componentId: "nwbk6t-0"
})(["background:", ";transform:rotate(3deg);color:white;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;right:-3px;"], props => props.theme.red);
/* harmony default export */ var styles_PriceTag = (PriceTag);
// EXTERNAL MODULE: ./lib/formatMoney.js
var formatMoney = __webpack_require__("2y/O");

// CONCATENATED MODULE: ./components/DeleteItem.js




const DELETE_ITEM_MUTATION = external_apollo_boost_["gql"]`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

const DeleteItem = ({
  children,
  id
}) => {
  const update = (cache, payload) => {
    // Manually update the cache on the client so it matches the server
    // 1. Read the cache for items we want
    const data = cache.readQuery({
      query: ALL_ITEMS_QUERY
    }); // 2. Filter the deleted item out of the page

    data.items = data.items.filter(item => item.id !== payload.data.deleteItem.id); // 3. Put the items back

    cache.writeQuery({
      query: ALL_ITEMS_QUERY,
      data
    });
  };

  const [deleteItem, {
    error
  }] = Object(react_hooks_["useMutation"])(DELETE_ITEM_MUTATION, {
    update
  });
  return external_react_default.a.createElement("button", {
    onClick: () => {
      if (confirm('Are you sure you wanted to delete this?')) {
        deleteItem({
          variables: {
            id
          }
        }).catch(err => {
          alert(err.message);
        });
      }
    }
  }, children);
};

/* harmony default export */ var components_DeleteItem = (DeleteItem); // import React from 'react';
// import { Mutation } from 'react-apollo';
// import gql from 'graphql-tag';
// import { ALL_ITEMS_QUERY } from './Items';
// export const DELETE_ITEM_MUTATION = gql`
//   mutation DELETE_ITEM_MUTATION($id: ID!) {
//     deleteItem(id: $id) {
//       id
//     }
//   }
// `;
// const DeleteItem = ({ children, id }) => {
//   const update = (cache, payload) => {
//     // Manually update the cache on the client so it matches the server
//     // 1. Read the cache for items we want
//     const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
//     // 2. Filter the deleted item out of the page
//     data.items = data.items.filter(item => item.id !== payload.data.deleteItem.id);
//     // 3. Put the items back
//     cache.writeQuery({ query: ALL_ITEMS_QUERY, data });
//   };
//   return (
//     <Mutation
//       mutation={DELETE_ITEM_MUTATION}
//       variables={{ id }}
//       update={update}
//     >
//       {(deleteItem, { error }) => (
//         <button
//           onClick={() => {
//             if (confirm('Are you sure you wanted to delete this?')) {
//               deleteItem().catch(err => {
//                 alert(err.message);
//               });
//             }
//           }}
//         >
//           {children}
//         </button>
//       )}
//     </Mutation>
//   );
// };
// export default DeleteItem;
// EXTERNAL MODULE: ./lib/queries.js
var queries = __webpack_require__("R9qi");

// CONCATENATED MODULE: ./components/AddToCart.js




const ADD_TO_CART_MUTATION = external_apollo_boost_["gql"]`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;

const AddToCart = ({
  id
}) => {
  const [addToCart, {
    error,
    loading
  }] = Object(react_hooks_["useMutation"])(ADD_TO_CART_MUTATION, {
    variables: {
      id
    },
    refetchQueries: [{
      query: queries["a" /* CURRENT_USER_QUERY */]
    }]
  });
  return external_react_default.a.createElement("button", {
    onClick: addToCart,
    disabled: loading
  }, "Add", loading && 'ing', " To Cart \uD83D\uDED2");
};

/* harmony default export */ var components_AddToCart = (AddToCart); // import React from 'react';
// import { Mutation } from 'react-apollo';
// import gql from 'graphql-tag';
// const ADD_TO_CART_MUTATION = gql`
//   mutation addToCart($id: ID!) {
//     addToCart(id: $id) {
//       id
//       quantity
//     }
//   }
// `;
// const AddToCart = ({ id }) => {
//   return (
//     <Mutation mutation={ADD_TO_CART_MUTATION} variables={{ id }}>
//       {addToCart => <button onClick={addToCart}>Add To Cart 🛒</button>}
//     </Mutation>
//   );
// };
// export default AddToCart;
// CONCATENATED MODULE: ./components/Item.js










const Item_Item = ({
  item
}) => external_react_default.a.createElement(ItemStyles, null, item.image && external_react_default.a.createElement("img", {
  src: item.image,
  alt: item.title
}), external_react_default.a.createElement(styles_Title, null, external_react_default.a.createElement(link_default.a, {
  href: {
    pathname: '/item',
    query: {
      id: item.id
    }
  }
}, external_react_default.a.createElement("a", null, item.title))), external_react_default.a.createElement(styles_PriceTag, null, Object(formatMoney["a" /* default */])(item.price)), external_react_default.a.createElement("p", null, item.description), external_react_default.a.createElement("div", {
  className: "buttonList"
}, external_react_default.a.createElement(link_default.a, {
  href: {
    pathname: 'update',
    query: {
      id: item.id
    }
  }
}, external_react_default.a.createElement("a", null, "Edit \u270F\uFE0F")), external_react_default.a.createElement(components_AddToCart, {
  id: item.id
}), external_react_default.a.createElement(components_DeleteItem, {
  id: item.id
}, "Delete This Item")));

Item_Item.PropsTypes = {
  item: external_prop_types_default.a.object.isRequired
};
/* harmony default export */ var components_Item = (Item_Item);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/styles/PaginationStyles.js

const PaginationStyles = external_styled_components_default.a.div.withConfig({
  displayName: "PaginationStyles",
  componentId: "aduuar-0"
})(["text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;margin:2rem 0;border:1px solid ", ";border-radius:10px;& > *{margin:0;padding:15px 30px;border-right:1px solid ", ";&:last-child{border-right:0;}}a[aria-disabled='true']{color:grey;pointer-events:none;}"], props => props.theme.lightgrey, props => props.theme.lightgrey);
/* harmony default export */ var styles_PaginationStyles = (PaginationStyles);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__("obyI");

// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__("VUBQ");

// CONCATENATED MODULE: ./components/Pagination.js








const PAGINATION_QUERY = external_apollo_boost_["gql"]`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = ({
  page
}) => {
  const {
    data,
    loading,
    error
  } = Object(react_hooks_["useQuery"])(PAGINATION_QUERY);
  if (loading) return external_react_default.a.createElement("p", null, "Loading...");
  if (error) return external_react_default.a.createElement(ErrorMessage["a" /* default */], {
    error: error
  });
  const count = data.itemsConnection.aggregate.count;
  const pages = Math.ceil(count / config["a" /* perPage */]);
  return external_react_default.a.createElement(styles_PaginationStyles, {
    "data-test": "pagination"
  }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Great Fits! Page ", page, " of ", pages)), external_react_default.a.createElement(link_default.a, {
    prefetch: true,
    href: {
      pathname: 'items',
      query: {
        page: page - 1
      }
    }
  }, external_react_default.a.createElement("a", {
    className: "prev",
    "aria-disabled": page <= 1
  }, "\u2190 Prev")), external_react_default.a.createElement("p", null, "Page ", page, " of", external_react_default.a.createElement("span", {
    className: "totalPages"
  }, pages)), external_react_default.a.createElement("p", null, count, " Items Total"), external_react_default.a.createElement(link_default.a, {
    prefetch: true,
    href: {
      pathname: 'items',
      query: {
        page: page + 1
      }
    }
  }, external_react_default.a.createElement("a", {
    className: "next",
    "aria-disabled": page >= pages
  }, "Next \u2192")));
};

/* harmony default export */ var components_Pagination = (Pagination); // import React from 'react';
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
// CONCATENATED MODULE: ./components/Items.js








const ALL_ITEMS_QUERY = external_apollo_boost_["gql"]`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${config["a" /* perPage */]}) {
    items(first: $first, skip: $skip, orderBy: createAt_DESC) {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;
const Center = external_styled_components_default.a.div.withConfig({
  displayName: "Items__Center",
  componentId: "tikday-0"
})(["text-align:center;"]);
const ItemsList = external_styled_components_default.a.div.withConfig({
  displayName: "Items__ItemsList",
  componentId: "tikday-1"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;max-width:", ";margin:0 auto;"], props => props.theme.maxWidth);

const Items = ({
  page
}) => {
  const {
    data,
    error,
    loading
  } = Object(react_hooks_["useQuery"])(ALL_ITEMS_QUERY, {
    variables: {
      skip: page * config["a" /* perPage */] - config["a" /* perPage */],
      first: config["a" /* perPage */]
    }
  });
  return external_react_default.a.createElement(Center, null, external_react_default.a.createElement("p", null, "Items!"), external_react_default.a.createElement(components_Pagination, {
    page: page
  }), loading && external_react_default.a.createElement("p", null, "Loading..."), error && Object(handleError["a" /* default */])(error), !loading && !error && external_react_default.a.createElement(ItemsList, null, data.items.map(item => external_react_default.a.createElement(components_Item, {
    key: item.id,
    item: item
  }))), external_react_default.a.createElement(components_Pagination, {
    page: page
  }));
};

/* harmony default export */ var components_Items = (Items); // import React from 'react';
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
// CONCATENATED MODULE: ./pages/index.js



/* harmony default export */ var pages_0 = __webpack_exports__["default"] = (({
  query
}) => external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(components_Items, {
  page: parse_float_default()(query.page) || 1
})));

/***/ }),

/***/ "T22j":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

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

/***/ "Wa2I":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("T22j");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor() {
    super(...arguments);

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => this.handleRef(el),
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
const propertyFields = ['components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
propertyFields.concat(urlPropertyFields).forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  propertyFields.forEach(field => {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get() {
        return _router[field];
      }

    });
  });
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "obyI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export endpoint */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prodEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return perPage; });
// This is client side config only - don't put anything in here that shouldn't be public!
const endpoint = `http://localhost:4444`;
const prodEndpoint = `https://greatfits-yoga-prod.herokuapp.com/`;
const perPage = 4;

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });
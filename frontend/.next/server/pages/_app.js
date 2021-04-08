module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/linamierke/Github/wesbos/graphql/frontend/components/Page.js\";\n // so here is a parent component and here is with the children will pass, so when I use the <Page> tag in other documment like the index, there I typed some stuff and if i want it to pass here temporary(no won't pass in every page that the <Page> tag is name, just where the children are .. remember: tuvo hijos fuera del matrimonio en otra casa(index.js), y ahora aca en su principal casa tiene que traerlos a mostrarlos y a q se los acepten, pero solo van  a funcionar alla en esa casa no en todas las casas donde vaya de visita)\n\nfunction Page({\n  children,\n  cool\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"I am the page component! children because Im smaller and i belong somewhere:$\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: [\"Lina we pass first because im the father and this are my children::::\", cool]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), children]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n} // this is a next.js library for passing props so we are make sure it will work, how? well first, we need to import it OFCOURSE my pez, luego aca creams este con el nombre de la funcion y el tipo d eprops, puede ser boolena, array, string etc, y asi el documento sabe que tipo de prop es y estar seguros. \n\nPage.propTypes = {\n  cool: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2UuanM/MTc1YyJdLCJuYW1lcyI6WyJQYWdlIiwiY2hpbGRyZW4iLCJjb29sIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztDQUVBOztBQUNlLFNBQVNBLElBQVQsQ0FBYztBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBZCxFQUFrQztBQUMvQyxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFBLDBGQUVHQSxJQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLEVBU0dELFFBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRCxDLENBRUQ7O0FBQ0FELElBQUksQ0FBQ0csU0FBTCxHQUFpQjtBQUNmRCxNQUFJLEVBQUVFLGlEQUFTLENBQUNDLE1BREQ7QUFFZkosVUFBUSxFQUFFRyxpREFBUyxDQUFDRTtBQUZMLENBQWpCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG4vLyBzbyBoZXJlIGlzIGEgcGFyZW50IGNvbXBvbmVudCBhbmQgaGVyZSBpcyB3aXRoIHRoZSBjaGlsZHJlbiB3aWxsIHBhc3MsIHNvIHdoZW4gSSB1c2UgdGhlIDxQYWdlPiB0YWcgaW4gb3RoZXIgZG9jdW1tZW50IGxpa2UgdGhlIGluZGV4LCB0aGVyZSBJIHR5cGVkIHNvbWUgc3R1ZmYgYW5kIGlmIGkgd2FudCBpdCB0byBwYXNzIGhlcmUgdGVtcG9yYXJ5KG5vIHdvbid0IHBhc3MgaW4gZXZlcnkgcGFnZSB0aGF0IHRoZSA8UGFnZT4gdGFnIGlzIG5hbWUsIGp1c3Qgd2hlcmUgdGhlIGNoaWxkcmVuIGFyZSAuLiByZW1lbWJlcjogdHV2byBoaWpvcyBmdWVyYSBkZWwgbWF0cmltb25pbyBlbiBvdHJhIGNhc2EoaW5kZXguanMpLCB5IGFob3JhIGFjYSBlbiBzdSBwcmluY2lwYWwgY2FzYSB0aWVuZSBxdWUgdHJhZXJsb3MgYSBtb3N0cmFybG9zIHkgYSBxIHNlIGxvcyBhY2VwdGVuLCBwZXJvIHNvbG8gdmFuICBhIGZ1bmNpb25hciBhbGxhIGVuIGVzYSBjYXNhIG5vIGVuIHRvZGFzIGxhcyBjYXNhcyBkb25kZSB2YXlhIGRlIHZpc2l0YSlcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoeyBjaGlsZHJlbiwgY29vbCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5cbiAgICAgICAgSSBhbSB0aGUgcGFnZSBjb21wb25lbnQhIGNoaWxkcmVuIGJlY2F1c2UgSW0gc21hbGxlciBhbmQgaSBiZWxvbmdcbiAgICAgICAgc29tZXdoZXJlOiRcbiAgICAgIDwvaDE+XG4gICAgICA8aDM+XG4gICAgICAgIExpbmEgd2UgcGFzcyBmaXJzdCBiZWNhdXNlIGltIHRoZSBmYXRoZXIgYW5kIHRoaXMgYXJlIG15IGNoaWxkcmVuOjo6OlxuICAgICAgICB7Y29vbH1cbiAgICAgIDwvaDM+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIHRoaXMgaXMgYSBuZXh0LmpzIGxpYnJhcnkgZm9yIHBhc3NpbmcgcHJvcHMgc28gd2UgYXJlIG1ha2Ugc3VyZSBpdCB3aWxsIHdvcmssIGhvdz8gd2VsbCBmaXJzdCwgd2UgbmVlZCB0byBpbXBvcnQgaXQgT0ZDT1VSU0UgbXkgcGV6LCBsdWVnbyBhY2EgY3JlYW1zIGVzdGUgY29uIGVsIG5vbWJyZSBkZSBsYSBmdW5jaW9uIHkgZWwgdGlwbyBkIGVwcm9wcywgcHVlZGUgc2VyIGJvb2xlbmEsIGFycmF5LCBzdHJpbmcgZXRjLCB5IGFzaSBlbCBkb2N1bWVudG8gc2FiZSBxdWUgdGlwbyBkZSBwcm9wIGVzIHkgZXN0YXIgc2VndXJvcy4gXG5QYWdlLnByb3BUeXBlcyA9IHtcbiAgY29vbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Page.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Page */ \"./components/Page.js\");\n\nvar _jsxFileName = \"/Users/linamierke/Github/wesbos/graphql/frontend/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n //this _app.js is a particular next.js element that will make sure is going to pass in every single rendering of the page, so here is liek the higher up. Always shown, never goes away. Tip: always next,js has a part name pages, and here it is where _app.js belongs.\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Page__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ2UsU0FBU0EsS0FBVCxDQUFlO0FBQUNDLFdBQUQ7QUFBWUM7QUFBWixDQUFmLEVBQXNDO0FBQ2pELHNCQUNJLHFFQUFDLHdEQUFEO0FBQUEsMkJBQ0kscUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBT0giLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnZVwiXG4vL3RoaXMgX2FwcC5qcyBpcyBhIHBhcnRpY3VsYXIgbmV4dC5qcyBlbGVtZW50IHRoYXQgd2lsbCBtYWtlIHN1cmUgaXMgZ29pbmcgdG8gcGFzcyBpbiBldmVyeSBzaW5nbGUgcmVuZGVyaW5nIG9mIHRoZSBwYWdlLCBzbyBoZXJlIGlzIGxpZWsgdGhlIGhpZ2hlciB1cC4gQWx3YXlzIHNob3duLCBuZXZlciBnb2VzIGF3YXkuIFRpcDogYWx3YXlzIG5leHQsanMgaGFzIGEgcGFydCBuYW1lIHBhZ2VzLCBhbmQgaGVyZSBpdCBpcyB3aGVyZSBfYXBwLmpzIGJlbG9uZ3MuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KXtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxuXG5cbiAgICAgICAgPC9QYWdlPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });
webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var _Users_linamierke_Github_wesbos_graphql_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n\n\nvar _jsxFileName = \"/Users/linamierke/Github/wesbos/graphql/frontend/components/Page.js\";\n\nfunction _templateObject() {\n  var data = Object(_Users_linamierke_Github_wesbos_graphql_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\nhtml{\\n  --red: #ff0000;\\n  --black: #393939;\\n  --grey: #3A3A3A;\\n  --gray: var(--grey);\\n  --lightGrey : #e1e1e1;\\n  --lightGray : var(--lightGrey);\\n  --offWhite: #ededed;\\n  --maxWidth: 1000px;\\n  --bs: '0 12px 24px 0 rgb'; \\n}\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n // so here is a parent component and here is with the children will pass, so when I use the <Page> tag in other documment like the index, there I typed some stuff and if i want it to pass here temporary(no won't pass in every page that the <Page> tag is name, just where the children are .. remember: tuvo hijos fuera del matrimonio en otra casa(index.js), y ahora aca en su principal casa tiene que traerlos a mostrarlos y a q se los acepten, pero solo van  a funcionar alla en esa casa no en todas las casas donde vaya de visita)\n// we use the style component global style to create global styles for the whole project, in this way we don't have to add styles every time we create something\n\nvar GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"createGlobalStyle\"])(_templateObject());\nfunction Page(_ref) {\n  var children = _ref.children,\n      cool = _ref.cool;\n  return (\n    /*#__PURE__*/\n    //this <Header> is the component create ut , and it will be shown in all th epages\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: \" \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n        children: \"I am the page component! children because Im smaller and i belong somewhere:$\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n        children: [\"Lina we pass first because im the father and this are my children::::\", cool]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 7\n      }, this), children]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }, this)\n  );\n} // this is a next.js library for passing props so we are make sure it will work, how? well first, we need to import it OFCOURSE my pez, luego aca creams este con el nombre de la funcion y el tipo d eprops, puede ser boolena, array, string etc, y asi el documento sabe que tipo de prop es y estar seguros.\n\n_c = Page;\nPage.propTypes = {\n  cool: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Page\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlLmpzPzE3NWMiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGVzIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJQYWdlIiwiY2hpbGRyZW4iLCJjb29sIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTtBQUVBOztBQUNBLElBQU1BLFlBQVksR0FBR0MsMkVBQUgsbUJBQWxCO0FBZ0JlLFNBQVNDLElBQVQsT0FBa0M7QUFBQSxNQUFsQkMsUUFBa0IsUUFBbEJBLFFBQWtCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQy9DO0FBQUE7QUFDRTtBQUNBO0FBQUEsOEJBQ0UscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFNRTtBQUFBLDRGQUVHQSxJQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLEVBVUdELFFBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFlRCxDLENBRUQ7O0tBbEJ3QkQsSTtBQW1CeEJBLElBQUksQ0FBQ0csU0FBTCxHQUFpQjtBQUNmRCxNQUFJLEVBQUVFLGlEQUFTLENBQUNDLE1BREQ7QUFFZkosVUFBUSxFQUFFRyxpREFBUyxDQUFDRTtBQUZMLENBQWpCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5cbi8vIHNvIGhlcmUgaXMgYSBwYXJlbnQgY29tcG9uZW50IGFuZCBoZXJlIGlzIHdpdGggdGhlIGNoaWxkcmVuIHdpbGwgcGFzcywgc28gd2hlbiBJIHVzZSB0aGUgPFBhZ2U+IHRhZyBpbiBvdGhlciBkb2N1bW1lbnQgbGlrZSB0aGUgaW5kZXgsIHRoZXJlIEkgdHlwZWQgc29tZSBzdHVmZiBhbmQgaWYgaSB3YW50IGl0IHRvIHBhc3MgaGVyZSB0ZW1wb3Jhcnkobm8gd29uJ3QgcGFzcyBpbiBldmVyeSBwYWdlIHRoYXQgdGhlIDxQYWdlPiB0YWcgaXMgbmFtZSwganVzdCB3aGVyZSB0aGUgY2hpbGRyZW4gYXJlIC4uIHJlbWVtYmVyOiB0dXZvIGhpam9zIGZ1ZXJhIGRlbCBtYXRyaW1vbmlvIGVuIG90cmEgY2FzYShpbmRleC5qcyksIHkgYWhvcmEgYWNhIGVuIHN1IHByaW5jaXBhbCBjYXNhIHRpZW5lIHF1ZSB0cmFlcmxvcyBhIG1vc3RyYXJsb3MgeSBhIHEgc2UgbG9zIGFjZXB0ZW4sIHBlcm8gc29sbyB2YW4gIGEgZnVuY2lvbmFyIGFsbGEgZW4gZXNhIGNhc2Egbm8gZW4gdG9kYXMgbGFzIGNhc2FzIGRvbmRlIHZheWEgZGUgdmlzaXRhKVxuXG4vLyB3ZSB1c2UgdGhlIHN0eWxlIGNvbXBvbmVudCBnbG9iYWwgc3R5bGUgdG8gY3JlYXRlIGdsb2JhbCBzdHlsZXMgZm9yIHRoZSB3aG9sZSBwcm9qZWN0LCBpbiB0aGlzIHdheSB3ZSBkb24ndCBoYXZlIHRvIGFkZCBzdHlsZXMgZXZlcnkgdGltZSB3ZSBjcmVhdGUgc29tZXRoaW5nXG5jb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcblxuaHRtbHtcbiAgLS1yZWQ6ICNmZjAwMDA7XG4gIC0tYmxhY2s6ICMzOTM5Mzk7XG4gIC0tZ3JleTogIzNBM0EzQTtcbiAgLS1ncmF5OiB2YXIoLS1ncmV5KTtcbiAgLS1saWdodEdyZXkgOiAjZTFlMWUxO1xuICAtLWxpZ2h0R3JheSA6IHZhcigtLWxpZ2h0R3JleSk7XG4gIC0tb2ZmV2hpdGU6ICNlZGVkZWQ7XG4gIC0tbWF4V2lkdGg6IDEwMDBweDtcbiAgLS1iczogJzAgMTJweCAyNHB4IDAgcmdiJzsgXG59XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoeyBjaGlsZHJlbiwgY29vbCB9KSB7XG4gIHJldHVybiAoXG4gICAgLy90aGlzIDxIZWFkZXI+IGlzIHRoZSBjb21wb25lbnQgY3JlYXRlIHV0ICwgYW5kIGl0IHdpbGwgYmUgc2hvd24gaW4gYWxsIHRoIGVwYWdlc1xuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyPiA8L0hlYWRlcj5cbiAgICAgIDxoMT5cbiAgICAgICAgSSBhbSB0aGUgcGFnZSBjb21wb25lbnQhIGNoaWxkcmVuIGJlY2F1c2UgSW0gc21hbGxlciBhbmQgaSBiZWxvbmdcbiAgICAgICAgc29tZXdoZXJlOiRcbiAgICAgIDwvaDE+XG4gICAgICA8aDM+XG4gICAgICAgIExpbmEgd2UgcGFzcyBmaXJzdCBiZWNhdXNlIGltIHRoZSBmYXRoZXIgYW5kIHRoaXMgYXJlIG15IGNoaWxkcmVuOjo6OlxuICAgICAgICB7Y29vbH1cbiAgICAgIDwvaDM+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIHRoaXMgaXMgYSBuZXh0LmpzIGxpYnJhcnkgZm9yIHBhc3NpbmcgcHJvcHMgc28gd2UgYXJlIG1ha2Ugc3VyZSBpdCB3aWxsIHdvcmssIGhvdz8gd2VsbCBmaXJzdCwgd2UgbmVlZCB0byBpbXBvcnQgaXQgT0ZDT1VSU0UgbXkgcGV6LCBsdWVnbyBhY2EgY3JlYW1zIGVzdGUgY29uIGVsIG5vbWJyZSBkZSBsYSBmdW5jaW9uIHkgZWwgdGlwbyBkIGVwcm9wcywgcHVlZGUgc2VyIGJvb2xlbmEsIGFycmF5LCBzdHJpbmcgZXRjLCB5IGFzaSBlbCBkb2N1bWVudG8gc2FiZSBxdWUgdGlwbyBkZSBwcm9wIGVzIHkgZXN0YXIgc2VndXJvcy5cblBhZ2UucHJvcFR5cGVzID0ge1xuICBjb29sOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Page.js\n");

/***/ })

})
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Container */ \"./components/Container.jsx\");\n/* harmony import */ var _components_Users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Users */ \"./components/Users.jsx\");\n\n\n\n\n\nconst Index = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"NextJS Project - Home\"\n                }, void 0, false, {\n                    fileName: \"/run/media/brimanz/153c756b-c275-4611-b585-442393709a38/brimanz/Escritorio/Projects/Frontend/nextApp/pages/index.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/run/media/brimanz/153c756b-c275-4611-b585-442393709a38/brimanz/Escritorio/Projects/Frontend/nextApp/pages/index.jsx\",\n                lineNumber: 10,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Index\"\n            }, void 0, false, {\n                fileName: \"/run/media/brimanz/153c756b-c275-4611-b585-442393709a38/brimanz/Escritorio/Projects/Frontend/nextApp/pages/index.jsx\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Users__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                users: props.users\n            }, void 0, false, {\n                fileName: \"/run/media/brimanz/153c756b-c275-4611-b585-442393709a38/brimanz/Escritorio/Projects/Frontend/nextApp/pages/index.jsx\",\n                lineNumber: 14,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/run/media/brimanz/153c756b-c275-4611-b585-442393709a38/brimanz/Escritorio/Projects/Frontend/nextApp/pages/index.jsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Index;\nIndex.getInitialProps = async (ctx)=>{\n    const res = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"https://reqres.in/api/users\");\n    const data = await res.json();\n    return {\n        users: data\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBNEI7QUFDUTtBQUNXO0FBQ1I7QUFHdkMsTUFBTUksUUFBUSxDQUFDQyxRQUFVO0lBQ3hCLHFCQUNDLDhEQUFDSCw2REFBU0E7OzBCQUNULDhEQUFDRixrREFBSUE7MEJBQ0osNEVBQUNNOzhCQUFNOzs7Ozs7Ozs7OzswQkFFUiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0oseURBQUtBO2dCQUNMSyxPQUFPSCxNQUFNRyxLQUFLOzs7Ozs7Ozs7Ozs7QUFJdEI7S0FaTUo7QUFjTkEsTUFBTUssZUFBZSxHQUFHLE9BQU9DLE1BQVE7SUFDdEMsTUFBTUMsTUFBTSxNQUFNVix1REFBS0EsQ0FBQztJQUN4QixNQUFNVyxPQUFPLE1BQU1ELElBQUlFLElBQUk7SUFDM0IsT0FBTztRQUNOTCxPQUFPSTtJQUNSO0FBQ0Q7QUFHQSwrREFBZVIsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWluZXInXG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VycydcblxuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PENvbnRhaW5lcj5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+TmV4dEpTIFByb2plY3QgLSBIb21lPC90aXRsZT5cblx0XHRcdDwvSGVhZD5cblx0XHRcdDxoMj5JbmRleDwvaDI+XG5cdFx0XHQ8VXNlcnNcblx0XHRcdFx0dXNlcnM9e3Byb3BzLnVzZXJzfVxuXHRcdFx0Lz5cblx0XHQ8L0NvbnRhaW5lcj5cblx0KTtcbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9yZXFyZXMuaW4vYXBpL3VzZXJzJyk7XG5cdGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXHRyZXR1cm4ge1xuXHRcdHVzZXJzOiBkYXRhXG5cdH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJuYW1lcyI6WyJIZWFkIiwiZmV0Y2giLCJDb250YWluZXIiLCJVc2VycyIsIkluZGV4IiwicHJvcHMiLCJ0aXRsZSIsImgyIiwidXNlcnMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZXMiLCJkYXRhIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});
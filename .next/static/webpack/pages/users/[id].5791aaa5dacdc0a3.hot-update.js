"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/[id]",{

/***/ "./pages/users/[id].jsx":
/*!******************************!*\
  !*** ./pages/users/[id].jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Container */ \"./components/Container.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst User = (param)=>{\n    let { user  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id  } = router.query;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-md-6 offset-md-3\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-header\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: user.avatar,\n                            alt: \"avatar image\",\n                            style: {\n                                borderRadius: \"50%\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/run/media/brimanz/153c756b-c275-4611-b585-442393709a38/brimanz/Escritorio/Projects/Frontend/nextApp/pages/users/[id].jsx\",\n                            lineNumber: 15,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/run/media/brimanz/153c756b-c275-4611-b585-442393709a38/brimanz/Escritorio/Projects/Frontend/nextApp/pages/users/[id].jsx\",\n                        lineNumber: 14,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\"\n                    }, void 0, false, {\n                        fileName: \"/run/media/brimanz/153c756b-c275-4611-b585-442393709a38/brimanz/Escritorio/Projects/Frontend/nextApp/pages/users/[id].jsx\",\n                        lineNumber: 21,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/run/media/brimanz/153c756b-c275-4611-b585-442393709a38/brimanz/Escritorio/Projects/Frontend/nextApp/pages/users/[id].jsx\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/run/media/brimanz/153c756b-c275-4611-b585-442393709a38/brimanz/Escritorio/Projects/Frontend/nextApp/pages/users/[id].jsx\",\n            lineNumber: 12,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/run/media/brimanz/153c756b-c275-4611-b585-442393709a38/brimanz/Escritorio/Projects/Frontend/nextApp/pages/users/[id].jsx\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, undefined);\n};\n_s(User, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = User;\nUser.getInitialProps = async (ctx)=>{\n    const res = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"https://reqres.in/api/users/\".concat(ctx.query.id));\n    const resJSON = await res.json();\n    return {\n        user: resJSON.data\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFxQztBQUNEO0FBQ2M7QUFHbEQsTUFBTUcsT0FBTyxTQUFZO1FBQVgsRUFBQ0MsS0FBSSxFQUFDOztJQUNuQixNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxFQUFDTSxHQUFFLEVBQUMsR0FBSUQsT0FBT0UsS0FBSztJQUUxQixxQkFDQyw4REFBQ0wsNkRBQVNBO2tCQUNULDRFQUFDTTtZQUFJQyxXQUFVO3NCQUNkLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2QsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNkLDRFQUFDQzs0QkFDQUMsS0FBS1AsS0FBS1EsTUFBTTs0QkFDaEJDLEtBQUk7NEJBQ0pDLE9BQU87Z0NBQUNDLGNBQWM7NEJBQUs7Ozs7Ozs7Ozs7O2tDQUc3Qiw4REFBQ1A7d0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEI7R0F0Qk1OOztRQUNVSCxrREFBU0E7OztLQURuQkc7QUF3Qk5BLEtBQUthLGVBQWUsR0FBRyxPQUFPQyxNQUFRO0lBQ3JDLE1BQU1DLE1BQU0sTUFBTWpCLHVEQUFLQSxDQUFDLCtCQUE0QyxPQUFiZ0IsSUFBSVYsS0FBSyxDQUFDRCxFQUFFO0lBQ25FLE1BQU1hLFVBQVUsTUFBTUQsSUFBSUUsSUFBSTtJQUM5QixPQUFNO1FBQ0xoQixNQUFNZSxRQUFRRSxJQUFJO0lBQ25CO0FBQ0Q7QUFJQSwrREFBZWxCLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvW2lkXS5qc3g/MDY5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInIFxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyJ1xuXG5cbmNvbnN0IFVzZXIgPSAoe3VzZXJ9KSA9PiB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXHRjb25zdCB7aWR9ID0gIHJvdXRlci5xdWVyeTtcblxuXHRyZXR1cm4oXG5cdFx0PENvbnRhaW5lcj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuXHRcdFx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRcdFx0c3JjPXt1c2VyLmF2YXRhcn0gXG5cdFx0XHRcdFx0XHRcdGFsdD1cImF2YXRhciBpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiBcIjUwJVwifX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvQ29udGFpbmVyPlxuXHQpXG59XG5cblVzZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9yZXFyZXMuaW4vYXBpL3VzZXJzLyR7Y3R4LnF1ZXJ5LmlkfWApXG5cdGNvbnN0IHJlc0pTT04gPSBhd2FpdCByZXMuanNvbigpXG5cdHJldHVybntcblx0XHR1c2VyOiByZXNKU09OLmRhdGFcblx0fVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgVXNlciJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJmZXRjaCIsIkNvbnRhaW5lciIsIlVzZXIiLCJ1c2VyIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImF2YXRhciIsImFsdCIsInN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVzIiwicmVzSlNPTiIsImpzb24iLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users/[id].jsx\n"));

/***/ })

});
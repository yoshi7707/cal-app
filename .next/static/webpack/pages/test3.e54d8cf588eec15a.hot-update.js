"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test3",{

/***/ "./pages/test3.js":
/*!************************!*\
  !*** ./pages/test3.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Selectable; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-big-calendar */ \"./node_modules/react-big-calendar/dist/react-big-calendar.esm.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n// import DemoLink from '../../DemoLink.component'\n// import events from '../../resources/events'\nfunction Selectable(param) {\n    var localizer = param.localizer;\n    _s();\n    var events = [\n        {\n            // id: 1,\n            title: \"Event 1\",\n            start: new Date(),\n            end: new Date(new Date().getTime() + 60 * 60 * 1000)\n        },\n        {\n            // id: 2,\n            title: \"Event 2\",\n            start: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),\n            end: new Date(new Date().getTime() + 25 * 60 * 60 * 1000)\n        }\n    ];\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(events), 2), myEvents = _useState[0], setEvents = _useState[1];\n    //   const handleSelectSlot = useCallback(\n    //     ({ start, end }) => {\n    //       const title = window.prompt('New Event name')\n    //       if (title) {\n    //         setEvents((prev) => [...prev, { title, start, end}])\n    //       }\n    //     },\n    //     [setEvents]\n    //   )\n    //   const handleSelectEvent = useCallback(\n    //     (event) => window.alert(event.title),\n    //     []\n    //   )\n    //   const { defaultDate, scrollToTime } = useMemo(\n    //     () => ({\n    //       defaultDate: new Date(2015, 3, 12),\n    //       scrollToTime: new Date(1970, 1, 1, 6),\n    //     }),\n    //     []\n    //   )\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"height600\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_big_calendar__WEBPACK_IMPORTED_MODULE_2__.Calendar, {\n                //   defaultDate={defaultDate}\n                //   defaultView={Views.WEEK}\n                events: myEvents,\n                localizer: localizer,\n                //   onSelectEvent={handleSelectEvent}\n                //   onSelectSlot={window.alert(\"bbbbb\")}\n                onSelectSlot: function() {\n                    if (true) {\n                        window.alert(\"bbbbb\");\n                    }\n                }\n            }, void 0, false, {\n                fileName: \"/Users/yoshitaguchi/projects/my-project/calendar/cal-app/pages/test3.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/yoshitaguchi/projects/my-project/calendar/cal-app/pages/test3.js\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yoshitaguchi/projects/my-project/calendar/cal-app/pages/test3.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Selectable, \"WTQcoUiNnGjyl5nhUwny29zNdDI=\");\n_c = Selectable;\nSelectable.propTypes = {\n    localizer: prop_types__WEBPACK_IMPORTED_MODULE_4___default().instanceOf(react_big_calendar__WEBPACK_IMPORTED_MODULE_2__.DateLocalizer)\n};\nvar _c;\n$RefreshReg$(_c, \"Selectable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0My5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUU7QUFDckM7QUFDaUM7QUFDbkUsa0RBQWtEO0FBQ2xELDhDQUE4QztBQUUvQixTQUFTUyxXQUFXLEtBQWE7UUFBYixrQkFBRUM7O0lBRW5DLElBQU1DLFNBQVM7UUFDYjtZQUNJLFNBQVM7WUFDVEMsT0FBTztZQUNQQyxPQUFPLElBQUlDO1lBQ1hDLEtBQUssSUFBSUQsS0FBSyxJQUFJQSxPQUFPRSxPQUFPLEtBQUssS0FBSyxLQUFLO1FBQ25EO1FBQ0E7WUFDSSxTQUFTO1lBQ1RKLE9BQU87WUFDUEMsT0FBTyxJQUFJQyxLQUFLLElBQUlBLE9BQU9FLE9BQU8sS0FBSyxLQUFLLEtBQUssS0FBSztZQUN0REQsS0FBSyxJQUFJRCxLQUFLLElBQUlBLE9BQU9FLE9BQU8sS0FBSyxLQUFLLEtBQUssS0FBSztRQUN4RDtLQUNIO0lBRUQsSUFBOEJkLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQ1MsYUFBaENNLFdBQXVCZixjQUFiZ0IsWUFBYWhCO0lBRTlCLDBDQUEwQztJQUMxQyw0QkFBNEI7SUFDNUIsc0RBQXNEO0lBQ3RELHFCQUFxQjtJQUNyQiwrREFBK0Q7SUFDL0QsVUFBVTtJQUNWLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsTUFBTTtJQUVOLDJDQUEyQztJQUMzQyw0Q0FBNEM7SUFDNUMsU0FBUztJQUNULE1BQU07SUFFTixtREFBbUQ7SUFDbkQsZUFBZTtJQUNmLDRDQUE0QztJQUM1QywrQ0FBK0M7SUFDL0MsVUFBVTtJQUNWLFNBQVM7SUFDVCxNQUFNO0lBRUoscUJBQ0UsOERBQUNELDJDQUFRQTtrQkFPUCw0RUFBQ2tCO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNkLHdEQUFRQTtnQkFDVCw4QkFBOEI7Z0JBQzlCLDZCQUE2QjtnQkFDM0JLLFFBQVFNO2dCQUNSUCxXQUFXQTtnQkFDYixzQ0FBc0M7Z0JBQ3RDLHlDQUF5QztnQkFDekNXLGNBQWM7b0JBQ1YsSUFBSSxJQUFrQixFQUFhO3dCQUNqQ0MsT0FBT0MsS0FBSyxDQUFDO29CQUNmO2dCQUNGOzs7Ozs7Ozs7Ozs7Ozs7O0FBT1Y7R0FyRXdCZDtLQUFBQTtBQXVFeEJBLFdBQVdlLFNBQVMsR0FBRztJQUNyQmQsV0FBV0wsNERBQW9CLENBQUNHLDZEQUFhQTtBQUMvQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90ZXN0My5qcz82MzkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBDYWxlbmRhciwgVmlld3MsIERhdGVMb2NhbGl6ZXIgfSBmcm9tICdyZWFjdC1iaWctY2FsZW5kYXInXG4vLyBpbXBvcnQgRGVtb0xpbmsgZnJvbSAnLi4vLi4vRGVtb0xpbmsuY29tcG9uZW50J1xuLy8gaW1wb3J0IGV2ZW50cyBmcm9tICcuLi8uLi9yZXNvdXJjZXMvZXZlbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWxlY3RhYmxlKHsgbG9jYWxpemVyIH0pIHtcblxuICBjb25zdCBldmVudHMgPSBbXG4gICAge1xuICAgICAgICAvLyBpZDogMSxcbiAgICAgICAgdGl0bGU6ICdFdmVudCAxJyxcbiAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKCksXG4gICAgICAgIGVuZDogbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyA2MCAqIDYwICogMTAwMCksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIC8vIGlkOiAyLFxuICAgICAgICB0aXRsZTogJ0V2ZW50IDInLFxuICAgICAgICBzdGFydDogbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAyNCAqIDYwICogNjAgKiAxMDAwKSxcbiAgICAgICAgZW5kOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDI1ICogNjAgKiA2MCAqIDEwMDApLFxuICAgIH0sXG5dO1xuXG5jb25zdCBbbXlFdmVudHMsIHNldEV2ZW50c10gPSB1c2VTdGF0ZShldmVudHMpO1xuXG4vLyAgIGNvbnN0IGhhbmRsZVNlbGVjdFNsb3QgPSB1c2VDYWxsYmFjayhcbi8vICAgICAoeyBzdGFydCwgZW5kIH0pID0+IHtcbi8vICAgICAgIGNvbnN0IHRpdGxlID0gd2luZG93LnByb21wdCgnTmV3IEV2ZW50IG5hbWUnKVxuLy8gICAgICAgaWYgKHRpdGxlKSB7XG4vLyAgICAgICAgIHNldEV2ZW50cygocHJldikgPT4gWy4uLnByZXYsIHsgdGl0bGUsIHN0YXJ0LCBlbmR9XSlcbi8vICAgICAgIH1cbi8vICAgICB9LFxuLy8gICAgIFtzZXRFdmVudHNdXG4vLyAgIClcblxuLy8gICBjb25zdCBoYW5kbGVTZWxlY3RFdmVudCA9IHVzZUNhbGxiYWNrKFxuLy8gICAgIChldmVudCkgPT4gd2luZG93LmFsZXJ0KGV2ZW50LnRpdGxlKSxcbi8vICAgICBbXVxuLy8gICApXG5cbi8vICAgY29uc3QgeyBkZWZhdWx0RGF0ZSwgc2Nyb2xsVG9UaW1lIH0gPSB1c2VNZW1vKFxuLy8gICAgICgpID0+ICh7XG4vLyAgICAgICBkZWZhdWx0RGF0ZTogbmV3IERhdGUoMjAxNSwgMywgMTIpLFxuLy8gICAgICAgc2Nyb2xsVG9UaW1lOiBuZXcgRGF0ZSgxOTcwLCAxLCAxLCA2KSxcbi8vICAgICB9KSxcbi8vICAgICBbXVxuLy8gICApXG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7LyogPERlbW9MaW5rIGZpbGVOYW1lPVwic2VsZWN0YWJsZVwiPlxuICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgIENsaWNrIGFuIGV2ZW50IHRvIHNlZSBtb3JlIGluZm8sIG9yIGRyYWcgdGhlIG1vdXNlIG92ZXIgdGhlIGNhbGVuZGFyXG4gICAgICAgICAgdG8gc2VsZWN0IGEgZGF0ZS90aW1lIHJhbmdlLlxuICAgICAgICA8L3N0cm9uZz5cbiAgICAgIDwvRGVtb0xpbms+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWlnaHQ2MDBcIj5cbiAgICAgICAgPENhbGVuZGFyXG4gICAgICAgIC8vICAgZGVmYXVsdERhdGU9e2RlZmF1bHREYXRlfVxuICAgICAgICAvLyAgIGRlZmF1bHRWaWV3PXtWaWV3cy5XRUVLfVxuICAgICAgICAgIGV2ZW50cz17bXlFdmVudHN9XG4gICAgICAgICAgbG9jYWxpemVyPXtsb2NhbGl6ZXJ9XG4gICAgICAgIC8vICAgb25TZWxlY3RFdmVudD17aGFuZGxlU2VsZWN0RXZlbnR9XG4gICAgICAgIC8vICAgb25TZWxlY3RTbG90PXt3aW5kb3cuYWxlcnQoXCJiYmJiYlwiKX1cbiAgICAgICAgb25TZWxlY3RTbG90PXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiYmJiYmJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgLy8gICBzZWxlY3RhYmxlXG4gICAgICAgIC8vICAgc2Nyb2xsVG9UaW1lPXtzY3JvbGxUb1RpbWV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cblNlbGVjdGFibGUucHJvcFR5cGVzID0ge1xuICBsb2NhbGl6ZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGVMb2NhbGl6ZXIpLFxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJQcm9wVHlwZXMiLCJDYWxlbmRhciIsIlZpZXdzIiwiRGF0ZUxvY2FsaXplciIsIlNlbGVjdGFibGUiLCJsb2NhbGl6ZXIiLCJldmVudHMiLCJ0aXRsZSIsInN0YXJ0IiwiRGF0ZSIsImVuZCIsImdldFRpbWUiLCJteUV2ZW50cyIsInNldEV2ZW50cyIsImRpdiIsImNsYXNzTmFtZSIsIm9uU2VsZWN0U2xvdCIsIndpbmRvdyIsImFsZXJ0IiwicHJvcFR5cGVzIiwiaW5zdGFuY2VPZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/test3.js\n"));

/***/ })

});
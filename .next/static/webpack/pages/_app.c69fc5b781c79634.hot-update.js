"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[13].use[2]!./styles/MyCalendar.css":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[13].use[2]!./styles/MyCalendar.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".popup {\\n  position: fixed; /* Cover the entire view */\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.75); /* Make overlay darker */\\n  z-index: 1000; /* Ensure it's above other content */\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.popup-inner {\\n  background-color: #fff;\\n  padding: 20px;\\n  border-radius: 5px;\\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\\n  z-index: 1001;\\n  align-items: left; /* Ensure content is above the overlay */\\n}\\n\\n.smaller-title {\\n  font-size: 70%; /* Set the font size to 12 pixels */\\n}\\n\\n.smaller-font {\\n  font-size: 70%; /* Set the font size to 12 pixels */\\n}\\n\\n/* .popup {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.popup-inner {\\n  background-color: #fff;\\n  padding: 20px;\\n  border-radius: 5px;\\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\\n} */\\n/* .event-input-container {\\n    display: flex;\\n    align-items: center;\\n  }\\n  \\n  .event-input {\\n    width: 500px;\\n    margin-right: 10px;\\n  }\\n  \\n  .event-input-cancel {\\n    white-space: nowrap;\\n  } */\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/MyCalendar.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,eAAe,EAAE,0BAA0B;EAC3C,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,qCAAqC,EAAE,wBAAwB;EAC/D,aAAa,EAAE,oCAAoC;EACnD,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,kBAAkB;EAClB,uCAAuC;EACvC,aAAa;EACb,iBAAiB,EAAE,wCAAwC;AAC7D;;AAEA;EACE,cAAc,EAAE,mCAAmC;AACrD;;AAEA;EACE,cAAc,EAAE,mCAAmC;AACrD;;AAEA;;;;;;;;;;;;;;;;;GAiBG;AACH;;;;;;;;;;;;KAYK\",\"sourcesContent\":[\".popup {\\n  position: fixed; /* Cover the entire view */\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.75); /* Make overlay darker */\\n  z-index: 1000; /* Ensure it's above other content */\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.popup-inner {\\n  background-color: #fff;\\n  padding: 20px;\\n  border-radius: 5px;\\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\\n  z-index: 1001;\\n  align-items: left; /* Ensure content is above the overlay */\\n}\\n\\n.smaller-title {\\n  font-size: 70%; /* Set the font size to 12 pixels */\\n}\\n\\n.smaller-font {\\n  font-size: 70%; /* Set the font size to 12 pixels */\\n}\\n\\n/* .popup {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.popup-inner {\\n  background-color: #fff;\\n  padding: 20px;\\n  border-radius: 5px;\\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\\n} */\\n/* .event-input-container {\\n    display: flex;\\n    align-items: center;\\n  }\\n  \\n  .event-input {\\n    width: 500px;\\n    margin-right: 10px;\\n  }\\n  \\n  .event-input-cancel {\\n    white-space: nowrap;\\n  } */\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzEzXS51c2VbMl0hLi9zdHlsZXMvTXlDYWxlbmRhci5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLGtEQUFrRCxxQkFBcUIsc0NBQXNDLFlBQVksZ0JBQWdCLGlCQUFpQiwyQ0FBMkMsNENBQTRDLHVEQUF1RCw0QkFBNEIsd0JBQXdCLEdBQUcsa0JBQWtCLDJCQUEyQixrQkFBa0IsdUJBQXVCLDRDQUE0QyxrQkFBa0IsdUJBQXVCLDRDQUE0QyxvQkFBb0Isb0JBQW9CLHVDQUF1QyxtQkFBbUIsb0JBQW9CLHVDQUF1QyxlQUFlLG9CQUFvQixXQUFXLFlBQVksZ0JBQWdCLGlCQUFpQix5Q0FBeUMsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxrQkFBa0IsMkJBQTJCLGtCQUFrQix1QkFBdUIsNENBQTRDLElBQUksK0JBQStCLG9CQUFvQiwwQkFBMEIsS0FBSyxzQkFBc0IsbUJBQW1CLHlCQUF5QixLQUFLLDZCQUE2QiwwQkFBMEIsTUFBTSxTQUFTLHNGQUFzRixzQkFBc0IsV0FBVyxVQUFVLFVBQVUsVUFBVSx3QkFBd0IsdUJBQXVCLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsd0JBQXdCLE9BQU8sS0FBSyxzQkFBc0IsT0FBTyxLQUFLLHNCQUFzQixPQUFPLHFCQUFxQixNQUFNLGdCQUFnQixpQ0FBaUMscUJBQXFCLHNDQUFzQyxZQUFZLGdCQUFnQixpQkFBaUIsMkNBQTJDLDRDQUE0Qyx1REFBdUQsNEJBQTRCLHdCQUF3QixHQUFHLGtCQUFrQiwyQkFBMkIsa0JBQWtCLHVCQUF1Qiw0Q0FBNEMsa0JBQWtCLHVCQUF1Qiw0Q0FBNEMsb0JBQW9CLG9CQUFvQix1Q0FBdUMsbUJBQW1CLG9CQUFvQix1Q0FBdUMsZUFBZSxvQkFBb0IsV0FBVyxZQUFZLGdCQUFnQixpQkFBaUIseUNBQXlDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsa0JBQWtCLDJCQUEyQixrQkFBa0IsdUJBQXVCLDRDQUE0QyxJQUFJLCtCQUErQixvQkFBb0IsMEJBQTBCLEtBQUssc0JBQXNCLG1CQUFtQix5QkFBeUIsS0FBSyw2QkFBNkIsMEJBQTBCLE1BQU0scUJBQXFCO0FBQ2w4RjtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9NeUNhbGVuZGFyLmNzcz9iMDNkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBDb3ZlciB0aGUgZW50aXJlIHZpZXcgKi9cXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7IC8qIE1ha2Ugb3ZlcmxheSBkYXJrZXIgKi9cXG4gIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSBpdCdzIGFib3ZlIG90aGVyIGNvbnRlbnQgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3B1cC1pbm5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHotaW5kZXg6IDEwMDE7XFxuICBhbGlnbi1pdGVtczogbGVmdDsgLyogRW5zdXJlIGNvbnRlbnQgaXMgYWJvdmUgdGhlIG92ZXJsYXkgKi9cXG59XFxuXFxuLnNtYWxsZXItdGl0bGUge1xcbiAgZm9udC1zaXplOiA3MCU7IC8qIFNldCB0aGUgZm9udCBzaXplIHRvIDEyIHBpeGVscyAqL1xcbn1cXG5cXG4uc21hbGxlci1mb250IHtcXG4gIGZvbnQtc2l6ZTogNzAlOyAvKiBTZXQgdGhlIGZvbnQgc2l6ZSB0byAxMiBwaXhlbHMgKi9cXG59XFxuXFxuLyogLnBvcHVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3B1cC1pbm5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59ICovXFxuLyogLmV2ZW50LWlucHV0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC5ldmVudC1pbnB1dCB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgfVxcbiAgXFxuICAuZXZlbnQtaW5wdXQtY2FuY2VsIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIH0gKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL015Q2FsZW5kYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZSxFQUFFLDBCQUEwQjtFQUMzQyxNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDLEVBQUUsd0JBQXdCO0VBQy9ELGFBQWEsRUFBRSxvQ0FBb0M7RUFDbkQsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsYUFBYTtFQUNiLGlCQUFpQixFQUFFLHdDQUF3QztBQUM3RDs7QUFFQTtFQUNFLGNBQWMsRUFBRSxtQ0FBbUM7QUFDckQ7O0FBRUE7RUFDRSxjQUFjLEVBQUUsbUNBQW1DO0FBQ3JEOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUNIOzs7Ozs7Ozs7Ozs7S0FZS1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBDb3ZlciB0aGUgZW50aXJlIHZpZXcgKi9cXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7IC8qIE1ha2Ugb3ZlcmxheSBkYXJrZXIgKi9cXG4gIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSBpdCdzIGFib3ZlIG90aGVyIGNvbnRlbnQgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3B1cC1pbm5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHotaW5kZXg6IDEwMDE7XFxuICBhbGlnbi1pdGVtczogbGVmdDsgLyogRW5zdXJlIGNvbnRlbnQgaXMgYWJvdmUgdGhlIG92ZXJsYXkgKi9cXG59XFxuXFxuLnNtYWxsZXItdGl0bGUge1xcbiAgZm9udC1zaXplOiA3MCU7IC8qIFNldCB0aGUgZm9udCBzaXplIHRvIDEyIHBpeGVscyAqL1xcbn1cXG5cXG4uc21hbGxlci1mb250IHtcXG4gIGZvbnQtc2l6ZTogNzAlOyAvKiBTZXQgdGhlIGZvbnQgc2l6ZSB0byAxMiBwaXhlbHMgKi9cXG59XFxuXFxuLyogLnBvcHVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3B1cC1pbm5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59ICovXFxuLyogLmV2ZW50LWlucHV0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC5ldmVudC1pbnB1dCB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgfVxcbiAgXFxuICAuZXZlbnQtaW5wdXQtY2FuY2VsIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIH0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[13].use[2]!./styles/MyCalendar.css\n"));

/***/ })

});
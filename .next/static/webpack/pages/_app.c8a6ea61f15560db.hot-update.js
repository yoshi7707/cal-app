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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".popup {\\n  position: fixed; /* Cover the entire view */\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.75); /* Make overlay darker */\\n  z-index: 1000; /* Ensure it's above other content */\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.popup-inner {\\n  background-color: #fff;\\n  padding: 20px;\\n  border-radius: 5px;\\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\\n  z-index: 1001;\\n   /* Ensure content is above the overlay */\\n}\\n\\n.smaller-title {\\n  font-size: 70%; /* Set the font size to 12 pixels */\\n}\\n\\n.smaller-font {\\n  font-size: 70%; /* Set the font size to 12 pixels */\\n}\\n\\n/* .popup {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.popup-inner {\\n  background-color: #fff;\\n  padding: 20px;\\n  border-radius: 5px;\\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\\n} */\\n/* .event-input-container {\\n    display: flex;\\n    align-items: center;\\n  }\\n  \\n  .event-input {\\n    width: 500px;\\n    margin-right: 10px;\\n  }\\n  \\n  .event-input-cancel {\\n    white-space: nowrap;\\n  } */\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/MyCalendar.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,eAAe,EAAE,0BAA0B;EAC3C,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,qCAAqC,EAAE,wBAAwB;EAC/D,aAAa,EAAE,oCAAoC;EACnD,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,kBAAkB;EAClB,uCAAuC;EACvC,aAAa;GACZ,wCAAwC;AAC3C;;AAEA;EACE,cAAc,EAAE,mCAAmC;AACrD;;AAEA;EACE,cAAc,EAAE,mCAAmC;AACrD;;AAEA;;;;;;;;;;;;;;;;;GAiBG;AACH;;;;;;;;;;;;KAYK\",\"sourcesContent\":[\".popup {\\n  position: fixed; /* Cover the entire view */\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.75); /* Make overlay darker */\\n  z-index: 1000; /* Ensure it's above other content */\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.popup-inner {\\n  background-color: #fff;\\n  padding: 20px;\\n  border-radius: 5px;\\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\\n  z-index: 1001;\\n   /* Ensure content is above the overlay */\\n}\\n\\n.smaller-title {\\n  font-size: 70%; /* Set the font size to 12 pixels */\\n}\\n\\n.smaller-font {\\n  font-size: 70%; /* Set the font size to 12 pixels */\\n}\\n\\n/* .popup {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.popup-inner {\\n  background-color: #fff;\\n  padding: 20px;\\n  border-radius: 5px;\\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\\n} */\\n/* .event-input-container {\\n    display: flex;\\n    align-items: center;\\n  }\\n  \\n  .event-input {\\n    width: 500px;\\n    margin-right: 10px;\\n  }\\n  \\n  .event-input-cancel {\\n    white-space: nowrap;\\n  } */\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzEzXS51c2VbMl0hLi9zdHlsZXMvTXlDYWxlbmRhci5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLGtEQUFrRCxxQkFBcUIsc0NBQXNDLFlBQVksZ0JBQWdCLGlCQUFpQiwyQ0FBMkMsNENBQTRDLHVEQUF1RCw0QkFBNEIsd0JBQXdCLEdBQUcsa0JBQWtCLDJCQUEyQixrQkFBa0IsdUJBQXVCLDRDQUE0QyxrQkFBa0IsaURBQWlELG9CQUFvQixvQkFBb0IsdUNBQXVDLG1CQUFtQixvQkFBb0IsdUNBQXVDLGVBQWUsb0JBQW9CLFdBQVcsWUFBWSxnQkFBZ0IsaUJBQWlCLHlDQUF5QyxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGtCQUFrQiwyQkFBMkIsa0JBQWtCLHVCQUF1Qiw0Q0FBNEMsSUFBSSwrQkFBK0Isb0JBQW9CLDBCQUEwQixLQUFLLHNCQUFzQixtQkFBbUIseUJBQXlCLEtBQUssNkJBQTZCLDBCQUEwQixNQUFNLFNBQVMsc0ZBQXNGLHNCQUFzQixXQUFXLFVBQVUsVUFBVSxVQUFVLHdCQUF3Qix1QkFBdUIsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxzQkFBc0IsT0FBTyxLQUFLLHNCQUFzQixPQUFPLHFCQUFxQixNQUFNLGdCQUFnQixpQ0FBaUMscUJBQXFCLHNDQUFzQyxZQUFZLGdCQUFnQixpQkFBaUIsMkNBQTJDLDRDQUE0Qyx1REFBdUQsNEJBQTRCLHdCQUF3QixHQUFHLGtCQUFrQiwyQkFBMkIsa0JBQWtCLHVCQUF1Qiw0Q0FBNEMsa0JBQWtCLGlEQUFpRCxvQkFBb0Isb0JBQW9CLHVDQUF1QyxtQkFBbUIsb0JBQW9CLHVDQUF1QyxlQUFlLG9CQUFvQixXQUFXLFlBQVksZ0JBQWdCLGlCQUFpQix5Q0FBeUMsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxrQkFBa0IsMkJBQTJCLGtCQUFrQix1QkFBdUIsNENBQTRDLElBQUksK0JBQStCLG9CQUFvQiwwQkFBMEIsS0FBSyxzQkFBc0IsbUJBQW1CLHlCQUF5QixLQUFLLDZCQUE2QiwwQkFBMEIsTUFBTSxxQkFBcUI7QUFDbDVGO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL015Q2FsZW5kYXIuY3NzP2IwM2QiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIENvdmVyIHRoZSBlbnRpcmUgdmlldyAqL1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTsgLyogTWFrZSBvdmVybGF5IGRhcmtlciAqL1xcbiAgei1pbmRleDogMTAwMDsgLyogRW5zdXJlIGl0J3MgYWJvdmUgb3RoZXIgY29udGVudCAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcHVwLWlubmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgei1pbmRleDogMTAwMTtcXG4gICAvKiBFbnN1cmUgY29udGVudCBpcyBhYm92ZSB0aGUgb3ZlcmxheSAqL1xcbn1cXG5cXG4uc21hbGxlci10aXRsZSB7XFxuICBmb250LXNpemU6IDcwJTsgLyogU2V0IHRoZSBmb250IHNpemUgdG8gMTIgcGl4ZWxzICovXFxufVxcblxcbi5zbWFsbGVyLWZvbnQge1xcbiAgZm9udC1zaXplOiA3MCU7IC8qIFNldCB0aGUgZm9udCBzaXplIHRvIDEyIHBpeGVscyAqL1xcbn1cXG5cXG4vKiAucG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcHVwLWlubmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn0gKi9cXG4vKiAuZXZlbnQtaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLmV2ZW50LWlucHV0IHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuICBcXG4gIC5ldmVudC1pbnB1dC1jYW5jZWwge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgfSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvTXlDYWxlbmRhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlLEVBQUUsMEJBQTBCO0VBQzNDLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixxQ0FBcUMsRUFBRSx3QkFBd0I7RUFDL0QsYUFBYSxFQUFFLG9DQUFvQztFQUNuRCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxhQUFhO0dBQ1osd0NBQXdDO0FBQzNDOztBQUVBO0VBQ0UsY0FBYyxFQUFFLG1DQUFtQztBQUNyRDs7QUFFQTtFQUNFLGNBQWMsRUFBRSxtQ0FBbUM7QUFDckQ7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHO0FBQ0g7Ozs7Ozs7Ozs7OztLQVlLXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIENvdmVyIHRoZSBlbnRpcmUgdmlldyAqL1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTsgLyogTWFrZSBvdmVybGF5IGRhcmtlciAqL1xcbiAgei1pbmRleDogMTAwMDsgLyogRW5zdXJlIGl0J3MgYWJvdmUgb3RoZXIgY29udGVudCAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcHVwLWlubmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgei1pbmRleDogMTAwMTtcXG4gICAvKiBFbnN1cmUgY29udGVudCBpcyBhYm92ZSB0aGUgb3ZlcmxheSAqL1xcbn1cXG5cXG4uc21hbGxlci10aXRsZSB7XFxuICBmb250LXNpemU6IDcwJTsgLyogU2V0IHRoZSBmb250IHNpemUgdG8gMTIgcGl4ZWxzICovXFxufVxcblxcbi5zbWFsbGVyLWZvbnQge1xcbiAgZm9udC1zaXplOiA3MCU7IC8qIFNldCB0aGUgZm9udCBzaXplIHRvIDEyIHBpeGVscyAqL1xcbn1cXG5cXG4vKiAucG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcHVwLWlubmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn0gKi9cXG4vKiAuZXZlbnQtaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLmV2ZW50LWlucHV0IHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuICBcXG4gIC5ldmVudC1pbnB1dC1jYW5jZWwge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgfSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[13].use[2]!./styles/MyCalendar.css\n"));

/***/ })

});
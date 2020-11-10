webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! exports provided: validateJson, validateString, validateFieldWithEnum, validateIconObj, validateLang */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateJson\", function() { return validateJson; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateString\", function() { return validateString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateFieldWithEnum\", function() { return validateFieldWithEnum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateIconObj\", function() { return validateIconObj; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateLang\", function() { return validateLang; });\nfunction validateJson(json) {\n  if (/^[\\],:{}\\s]*$/.test(json.value.replace(/\\\\[\"\\\\\\/bfnrtu]/g, '@').replace(/\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g, ']').replace(/(?:^|:|,)(?:\\s*\\[)+/g, ''))) {\n    return true;\n  } else {\n    return false;\n  }\n}\nfunction validateString(field, manifest, errors) {\n  if (field in manifest) {\n    if (typeof manifest[field] !== 'string') {\n      errors[field] = \"manifest \".concat(field, \" field type should be string\");\n    }\n  } else {\n    errors[field] = \"manifest \".concat(field, \" field is required\");\n  }\n}\nfunction validateFieldWithEnum(field, manifest, errors, enumValus) {\n  if (field in manifest) {\n    if (typeof manifest[field] !== 'string') {\n      errors[field] = \"manifest \".concat(field, \" field type should be string\");\n    } else {\n      if (!enumValus.includes(manifest[field])) {\n        errors[field] = \"manifest \".concat(field, \" field value not correct\");\n      }\n    }\n  } else {\n    errors[field] = \"manifest \".concat(field, \" field is required\");\n  }\n}\nfunction validateIconObj(iconObj) {\n  var error = {}; // icons src validate\n\n  if ('src' in iconObj) {\n    if (typeof iconObj['src'] !== 'string') {\n      error.src = 'manifest icons field icon type should be string';\n    }\n  } else {\n    error.src = 'manifest icons field icon is required';\n  } // icons size validate\n\n\n  if ('sizes' in iconObj) {\n    var sizes = iconObj['sizes'];\n\n    if (typeof sizes !== 'string') {\n      error.sizes = 'manifest icons field size type should be string';\n    } else {\n      if (!/^\\s*\\d+x\\d+(\\s+\\d+x\\d+)*\\s*$/.test(sizes)) {\n        error.sizes = 'manifest icons field sizes should be correct format!';\n      }\n    }\n  } else {\n    error.sizes = 'manifest icons field size is required!';\n  }\n\n  return error;\n}\nfunction validateLang(field, manifest, errors) {\n  if (field in manifest) {\n    if (typeof manifest[field] !== 'string') {\n      errors[field] = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(manifestLang)) {\n        errors[field] = 'manifest lang field type should be correct format!';\n      }\n    }\n  } else {\n    errors[field] = 'manifest lang field is required!';\n  }\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXRpbHMuanM/OTBjMCJdLCJuYW1lcyI6WyJ2YWxpZGF0ZUpzb24iLCJqc29uIiwidGVzdCIsInZhbHVlIiwicmVwbGFjZSIsInZhbGlkYXRlU3RyaW5nIiwiZmllbGQiLCJtYW5pZmVzdCIsImVycm9ycyIsInZhbGlkYXRlRmllbGRXaXRoRW51bSIsImVudW1WYWx1cyIsImluY2x1ZGVzIiwidmFsaWRhdGVJY29uT2JqIiwiaWNvbk9iaiIsImVycm9yIiwic3JjIiwic2l6ZXMiLCJ2YWxpZGF0ZUxhbmciLCJtYW5pZmVzdExhbmciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLFNBQVNBLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQ2pDLE1BQUksZ0JBQWdCQyxJQUFoQixDQUFxQkQsSUFBSSxDQUFDRSxLQUFMLENBQVdDLE9BQVgsQ0FBbUIsa0JBQW5CLEVBQXVDLEdBQXZDLEVBQ3pCQSxPQUR5QixDQUNqQixrRUFEaUIsRUFDbUQsR0FEbkQsRUFFekJBLE9BRnlCLENBRWpCLHNCQUZpQixFQUVPLEVBRlAsQ0FBckIsQ0FBSixFQUVzQztBQUNwQyxXQUFPLElBQVA7QUFDRCxHQUpELE1BSU87QUFDTCxXQUFPLEtBQVA7QUFDRDtBQUNGO0FBRU0sU0FBU0MsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0JDLFFBQS9CLEVBQXlDQyxNQUF6QyxFQUFpRDtBQUN0RCxNQUFJRixLQUFLLElBQUlDLFFBQWIsRUFBdUI7QUFDckIsUUFBRyxPQUFPQSxRQUFRLENBQUNELEtBQUQsQ0FBZixLQUE0QixRQUEvQixFQUF5QztBQUN2Q0UsWUFBTSxDQUFDRixLQUFELENBQU4sc0JBQTRCQSxLQUE1QjtBQUNEO0FBQ0YsR0FKRCxNQUlPO0FBQ0xFLFVBQU0sQ0FBQ0YsS0FBRCxDQUFOLHNCQUE0QkEsS0FBNUI7QUFDRDtBQUNGO0FBRU0sU0FBU0cscUJBQVQsQ0FBK0JILEtBQS9CLEVBQXNDQyxRQUF0QyxFQUFnREMsTUFBaEQsRUFBd0RFLFNBQXhELEVBQW1FO0FBQ3hFLE1BQUlKLEtBQUssSUFBSUMsUUFBYixFQUF1QjtBQUNyQixRQUFHLE9BQU9BLFFBQVEsQ0FBQ0QsS0FBRCxDQUFmLEtBQTRCLFFBQS9CLEVBQXlDO0FBQ3ZDRSxZQUFNLENBQUNGLEtBQUQsQ0FBTixzQkFBNEJBLEtBQTVCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBRyxDQUFDSSxTQUFTLENBQUNDLFFBQVYsQ0FBbUJKLFFBQVEsQ0FBQ0QsS0FBRCxDQUEzQixDQUFKLEVBQXlDO0FBQ3ZDRSxjQUFNLENBQUNGLEtBQUQsQ0FBTixzQkFBNEJBLEtBQTVCO0FBQ0Q7QUFDRjtBQUNGLEdBUkQsTUFRTztBQUNMRSxVQUFNLENBQUNGLEtBQUQsQ0FBTixzQkFBNEJBLEtBQTVCO0FBQ0Q7QUFDRjtBQUVNLFNBQVNNLGVBQVQsQ0FBeUJDLE9BQXpCLEVBQWtDO0FBQ3ZDLE1BQUlDLEtBQUssR0FBRyxFQUFaLENBRHVDLENBRXZDOztBQUNBLE1BQUksU0FBU0QsT0FBYixFQUFzQjtBQUNwQixRQUFHLE9BQU9BLE9BQU8sQ0FBQyxLQUFELENBQWQsS0FBMkIsUUFBOUIsRUFBd0M7QUFDdENDLFdBQUssQ0FBQ0MsR0FBTixHQUFZLGlEQUFaO0FBQ0Q7QUFDRixHQUpELE1BSU87QUFDTEQsU0FBSyxDQUFDQyxHQUFOLEdBQVksdUNBQVo7QUFDRCxHQVRzQyxDQVV2Qzs7O0FBQ0EsTUFBRyxXQUFXRixPQUFkLEVBQXVCO0FBQ3JCLFFBQU1HLEtBQUssR0FBR0gsT0FBTyxDQUFDLE9BQUQsQ0FBckI7O0FBQ0EsUUFBRyxPQUFPRyxLQUFQLEtBQWtCLFFBQXJCLEVBQStCO0FBQzdCRixXQUFLLENBQUNFLEtBQU4sR0FBYyxpREFBZDtBQUNELEtBRkQsTUFFTztBQUNMLFVBQUcsQ0FBQywrQkFBK0JkLElBQS9CLENBQW9DYyxLQUFwQyxDQUFKLEVBQWdEO0FBQzlDRixhQUFLLENBQUNFLEtBQU4sR0FBYyxzREFBZDtBQUNEO0FBQ0Y7QUFDRixHQVRELE1BU087QUFDTEYsU0FBSyxDQUFDRSxLQUFOLEdBQWMsd0NBQWQ7QUFDRDs7QUFDRCxTQUFPRixLQUFQO0FBQ0Q7QUFFTSxTQUFTRyxZQUFULENBQXNCWCxLQUF0QixFQUE2QkMsUUFBN0IsRUFBdUNDLE1BQXZDLEVBQStDO0FBQ3BELE1BQUdGLEtBQUssSUFBSUMsUUFBWixFQUFzQjtBQUNwQixRQUFHLE9BQU9BLFFBQVEsQ0FBQ0QsS0FBRCxDQUFmLEtBQTRCLFFBQS9CLEVBQXlDO0FBQ3ZDRSxZQUFNLENBQUNGLEtBQUQsQ0FBTixHQUFnQiw0Q0FBaEI7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFHLENBQUMsZUFBZUosSUFBZixDQUFvQmdCLFlBQXBCLENBQUosRUFBdUM7QUFDckNWLGNBQU0sQ0FBQ0YsS0FBRCxDQUFOLEdBQWdCLG9EQUFoQjtBQUNEO0FBQ0Y7QUFDRixHQVJELE1BUU87QUFDTEUsVUFBTSxDQUFDRixLQUFELENBQU4sR0FBZ0Isa0NBQWhCO0FBQ0Q7QUFDRiIsImZpbGUiOiIuL3V0aWxzL3V0aWxzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlSnNvbihqc29uKSB7XG4gIGlmICgvXltcXF0sOnt9XFxzXSokLy50ZXN0KGpzb24udmFsdWUucmVwbGFjZSgvXFxcXFtcIlxcXFxcXC9iZm5ydHVdL2csICdAJykuXG4gIHJlcGxhY2UoL1wiW15cIlxcXFxcXG5cXHJdKlwifHRydWV8ZmFsc2V8bnVsbHwtP1xcZCsoPzpcXC5cXGQqKT8oPzpbZUVdWytcXC1dP1xcZCspPy9nLCAnXScpLlxuICByZXBsYWNlKC8oPzpefDp8LCkoPzpcXHMqXFxbKSsvZywgJycpKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmcoZmllbGQsIG1hbmlmZXN0LCBlcnJvcnMpIHtcbiAgaWYgKGZpZWxkIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0W2ZpZWxkXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvcnNbZmllbGRdID0gYG1hbmlmZXN0ICR7ZmllbGR9IGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZ2A7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVycm9yc1tmaWVsZF0gPSBgbWFuaWZlc3QgJHtmaWVsZH0gZmllbGQgaXMgcmVxdWlyZWRgO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUZpZWxkV2l0aEVudW0oZmllbGQsIG1hbmlmZXN0LCBlcnJvcnMsIGVudW1WYWx1cykge1xuICBpZiAoZmllbGQgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbZmllbGRdKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yc1tmaWVsZF0gPSBgbWFuaWZlc3QgJHtmaWVsZH0gZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nYDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoIWVudW1WYWx1cy5pbmNsdWRlcyhtYW5pZmVzdFtmaWVsZF0pKSB7XG4gICAgICAgIGVycm9yc1tmaWVsZF0gPSBgbWFuaWZlc3QgJHtmaWVsZH0gZmllbGQgdmFsdWUgbm90IGNvcnJlY3RgO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlcnJvcnNbZmllbGRdID0gYG1hbmlmZXN0ICR7ZmllbGR9IGZpZWxkIGlzIHJlcXVpcmVkYDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVJY29uT2JqKGljb25PYmopIHtcbiAgbGV0IGVycm9yID0ge307XG4gIC8vIGljb25zIHNyYyB2YWxpZGF0ZVxuICBpZiAoJ3NyYycgaW4gaWNvbk9iaikge1xuICAgIGlmKHR5cGVvZihpY29uT2JqWydzcmMnXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvci5zcmMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgaWNvbiB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlcnJvci5zcmMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgaWNvbiBpcyByZXF1aXJlZCc7XG4gIH1cbiAgLy8gaWNvbnMgc2l6ZSB2YWxpZGF0ZVxuICBpZignc2l6ZXMnIGluIGljb25PYmopIHtcbiAgICBjb25zdCBzaXplcyA9IGljb25PYmpbJ3NpemVzJ107XG4gICAgaWYodHlwZW9mKHNpemVzKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yLnNpemVzID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIHNpemUgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoIS9eXFxzKlxcZCt4XFxkKyhcXHMrXFxkK3hcXGQrKSpcXHMqJC8udGVzdChzaXplcykpIHtcbiAgICAgICAgZXJyb3Iuc2l6ZXMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgc2l6ZXMgc2hvdWxkIGJlIGNvcnJlY3QgZm9ybWF0ISc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVycm9yLnNpemVzID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIHNpemUgaXMgcmVxdWlyZWQhJztcbiAgfVxuICByZXR1cm4gZXJyb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUxhbmcoZmllbGQsIG1hbmlmZXN0LCBlcnJvcnMpIHtcbiAgaWYoZmllbGQgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbZmllbGRdKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yc1tmaWVsZF0gPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmchJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoIS9eXFx3KigtXFx3KikqJC8udGVzdChtYW5pZmVzdExhbmcpKSB7XG4gICAgICAgIGVycm9yc1tmaWVsZF0gPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCB0eXBlIHNob3VsZCBiZSBjb3JyZWN0IGZvcm1hdCEnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlcnJvcnNbZmllbGRdID0gJ21hbmlmZXN0IGxhbmcgZmllbGQgaXMgcmVxdWlyZWQhJ1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/utils.js\n");

/***/ })

})
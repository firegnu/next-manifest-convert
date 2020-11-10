webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! exports provided: validateJson, validateString, validateFieldWithEnum, validateIconObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateJson\", function() { return validateJson; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateString\", function() { return validateString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateFieldWithEnum\", function() { return validateFieldWithEnum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateIconObj\", function() { return validateIconObj; });\nfunction validateJson(json) {\n  if (/^[\\],:{}\\s]*$/.test(json.value.replace(/\\\\[\"\\\\\\/bfnrtu]/g, '@').replace(/\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g, ']').replace(/(?:^|:|,)(?:\\s*\\[)+/g, ''))) {\n    return true;\n  } else {\n    return false;\n  }\n}\nfunction validateString(field, manifest, errors) {\n  if (field in manifest) {\n    if (typeof manifest[field] !== 'string') {\n      errors[field] = \"manifest \".concat(field, \" field type should be string\");\n    }\n  } else {\n    errors[field] = \"manifest \".concat(field, \" field is required\");\n  }\n}\nfunction validateFieldWithEnum(field, manifest, errors, enumValus) {\n  if (field in manifest) {\n    if (typeof manifest[field] !== 'string') {\n      errors[field] = \"manifest \".concat(field, \" field type should be string\");\n    } else {\n      if (!enumValus.includes(manifest[field])) {\n        errors[field] = \"manifest \".concat(field, \" field value not correct\");\n      }\n    }\n  } else {\n    errors[field] = \"manifest \".concat(field, \" field is required\");\n  }\n}\nfunction validateIconObj(iconObj) {\n  var error = {}; // icons src validate\n\n  if ('src' in iconObj) {\n    if (typeof iconObj['src'] !== 'string') {\n      error.src = 'manifest icons field icon type should be string';\n    }\n  } else {\n    error.src = 'manifest icons field icon is required';\n  } // icons size validate\n\n\n  if ('sizes' in iconObj) {\n    var sizes = iconObj['sizes'];\n\n    if (typeof sizes !== 'string') {\n      error.sizes = 'manifest icons field size type should be string';\n    } else {\n      if (!/^\\s*\\d+x\\d+(\\s+\\d+x\\d+)*\\s*$/.test(sizes)) {\n        error.sizes = 'manifest icons field sizes should be correct format!';\n      }\n    }\n  } else {\n    error.sizes = 'manifest icons field size is required!';\n  }\n\n  return error;\n}\n\nvar validateLang = function validateLang(manifest, requiredErrors) {\n  if ('lang' in manifest) {\n    var manifestLang = manifest['lang'];\n\n    if (typeof manifestLang !== 'string') {\n      requiredErrors.lang = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(manifestLang)) {\n        requiredErrors.lang = 'manifest lang field type should be correct format!';\n      }\n    }\n  } else {\n    requiredErrors.lang = 'manifest lang field is required!';\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXRpbHMuanM/OTBjMCJdLCJuYW1lcyI6WyJ2YWxpZGF0ZUpzb24iLCJqc29uIiwidGVzdCIsInZhbHVlIiwicmVwbGFjZSIsInZhbGlkYXRlU3RyaW5nIiwiZmllbGQiLCJtYW5pZmVzdCIsImVycm9ycyIsInZhbGlkYXRlRmllbGRXaXRoRW51bSIsImVudW1WYWx1cyIsImluY2x1ZGVzIiwidmFsaWRhdGVJY29uT2JqIiwiaWNvbk9iaiIsImVycm9yIiwic3JjIiwic2l6ZXMiLCJ2YWxpZGF0ZUxhbmciLCJyZXF1aXJlZEVycm9ycyIsIm1hbmlmZXN0TGFuZyIsImxhbmciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxTQUFTQSxZQUFULENBQXNCQyxJQUF0QixFQUE0QjtBQUNqQyxNQUFJLGdCQUFnQkMsSUFBaEIsQ0FBcUJELElBQUksQ0FBQ0UsS0FBTCxDQUFXQyxPQUFYLENBQW1CLGtCQUFuQixFQUF1QyxHQUF2QyxFQUN6QkEsT0FEeUIsQ0FDakIsa0VBRGlCLEVBQ21ELEdBRG5ELEVBRXpCQSxPQUZ5QixDQUVqQixzQkFGaUIsRUFFTyxFQUZQLENBQXJCLENBQUosRUFFc0M7QUFDcEMsV0FBTyxJQUFQO0FBQ0QsR0FKRCxNQUlPO0FBQ0wsV0FBTyxLQUFQO0FBQ0Q7QUFDRjtBQUVNLFNBQVNDLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCQyxRQUEvQixFQUF5Q0MsTUFBekMsRUFBaUQ7QUFDdEQsTUFBSUYsS0FBSyxJQUFJQyxRQUFiLEVBQXVCO0FBQ3JCLFFBQUcsT0FBT0EsUUFBUSxDQUFDRCxLQUFELENBQWYsS0FBNEIsUUFBL0IsRUFBeUM7QUFDdkNFLFlBQU0sQ0FBQ0YsS0FBRCxDQUFOLHNCQUE0QkEsS0FBNUI7QUFDRDtBQUNGLEdBSkQsTUFJTztBQUNMRSxVQUFNLENBQUNGLEtBQUQsQ0FBTixzQkFBNEJBLEtBQTVCO0FBQ0Q7QUFDRjtBQUVNLFNBQVNHLHFCQUFULENBQStCSCxLQUEvQixFQUFzQ0MsUUFBdEMsRUFBZ0RDLE1BQWhELEVBQXdERSxTQUF4RCxFQUFtRTtBQUN4RSxNQUFJSixLQUFLLElBQUlDLFFBQWIsRUFBdUI7QUFDckIsUUFBRyxPQUFPQSxRQUFRLENBQUNELEtBQUQsQ0FBZixLQUE0QixRQUEvQixFQUF5QztBQUN2Q0UsWUFBTSxDQUFDRixLQUFELENBQU4sc0JBQTRCQSxLQUE1QjtBQUNELEtBRkQsTUFFTztBQUNMLFVBQUcsQ0FBQ0ksU0FBUyxDQUFDQyxRQUFWLENBQW1CSixRQUFRLENBQUNELEtBQUQsQ0FBM0IsQ0FBSixFQUF5QztBQUN2Q0UsY0FBTSxDQUFDRixLQUFELENBQU4sc0JBQTRCQSxLQUE1QjtBQUNEO0FBQ0Y7QUFDRixHQVJELE1BUU87QUFDTEUsVUFBTSxDQUFDRixLQUFELENBQU4sc0JBQTRCQSxLQUE1QjtBQUNEO0FBQ0Y7QUFFTSxTQUFTTSxlQUFULENBQXlCQyxPQUF6QixFQUFrQztBQUN2QyxNQUFJQyxLQUFLLEdBQUcsRUFBWixDQUR1QyxDQUV2Qzs7QUFDQSxNQUFJLFNBQVNELE9BQWIsRUFBc0I7QUFDcEIsUUFBRyxPQUFPQSxPQUFPLENBQUMsS0FBRCxDQUFkLEtBQTJCLFFBQTlCLEVBQXdDO0FBQ3RDQyxXQUFLLENBQUNDLEdBQU4sR0FBWSxpREFBWjtBQUNEO0FBQ0YsR0FKRCxNQUlPO0FBQ0xELFNBQUssQ0FBQ0MsR0FBTixHQUFZLHVDQUFaO0FBQ0QsR0FUc0MsQ0FVdkM7OztBQUNBLE1BQUcsV0FBV0YsT0FBZCxFQUF1QjtBQUNyQixRQUFNRyxLQUFLLEdBQUdILE9BQU8sQ0FBQyxPQUFELENBQXJCOztBQUNBLFFBQUcsT0FBT0csS0FBUCxLQUFrQixRQUFyQixFQUErQjtBQUM3QkYsV0FBSyxDQUFDRSxLQUFOLEdBQWMsaURBQWQ7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFHLENBQUMsK0JBQStCZCxJQUEvQixDQUFvQ2MsS0FBcEMsQ0FBSixFQUFnRDtBQUM5Q0YsYUFBSyxDQUFDRSxLQUFOLEdBQWMsc0RBQWQ7QUFDRDtBQUNGO0FBQ0YsR0FURCxNQVNPO0FBQ0xGLFNBQUssQ0FBQ0UsS0FBTixHQUFjLHdDQUFkO0FBQ0Q7O0FBQ0QsU0FBT0YsS0FBUDtBQUNEOztBQUVELElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNWLFFBQUQsRUFBV1csY0FBWCxFQUE4QjtBQUNqRCxNQUFHLFVBQVVYLFFBQWIsRUFBdUI7QUFDckIsUUFBTVksWUFBWSxHQUFHWixRQUFRLENBQUMsTUFBRCxDQUE3Qjs7QUFDQSxRQUFHLE9BQU9ZLFlBQVAsS0FBeUIsUUFBNUIsRUFBc0M7QUFDcENELG9CQUFjLENBQUNFLElBQWYsR0FBc0IsNENBQXRCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBRyxDQUFDLGVBQWVsQixJQUFmLENBQW9CaUIsWUFBcEIsQ0FBSixFQUF1QztBQUNyQ0Qsc0JBQWMsQ0FBQ0UsSUFBZixHQUFzQixvREFBdEI7QUFDRDtBQUNGO0FBQ0YsR0FURCxNQVNPO0FBQ0xGLGtCQUFjLENBQUNFLElBQWYsR0FBc0Isa0NBQXRCO0FBQ0Q7QUFDRixDQWJEIiwiZmlsZSI6Ii4vdXRpbHMvdXRpbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVKc29uKGpzb24pIHtcbiAgaWYgKC9eW1xcXSw6e31cXHNdKiQvLnRlc3QoanNvbi52YWx1ZS5yZXBsYWNlKC9cXFxcW1wiXFxcXFxcL2JmbnJ0dV0vZywgJ0AnKS5cbiAgcmVwbGFjZSgvXCJbXlwiXFxcXFxcblxccl0qXCJ8dHJ1ZXxmYWxzZXxudWxsfC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bK1xcLV0/XFxkKyk/L2csICddJykuXG4gIHJlcGxhY2UoLyg/Ol58OnwsKSg/OlxccypcXFspKy9nLCAnJykpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVN0cmluZyhmaWVsZCwgbWFuaWZlc3QsIGVycm9ycykge1xuICBpZiAoZmllbGQgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbZmllbGRdKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yc1tmaWVsZF0gPSBgbWFuaWZlc3QgJHtmaWVsZH0gZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nYDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZXJyb3JzW2ZpZWxkXSA9IGBtYW5pZmVzdCAke2ZpZWxkfSBmaWVsZCBpcyByZXF1aXJlZGA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRmllbGRXaXRoRW51bShmaWVsZCwgbWFuaWZlc3QsIGVycm9ycywgZW51bVZhbHVzKSB7XG4gIGlmIChmaWVsZCBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFtmaWVsZF0pICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3JzW2ZpZWxkXSA9IGBtYW5pZmVzdCAke2ZpZWxkfSBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmdgO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZighZW51bVZhbHVzLmluY2x1ZGVzKG1hbmlmZXN0W2ZpZWxkXSkpIHtcbiAgICAgICAgZXJyb3JzW2ZpZWxkXSA9IGBtYW5pZmVzdCAke2ZpZWxkfSBmaWVsZCB2YWx1ZSBub3QgY29ycmVjdGA7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVycm9yc1tmaWVsZF0gPSBgbWFuaWZlc3QgJHtmaWVsZH0gZmllbGQgaXMgcmVxdWlyZWRgO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUljb25PYmooaWNvbk9iaikge1xuICBsZXQgZXJyb3IgPSB7fTtcbiAgLy8gaWNvbnMgc3JjIHZhbGlkYXRlXG4gIGlmICgnc3JjJyBpbiBpY29uT2JqKSB7XG4gICAgaWYodHlwZW9mKGljb25PYmpbJ3NyYyddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yLnNyYyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBpY29uIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVycm9yLnNyYyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBpY29uIGlzIHJlcXVpcmVkJztcbiAgfVxuICAvLyBpY29ucyBzaXplIHZhbGlkYXRlXG4gIGlmKCdzaXplcycgaW4gaWNvbk9iaikge1xuICAgIGNvbnN0IHNpemVzID0gaWNvbk9ialsnc2l6ZXMnXTtcbiAgICBpZih0eXBlb2Yoc2l6ZXMpICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3Iuc2l6ZXMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgc2l6ZSB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZighL15cXHMqXFxkK3hcXGQrKFxccytcXGQreFxcZCspKlxccyokLy50ZXN0KHNpemVzKSkge1xuICAgICAgICBlcnJvci5zaXplcyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaXplcyBzaG91bGQgYmUgY29ycmVjdCBmb3JtYXQhJztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZXJyb3Iuc2l6ZXMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgc2l6ZSBpcyByZXF1aXJlZCEnO1xuICB9XG4gIHJldHVybiBlcnJvcjtcbn1cblxuY29uc3QgdmFsaWRhdGVMYW5nID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZignbGFuZycgaW4gbWFuaWZlc3QpIHtcbiAgICBjb25zdCBtYW5pZmVzdExhbmcgPSBtYW5pZmVzdFsnbGFuZyddO1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdExhbmcpICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMubGFuZyA9ICdtYW5pZmVzdCBsYW5nIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyEnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZighL15cXHcqKC1cXHcqKSokLy50ZXN0KG1hbmlmZXN0TGFuZykpIHtcbiAgICAgICAgcmVxdWlyZWRFcnJvcnMubGFuZyA9ICdtYW5pZmVzdCBsYW5nIGZpZWxkIHR5cGUgc2hvdWxkIGJlIGNvcnJlY3QgZm9ybWF0ISc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCBpcyByZXF1aXJlZCEnXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/utils.js\n");

/***/ })

})
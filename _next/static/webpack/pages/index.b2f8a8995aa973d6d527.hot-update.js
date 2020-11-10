webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! exports provided: validateJson, validateString, validateFieldWithEnum, validateIconObj, validateStringWithRegex, validateCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateJson\", function() { return validateJson; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateString\", function() { return validateString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateFieldWithEnum\", function() { return validateFieldWithEnum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateIconObj\", function() { return validateIconObj; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateStringWithRegex\", function() { return validateStringWithRegex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateCategories\", function() { return validateCategories; });\nfunction validateJson(json) {\n  if (/^[\\],:{}\\s]*$/.test(json.value.replace(/\\\\[\"\\\\\\/bfnrtu]/g, '@').replace(/\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g, ']').replace(/(?:^|:|,)(?:\\s*\\[)+/g, ''))) {\n    return true;\n  } else {\n    return false;\n  }\n}\nfunction validateString(field, manifest, errors) {\n  if (field in manifest) {\n    if (typeof manifest[field] !== 'string') {\n      errors[field] = \"manifest \".concat(field, \" field type should be string\");\n    }\n  } else {\n    errors[field] = \"manifest \".concat(field, \" field is required\");\n  }\n}\nfunction validateFieldWithEnum(field, manifest, errors, enumValus) {\n  if (field in manifest) {\n    if (typeof manifest[field] !== 'string') {\n      errors[field] = \"manifest \".concat(field, \" field type should be string\");\n    } else {\n      if (!enumValus.includes(manifest[field])) {\n        errors[field] = \"manifest \".concat(field, \" field value not correct\");\n      }\n    }\n  } else {\n    errors[field] = \"manifest \".concat(field, \" field is required\");\n  }\n}\nfunction validateIconObj(iconObj) {\n  var error = {}; // icons src validate\n\n  if ('src' in iconObj) {\n    if (typeof iconObj['src'] !== 'string') {\n      error.src = 'manifest icons field icon type should be string';\n    }\n  } else {\n    error.src = 'manifest icons field icon is required';\n  } // icons size validate\n\n\n  if ('sizes' in iconObj) {\n    var sizes = iconObj['sizes'];\n\n    if (typeof sizes !== 'string') {\n      error.sizes = 'manifest icons field size type should be string';\n    } else {\n      if (!/^\\s*\\d+x\\d+(\\s+\\d+x\\d+)*\\s*$/.test(sizes)) {\n        error.sizes = 'manifest icons field sizes should be correct format!';\n      }\n    }\n  } else {\n    error.sizes = 'manifest icons field size is required!';\n  }\n\n  return error;\n}\nfunction validateStringWithRegex(field, manifest, errors) {\n  if (field in manifest) {\n    var fieldValue = manifest[field];\n\n    if (typeof fieldValue !== 'string') {\n      errors[field] = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(fieldValue)) {\n        errors[field] = 'manifest lang field type should be correct format!';\n      }\n    }\n  } else {\n    errors[field] = 'manifest lang field is required!';\n  }\n}\nfunction validateCategories(field, manifest, optionsErrors) {\n  if (field in manifest) {\n    var categories = manifest[field];\n\n    if (!Array.isArray(categories)) {\n      optionsErrors.categories = 'manifest categories field should be Array';\n    } else {\n      var categoriesErrors = [];\n      categories.forEach(function (category) {\n        if (typeof category !== 'string') {\n          categoriesErrors.push({\n            category: 'manifest categories field category should be String'\n          });\n        }\n      });\n\n      if (categoriesErrors.length > 0) {\n        optionsErrors.categories = categoriesErrors;\n      }\n    }\n  } else {\n    optionsErrors.categories = 'manifest categories field is null';\n  }\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXRpbHMuanM/OTBjMCJdLCJuYW1lcyI6WyJ2YWxpZGF0ZUpzb24iLCJqc29uIiwidGVzdCIsInZhbHVlIiwicmVwbGFjZSIsInZhbGlkYXRlU3RyaW5nIiwiZmllbGQiLCJtYW5pZmVzdCIsImVycm9ycyIsInZhbGlkYXRlRmllbGRXaXRoRW51bSIsImVudW1WYWx1cyIsImluY2x1ZGVzIiwidmFsaWRhdGVJY29uT2JqIiwiaWNvbk9iaiIsImVycm9yIiwic3JjIiwic2l6ZXMiLCJ2YWxpZGF0ZVN0cmluZ1dpdGhSZWdleCIsImZpZWxkVmFsdWUiLCJ2YWxpZGF0ZUNhdGVnb3JpZXMiLCJvcHRpb25zRXJyb3JzIiwiY2F0ZWdvcmllcyIsIkFycmF5IiwiaXNBcnJheSIsImNhdGVnb3JpZXNFcnJvcnMiLCJmb3JFYWNoIiwiY2F0ZWdvcnkiLCJwdXNoIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLFNBQVNBLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQ2pDLE1BQUksZ0JBQWdCQyxJQUFoQixDQUFxQkQsSUFBSSxDQUFDRSxLQUFMLENBQVdDLE9BQVgsQ0FBbUIsa0JBQW5CLEVBQXVDLEdBQXZDLEVBQ3pCQSxPQUR5QixDQUNqQixrRUFEaUIsRUFDbUQsR0FEbkQsRUFFekJBLE9BRnlCLENBRWpCLHNCQUZpQixFQUVPLEVBRlAsQ0FBckIsQ0FBSixFQUVzQztBQUNwQyxXQUFPLElBQVA7QUFDRCxHQUpELE1BSU87QUFDTCxXQUFPLEtBQVA7QUFDRDtBQUNGO0FBRU0sU0FBU0MsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0JDLFFBQS9CLEVBQXlDQyxNQUF6QyxFQUFpRDtBQUN0RCxNQUFJRixLQUFLLElBQUlDLFFBQWIsRUFBdUI7QUFDckIsUUFBRyxPQUFPQSxRQUFRLENBQUNELEtBQUQsQ0FBZixLQUE0QixRQUEvQixFQUF5QztBQUN2Q0UsWUFB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QUFVLENBQUNJLE9BQVgsQ0FBbUIsVUFBQ0MsUUFBRCxFQUFjO0FBQy9CLFlBQUcsT0FBT0EsUUFBUCxLQUFxQixRQUF4QixFQUFrQztBQUNoQ0YsMEJBQWdCLENBQUNHLElBQWpCLENBQXNCO0FBQ3BCRCxvQkFBUSxFQUFFO0FBRFUsV0FBdEI7QUFHRDtBQUNGLE9BTkQ7O0FBT0EsVUFBR0YsZ0JBQWdCLENBQUNJLE1BQWpCLEdBQTBCLENBQTdCLEVBQWdDO0FBQzlCUixxQkFBYSxDQUFDQyxVQUFkLEdBQTJCRyxnQkFBM0I7QUFDRDtBQUNGO0FBQ0YsR0FqQkQsTUFpQk87QUFDTEosaUJBQWEsQ0FBQ0MsVUFBZCxHQUEyQixtQ0FBM0I7QUFDRDtBQUNGIiwiZmlsZSI6Ii4vdXRpbHMvdXRpbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVKc29uKGpzb24pIHtcbiAgaWYgKC9eW1xcXSw6e31cXHNdKiQvLnRlc3QoanNvbi52YWx1ZS5yZXBsYWNlKC9cXFxcW1wiXFxcXFxcL2JmbnJ0dV0vZywgJ0AnKS5cbiAgcmVwbGFjZSgvXCJbXlwiXFxcXFxcblxccl0qXCJ8dHJ1ZXxmYWxzZXxudWxsfC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bK1xcLV0/XFxkKyk/L2csICddJykuXG4gIHJlcGxhY2UoLyg/Ol58OnwsKSg/OlxccypcXFspKy9nLCAnJykpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVN0cmluZyhmaWVsZCwgbWFuaWZlc3QsIGVycm9ycykge1xuICBpZiAoZmllbGQgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbZmllbGRdKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yc1tmaWVsZF0gPSBgbWFuaWZlc3QgJHtmaWVsZH0gZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nYDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZXJyb3JzW2ZpZWxkXSA9IGBtYW5pZmVzdCAke2ZpZWxkfSBmaWVsZCBpcyByZXF1aXJlZGA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRmllbGRXaXRoRW51bShmaWVsZCwgbWFuaWZlc3QsIGVycm9ycywgZW51bVZhbHVzKSB7XG4gIGlmIChmaWVsZCBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFtmaWVsZF0pICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3JzW2ZpZWxkXSA9IGBtYW5pZmVzdCAke2ZpZWxkfSBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmdgO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZighZW51bVZhbHVzLmluY2x1ZGVzKG1hbmlmZXN0W2ZpZWxkXSkpIHtcbiAgICAgICAgZXJyb3JzW2ZpZWxkXSA9IGBtYW5pZmVzdCAke2ZpZWxkfSBmaWVsZCB2YWx1ZSBub3QgY29ycmVjdGA7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVycm9yc1tmaWVsZF0gPSBgbWFuaWZlc3QgJHtmaWVsZH0gZmllbGQgaXMgcmVxdWlyZWRgO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUljb25PYmooaWNvbk9iaikge1xuICBsZXQgZXJyb3IgPSB7fTtcbiAgLy8gaWNvbnMgc3JjIHZhbGlkYXRlXG4gIGlmICgnc3JjJyBpbiBpY29uT2JqKSB7XG4gICAgaWYodHlwZW9mKGljb25PYmpbJ3NyYyddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yLnNyYyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBpY29uIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVycm9yLnNyYyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBpY29uIGlzIHJlcXVpcmVkJztcbiAgfVxuICAvLyBpY29ucyBzaXplIHZhbGlkYXRlXG4gIGlmKCdzaXplcycgaW4gaWNvbk9iaikge1xuICAgIGNvbnN0IHNpemVzID0gaWNvbk9ialsnc2l6ZXMnXTtcbiAgICBpZih0eXBlb2Yoc2l6ZXMpICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3Iuc2l6ZXMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgc2l6ZSB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZighL15cXHMqXFxkK3hcXGQrKFxccytcXGQreFxcZCspKlxccyokLy50ZXN0KHNpemVzKSkge1xuICAgICAgICBlcnJvci5zaXplcyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaXplcyBzaG91bGQgYmUgY29ycmVjdCBmb3JtYXQhJztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZXJyb3Iuc2l6ZXMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgc2l6ZSBpcyByZXF1aXJlZCEnO1xuICB9XG4gIHJldHVybiBlcnJvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlU3RyaW5nV2l0aFJlZ2V4KGZpZWxkLCBtYW5pZmVzdCwgZXJyb3JzKSB7XG4gIGlmKGZpZWxkIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgZmllbGRWYWx1ZSA9IG1hbmlmZXN0W2ZpZWxkXTtcbiAgICBpZih0eXBlb2YoZmllbGRWYWx1ZSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvcnNbZmllbGRdID0gJ21hbmlmZXN0IGxhbmcgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nISc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKCEvXlxcdyooLVxcdyopKiQvLnRlc3QoZmllbGRWYWx1ZSkpIHtcbiAgICAgICAgZXJyb3JzW2ZpZWxkXSA9ICdtYW5pZmVzdCBsYW5nIGZpZWxkIHR5cGUgc2hvdWxkIGJlIGNvcnJlY3QgZm9ybWF0ISc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVycm9yc1tmaWVsZF0gPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCBpcyByZXF1aXJlZCEnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ2F0ZWdvcmllcyhmaWVsZCwgbWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpIHtcbiAgaWYoZmllbGQgaW4gbWFuaWZlc3QpIHtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gbWFuaWZlc3RbZmllbGRdO1xuICAgIGlmKCFBcnJheS5pc0FycmF5KGNhdGVnb3JpZXMpKSB7XG4gICAgICBvcHRpb25zRXJyb3JzLmNhdGVnb3JpZXMgPSAnbWFuaWZlc3QgY2F0ZWdvcmllcyBmaWVsZCBzaG91bGQgYmUgQXJyYXknO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY2F0ZWdvcmllc0Vycm9ycyA9IFtdO1xuICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICBpZih0eXBlb2YoY2F0ZWdvcnkpICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNhdGVnb3JpZXNFcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ21hbmlmZXN0IGNhdGVnb3JpZXMgZmllbGQgY2F0ZWdvcnkgc2hvdWxkIGJlIFN0cmluZydcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmKGNhdGVnb3JpZXNFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBvcHRpb25zRXJyb3JzLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzRXJyb3JzO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zRXJyb3JzLmNhdGVnb3JpZXMgPSAnbWFuaWZlc3QgY2F0ZWdvcmllcyBmaWVsZCBpcyBudWxsJztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/utils.js\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\nvar validateString = function validateString(field, manifest, errors) {\n  if (field in manifest) {\n    if (typeof manifest[field] !== 'string') {\n      errors[field] = \"manifest \".concat(field, \" field type should be string\");\n    }\n  } else {\n    errors[field] = \"manifest \".concat(field, \" field is required\");\n  }\n}; // validate required fields\n\n\nvar validateName = function validateName(manifest, requiredErrors) {\n  validateString('name', manifest, requiredErrors);\n};\n\nvar validateDescription = function validateDescription(manifest, requiredErrors) {\n  validateString('description', manifest, requiredErrors);\n};\n\nvar validateLang = function validateLang(manifest, requiredErrors) {\n  if ('lang' in manifest) {\n    var manifestLang = manifest['lang'];\n\n    if (typeof manifestLang !== 'string') {\n      requiredErrors.lang = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(manifestLang)) {\n        requiredErrors.lang = 'manifest lang field type should be correct format!';\n      }\n    }\n  } else {\n    requiredErrors.lang = 'manifest lang field is required!';\n  }\n};\n\nvar validateThemeColor = function validateThemeColor(manifest, requiredErrors) {\n  // if ('theme_color' in manifest) {\n  //   if(typeof(manifest['theme_color']) !== 'string') {\n  //     requiredErrors.theme_color = 'manifest theme_color field type should be string';\n  //   }\n  // } else {\n  //   requiredErrors.theme_color = 'manifest theme_color field is required';\n  // }\n  validateString('theme_color', manifest, requiredErrors);\n};\n\nvar validateOritation = function validateOritation(manifest, requiredErrors) {\n  var ENUM_ORIENTATION = ['any', 'natural', 'landscape', 'landscape-primary', 'landscape-secondary', 'portrait', 'portrait-primary', 'portrait-secondary'];\n\n  if ('orientation' in manifest) {\n    if (typeof manifest['orientation'] !== 'string') {\n      requiredErrors.orientation = 'manifest orientation field type should be string';\n    } else {\n      var orientation = manifest['orientation'];\n\n      if (!ENUM_ORIENTATION.includes(orientation)) {\n        requiredErrors.orientation = 'manifest orientation field value not correct';\n      }\n    }\n  } else {\n    requiredErrors.orientation = 'manifest orientation field is required';\n  }\n};\n\nvar validateStartUrl = function validateStartUrl(manifest, requiredErrors) {\n  if ('start_url' in manifest) {\n    if (typeof manifest['start_url'] !== 'string') {\n      requiredErrors.start_url = 'manifest start_url field type should be string';\n    }\n  } else {\n    requiredErrors.start_url = 'manifest start_url field is required';\n  }\n};\n\nvar validateIconObj = function validateIconObj(iconObj) {\n  var error = {}; // icons src validate\n\n  if ('src' in iconObj) {\n    if (typeof iconObj['src'] !== 'string') {\n      error.src = 'manifest icons field icon type should be string';\n    }\n  } else {\n    error.src = 'manifest icons field icon is required';\n  } // icons size validate\n\n\n  if ('sizes' in iconObj) {\n    var sizes = iconObj['sizes'];\n\n    if (typeof sizes !== 'string') {\n      error.sizes = 'manifest icons field size type should be string';\n    } else {\n      if (!/^\\s*\\d+x\\d+(\\s+\\d+x\\d+)*\\s*$/.test(sizes)) {\n        error.sizes = 'manifest icons field sizes should be correct format!';\n      }\n    }\n  } else {\n    error.sizes = 'manifest icons field size is required!';\n  }\n\n  return error;\n};\n\nvar validateIcons = function validateIcons(manifest, requiredErrors) {\n  if ('icons' in manifest) {\n    var icons = manifest['icons'];\n\n    if (!Array.isArray(icons)) {\n      requiredErrors.icons = 'manifest icons field should be Array';\n    } else {\n      var iconErrors = [];\n      icons.forEach(function (icon) {\n        var error = validateIconObj(icon);\n\n        if (Object.keys(error).length > 0) {\n          iconErrors.push(error);\n        }\n      });\n\n      if (iconErrors.length > 0) {\n        requiredErrors.icons = iconErrors;\n      }\n    }\n  } else {\n    requiredErrors.icons = 'manifest icons field is required';\n  }\n};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  var requiredErrors = {};\n  validateName(manifest, requiredErrors);\n  validateDescription(manifest, requiredErrors);\n  validateLang(manifest, requiredErrors);\n  validateThemeColor(manifest, requiredErrors);\n  validateOritation(manifest, requiredErrors);\n  validateStartUrl(manifest, requiredErrors);\n  validateIcons(manifest, requiredErrors);\n  return requiredErrors;\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest, optionsErrors) {\n  var ENUM_DIR = ['rtl', 'ltr', 'auto'];\n\n  if ('dir' in manifest) {\n    if (typeof manifest['dir'] !== 'string') {\n      optionsErrors.dir = 'manifest dir field type should be string';\n    } else {\n      var dir = manifest['dir'];\n\n      if (!ENUM_DIR.includes(dir)) {\n        optionsErrors.dir = 'manifest dir field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.dir = 'manifest dir field is null';\n  }\n};\n\nvar validateScope = function validateScope(manifest, optionsErrors) {\n  if ('scope' in manifest) {\n    if (typeof manifest['scope'] !== 'string') {\n      optionsErrors.scope = 'manifest scope field type should be string';\n    }\n  } else {\n    optionsErrors.scope = 'manifest scope field is null';\n  }\n};\n\nvar validateDisplay = function validateDisplay(manifest, optionsErrors) {\n  var ENUM_DISPLAY = ['fullscreen', 'standalone', 'minimal-ui', 'browser'];\n\n  if ('display' in manifest) {\n    if (typeof manifest['display'] !== 'string') {\n      optionsErrors.display = 'manifest display field type should be string';\n    } else {\n      var display = manifest['display'];\n\n      if (!ENUM_DISPLAY.includes(display)) {\n        optionsErrors.display = 'manifest display field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.display = 'manifest display field is null';\n  }\n};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest, optionsErrors) {\n  if ('background_color' in manifest) {\n    if (typeof manifest['background_color'] !== 'string') {\n      optionsErrors.background_color = 'manifest background_color field type should be string';\n    }\n  } else {\n    optionsErrors.background_color = 'manifest background_color field is null';\n  }\n};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest, optionsErrors) {// todo: related_applications fields\n};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest, optionsErrors) {// todo: prefer_related_applications fields\n};\n\nvar validateCategories = function validateCategories(manifest, optionsErrors) {\n  if ('categories' in manifest) {\n    var categories = manifest['categories'];\n\n    if (!Array.isArray(categories)) {\n      optionsErrors.categories = 'manifest categories field should be Array';\n    } else {\n      var categoriesErrors = [];\n      categories.forEach(function (category) {\n        if (typeof category !== 'string') {\n          categoriesErrors.push({\n            category: 'manifest categories field category should be String'\n          });\n        }\n      });\n\n      if (categoriesErrors.length > 0) {\n        optionsErrors.categories = categoriesErrors;\n      }\n    }\n  } else {\n    optionsErrors.categories = 'manifest categories field is null';\n  }\n};\n\nvar validateScreenshots = function validateScreenshots(manifest, optionsErrors) {// todo: screenShots fields\n};\n\nvar validateShortcuts = function validateShortcuts(manifest, optionsErrors) {// todo: shortCuts fields\n};\n\nvar validateOptionFields = function validateOptionFields(manifest) {\n  var optionsErrors = {};\n  validateDir(manifest, optionsErrors);\n  validateScope(manifest, optionsErrors);\n  validateDisplay(manifest, optionsErrors);\n  validateBackgroundColor(manifest, optionsErrors);\n  validateRelatedApplications(manifest, optionsErrors);\n  validatePreferRelatedApplications(manifest, optionsErrors);\n  validateCategories(manifest, optionsErrors);\n  validateScreenshots(manifest, optionsErrors);\n  validateShortcuts(manifest, optionsErrors);\n  return optionsErrors;\n};\n\nfunction validate(oldManifest) {\n  var requiredFieldsError = validateRequiredFields(oldManifest);\n  var optionFieldsError = validateOptionFields(oldManifest);\n  return {\n    'RequiredFields': Object.keys(requiredFieldsError).length > 0 ? requiredFieldsError : 'Required fields have no error!!!',\n    'OptionalFields': Object.keys(optionFieldsError).length > 0 ? optionFieldsError : 'Optional fields have no error!!!'\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZVN0cmluZyIsImZpZWxkIiwibWFuaWZlc3QiLCJlcnJvcnMiLCJ2YWxpZGF0ZU5hbWUiLCJyZXF1aXJlZEVycm9ycyIsInZhbGlkYXRlRGVzY3JpcHRpb24iLCJ2YWxpZGF0ZUxhbmciLCJtYW5pZmVzdExhbmciLCJsYW5nIiwidGVzdCIsInZhbGlkYXRlVGhlbWVDb2xvciIsInZhbGlkYXRlT3JpdGF0aW9uIiwiRU5VTV9PUklFTlRBVElPTiIsIm9yaWVudGF0aW9uIiwiaW5jbHVkZXMiLCJ2YWxpZGF0ZVN0YXJ0VXJsIiwic3RhcnRfdXJsIiwidmFsaWRhdGVJY29uT2JqIiwiaWNvbk9iaiIsImVycm9yIiwic3JjIiwic2l6ZXMiLCJ2YWxpZGF0ZUljb25zIiwiaWNvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJpY29uRXJyb3JzIiwiZm9yRWFjaCIsImljb24iLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicHVzaCIsInZhbGlkYXRlUmVxdWlyZWRGaWVsZHMiLCJ2YWxpZGF0ZURpciIsIm9wdGlvbnNFcnJvcnMiLCJFTlVNX0RJUiIsImRpciIsInZhbGlkYXRlU2NvcGUiLCJzY29wZSIsInZhbGlkYXRlRGlzcGxheSIsIkVOVU1fRElTUExBWSIsImRpc3BsYXkiLCJ2YWxpZGF0ZUJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRfY29sb3IiLCJ2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMiLCJ2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMiLCJ2YWxpZGF0ZUNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcmllc0Vycm9ycyIsImNhdGVnb3J5IiwidmFsaWRhdGVTY3JlZW5zaG90cyIsInZhbGlkYXRlU2hvcnRjdXRzIiwidmFsaWRhdGVPcHRpb25GaWVsZHMiLCJ2YWxpZGF0ZSIsIm9sZE1hbmlmZXN0IiwicmVxdWly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LGFBQVcsQ0FBQ2pDLFFBQUQsRUFBV2tDLGFBQVgsQ0FBWDtBQUNBRyxlQUFhLENBQUNyQyxRQUFELEVBQVdrQyxhQUFYLENBQWI7QUFDQUssaUJBQWUsQ0FBQ3ZDLFFBQUQsRUFBV2tDLGFBQVgsQ0FBZjtBQUNBUSx5QkFBdUIsQ0FBQzFDLFFBQUQsRUFBV2tDLGFBQVgsQ0FBdkI7QUFDQVUsNkJBQTJCLENBQUM1QyxRQUFELEVBQVdrQyxhQUFYLENBQTNCO0FBQ0FXLG1DQUFpQyxDQUFDN0MsUUFBRCxFQUFXa0MsYUFBWCxDQUFqQztBQUNBWSxvQkFBa0IsQ0FBQzlDLFFBQUQsRUFBV2tDLGFBQVgsQ0FBbEI7QUFDQWdCLHFCQUFtQixDQUFDbEQsUUFBRCxFQUFXa0MsYUFBWCxDQUFuQjtBQUNBaUIsbUJBQWlCLENBQUNuRCxRQUFELEVBQVdrQyxhQUFYLENBQWpCO0FBQ0EsU0FBT0EsYUFBUDtBQUNELENBWkQ7O0FBY2UsU0FBU21CLFFBQVQsQ0FBa0JDLFdBQWxCLEVBQStCO0FBQzVDLE1BQU1DLG1CQUFtQixHQUFHdkIsc0JBQXNCLENBQUNzQixXQUFELENBQWxEO0FBQ0EsTUFBTUUsaUJBQWlCLEdBQUdKLG9CQUFvQixDQUFDRSxXQUFELENBQTlDO0FBQ0EsU0FBTztBQUNMLHNCQUFrQjFCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZMEIsbUJBQVosRUFBaUN6QixNQUFqQyxHQUEwQyxDQUExQyxHQUE4Q3lCLG1CQUE5QyxHQUFvRSxrQ0FEakY7QUFFTCxzQkFBa0IzQixNQUFNLENBQUNDLElBQVAsQ0FBWTJCLGlCQUFaLEVBQStCMUIsTUFBL0IsR0FBd0MsQ0FBeEMsR0FBNEMwQixpQkFBNUMsR0FBZ0U7QUFGN0UsR0FBUDtBQUlEIiwiZmlsZSI6Ii4vdXRpbHMvdmFsaWRhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIFJlcXVpcmVkIGZpZWxkczpcbiAgIG5hbWUgb3Igc2hvcnRfbmFtZTogc3RyaW5nXG4gICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICBsYW5nOiBzdHJpbmdcbiAgIHRoZW1lX2NvbG9yOiBzdHJpbmdcbiAgIG9yaWVudGF0aW9uOiBzdHJpbmdcbiAgIHN0YXJ0X3VybDogc3RyaW5nXG4gICBpY29uczogQXJyYXkgb2YgT2JqZWN0XG4gKi9cblxuLypcbiBPcHRpb25hbDpcbiAgIGRpcjogc3RyaW5nXG4gICBzY29wZTogc3RyaW5nXG4gICBkaXNwbGF5OiBzdHJpbmdcbiAgIGJhY2tncm91bmRfY29sb3I6IHN0cmluZ1xuICAgcmVsYXRlZF9hcHBsaWNhdGlvbnM6IEFycmF5IG9mIE9iamVjdFxuICAgcHJlZmVyX3JlbGF0ZWRfYXBwbGljYXRpb25zOiBib29sZWFuXG4gICBjYXRlZ29yaWVzOiBBcnJheSBvZiBzdHJpbmdzXG4gICBzY3JlZW5zaG90czogQXJyYXkgb2YgT2JqZWN0XG4gICBzaG9ydGN1dHM6IEFycmF5IG9mIE9iamVjdFxuICovXG5cbmNvbnN0IHZhbGlkYXRlU3RyaW5nID0gKGZpZWxkLCBtYW5pZmVzdCwgZXJyb3JzKSA9PiB7XG4gIGlmIChmaWVsZCBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFtmaWVsZF0pICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3JzW2ZpZWxkXSA9IGBtYW5pZmVzdCAke2ZpZWxkfSBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmdgO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlcnJvcnNbZmllbGRdID0gYG1hbmlmZXN0ICR7ZmllbGR9IGZpZWxkIGlzIHJlcXVpcmVkYDtcbiAgfVxufVxuXG4vLyB2YWxpZGF0ZSByZXF1aXJlZCBmaWVsZHNcbmNvbnN0IHZhbGlkYXRlTmFtZSA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgdmFsaWRhdGVTdHJpbmcoJ25hbWUnLCBtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xufVxuXG5jb25zdCB2YWxpZGF0ZURlc2NyaXB0aW9uID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICB2YWxpZGF0ZVN0cmluZygnZGVzY3JpcHRpb24nLCBtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xufVxuXG5jb25zdCB2YWxpZGF0ZUxhbmcgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmKCdsYW5nJyBpbiBtYW5pZmVzdCkge1xuICAgIGNvbnN0IG1hbmlmZXN0TGFuZyA9IG1hbmlmZXN0WydsYW5nJ107XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0TGFuZykgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5sYW5nID0gJ21hbmlmZXN0IGxhbmcgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nISc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKCEvXlxcdyooLVxcdyopKiQvLnRlc3QobWFuaWZlc3RMYW5nKSkge1xuICAgICAgICByZXF1aXJlZEVycm9ycy5sYW5nID0gJ21hbmlmZXN0IGxhbmcgZmllbGQgdHlwZSBzaG91bGQgYmUgY29ycmVjdCBmb3JtYXQhJztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMubGFuZyA9ICdtYW5pZmVzdCBsYW5nIGZpZWxkIGlzIHJlcXVpcmVkISdcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVRoZW1lQ29sb3IgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIC8vIGlmICgndGhlbWVfY29sb3InIGluIG1hbmlmZXN0KSB7XG4gIC8vICAgaWYodHlwZW9mKG1hbmlmZXN0Wyd0aGVtZV9jb2xvciddKSAhPT0gJ3N0cmluZycpIHtcbiAgLy8gICAgIHJlcXVpcmVkRXJyb3JzLnRoZW1lX2NvbG9yID0gJ21hbmlmZXN0IHRoZW1lX2NvbG9yIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gIC8vICAgfVxuICAvLyB9IGVsc2Uge1xuICAvLyAgIHJlcXVpcmVkRXJyb3JzLnRoZW1lX2NvbG9yID0gJ21hbmlmZXN0IHRoZW1lX2NvbG9yIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgLy8gfVxuICB2YWxpZGF0ZVN0cmluZygndGhlbWVfY29sb3InLCBtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xufVxuXG5jb25zdCB2YWxpZGF0ZU9yaXRhdGlvbiA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgY29uc3QgRU5VTV9PUklFTlRBVElPTiA9IFtcbiAgICAnYW55JyxcbiAgICAnbmF0dXJhbCcsXG4gICAgJ2xhbmRzY2FwZScsXG4gICAgJ2xhbmRzY2FwZS1wcmltYXJ5JyxcbiAgICAnbGFuZHNjYXBlLXNlY29uZGFyeScsXG4gICAgJ3BvcnRyYWl0JyxcbiAgICAncG9ydHJhaXQtcHJpbWFyeScsXG4gICAgJ3BvcnRyYWl0LXNlY29uZGFyeSdcbiAgXTtcbiAgaWYgKCdvcmllbnRhdGlvbicgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ29yaWVudGF0aW9uJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMub3JpZW50YXRpb24gPSAnbWFuaWZlc3Qgb3JpZW50YXRpb24gZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBtYW5pZmVzdFsnb3JpZW50YXRpb24nXTtcbiAgICAgIGlmKCFFTlVNX09SSUVOVEFUSU9OLmluY2x1ZGVzKG9yaWVudGF0aW9uKSkge1xuICAgICAgICByZXF1aXJlZEVycm9ycy5vcmllbnRhdGlvbiA9ICdtYW5pZmVzdCBvcmllbnRhdGlvbiBmaWVsZCB2YWx1ZSBub3QgY29ycmVjdCc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLm9yaWVudGF0aW9uID0gJ21hbmlmZXN0IG9yaWVudGF0aW9uIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVN0YXJ0VXJsID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZiAoJ3N0YXJ0X3VybCcgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ3N0YXJ0X3VybCddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLnN0YXJ0X3VybCA9ICdtYW5pZmVzdCBzdGFydF91cmwgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMuc3RhcnRfdXJsID0gJ21hbmlmZXN0IHN0YXJ0X3VybCBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVJY29uT2JqID0gKGljb25PYmopID0+IHtcbiAgbGV0IGVycm9yID0ge307XG4gIC8vIGljb25zIHNyYyB2YWxpZGF0ZVxuICBpZiAoJ3NyYycgaW4gaWNvbk9iaikge1xuICAgIGlmKHR5cGVvZihpY29uT2JqWydzcmMnXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvci5zcmMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgaWNvbiB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlcnJvci5zcmMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgaWNvbiBpcyByZXF1aXJlZCc7XG4gIH1cbiAgLy8gaWNvbnMgc2l6ZSB2YWxpZGF0ZVxuICBpZignc2l6ZXMnIGluIGljb25PYmopIHtcbiAgICBjb25zdCBzaXplcyA9IGljb25PYmpbJ3NpemVzJ107XG4gICAgaWYodHlwZW9mKHNpemVzKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yLnNpemVzID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIHNpemUgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoIS9eXFxzKlxcZCt4XFxkKyhcXHMrXFxkK3hcXGQrKSpcXHMqJC8udGVzdChzaXplcykpIHtcbiAgICAgICAgZXJyb3Iuc2l6ZXMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgc2l6ZXMgc2hvdWxkIGJlIGNvcnJlY3QgZm9ybWF0ISc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVycm9yLnNpemVzID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIHNpemUgaXMgcmVxdWlyZWQhJztcbiAgfVxuICByZXR1cm4gZXJyb3I7XG59XG5cbmNvbnN0IHZhbGlkYXRlSWNvbnMgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmKCdpY29ucycgaW4gbWFuaWZlc3QpIHtcbiAgICBjb25zdCBpY29ucyA9IG1hbmlmZXN0WydpY29ucyddO1xuICAgIGlmKCFBcnJheS5pc0FycmF5KGljb25zKSkge1xuICAgICAgcmVxdWlyZWRFcnJvcnMuaWNvbnMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgc2hvdWxkIGJlIEFycmF5JztcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGljb25FcnJvcnMgPSBbXTtcbiAgICAgIGljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB2YWxpZGF0ZUljb25PYmooaWNvbik7XG4gICAgICAgIGlmKE9iamVjdC5rZXlzKGVycm9yKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWNvbkVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmKGljb25FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXF1aXJlZEVycm9ycy5pY29ucyA9IGljb25FcnJvcnM7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLmljb25zID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVJlcXVpcmVkRmllbGRzID0gKG1hbmlmZXN0LCBlcnJvcnMpID0+IHtcbiAgbGV0IHJlcXVpcmVkRXJyb3JzID0ge307XG4gIHZhbGlkYXRlTmFtZShtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZURlc2NyaXB0aW9uKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlTGFuZyhtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZVRoZW1lQ29sb3IobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVPcml0YXRpb24obWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVTdGFydFVybChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZUljb25zKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHJldHVybiByZXF1aXJlZEVycm9ycztcbn1cblxuLy8gdmFsaWRhdGUgb3B0aW9uIGZpZWxkc1xuXG5jb25zdCB2YWxpZGF0ZURpciA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICBjb25zdCBFTlVNX0RJUiA9IFtcbiAgICAncnRsJyxcbiAgICAnbHRyJyxcbiAgICAnYXV0bydcbiAgXTtcbiAgaWYgKCdkaXInIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydkaXInXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRpb25zRXJyb3JzLmRpciA9ICdtYW5pZmVzdCBkaXIgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlyID0gbWFuaWZlc3RbJ2RpciddO1xuICAgICAgaWYoIUVOVU1fRElSLmluY2x1ZGVzKGRpcikpIHtcbiAgICAgICAgb3B0aW9uc0Vycm9ycy5kaXIgPSAnbWFuaWZlc3QgZGlyIGZpZWxkIHZhbHVlIG5vdCBjb3JyZWN0JztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9uc0Vycm9ycy5kaXIgPSAnbWFuaWZlc3QgZGlyIGZpZWxkIGlzIG51bGwnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlU2NvcGUgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgaWYgKCdzY29wZScgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ3Njb3BlJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9uc0Vycm9ycy5zY29wZSA9ICdtYW5pZmVzdCBzY29wZSBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zRXJyb3JzLnNjb3BlID0gJ21hbmlmZXN0IHNjb3BlIGZpZWxkIGlzIG51bGwnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlRGlzcGxheSA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICBjb25zdCBFTlVNX0RJU1BMQVkgPSBbXG4gICAgJ2Z1bGxzY3JlZW4nLFxuICAgICdzdGFuZGFsb25lJyxcbiAgICAnbWluaW1hbC11aScsXG4gICAgJ2Jyb3dzZXInXG4gIF07XG4gIGlmICgnZGlzcGxheScgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ2Rpc3BsYXknXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRpb25zRXJyb3JzLmRpc3BsYXkgPSAnbWFuaWZlc3QgZGlzcGxheSBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaXNwbGF5ID0gbWFuaWZlc3RbJ2Rpc3BsYXknXTtcbiAgICAgIGlmKCFFTlVNX0RJU1BMQVkuaW5jbHVkZXMoZGlzcGxheSkpIHtcbiAgICAgICAgb3B0aW9uc0Vycm9ycy5kaXNwbGF5ID0gJ21hbmlmZXN0IGRpc3BsYXkgZmllbGQgdmFsdWUgbm90IGNvcnJlY3QnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zRXJyb3JzLmRpc3BsYXkgPSAnbWFuaWZlc3QgZGlzcGxheSBmaWVsZCBpcyBudWxsJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZUJhY2tncm91bmRDb2xvciA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICBpZiAoJ2JhY2tncm91bmRfY29sb3InIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydiYWNrZ3JvdW5kX2NvbG9yJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9uc0Vycm9ycy5iYWNrZ3JvdW5kX2NvbG9yID0gJ21hbmlmZXN0IGJhY2tncm91bmRfY29sb3IgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9uc0Vycm9ycy5iYWNrZ3JvdW5kX2NvbG9yID0gJ21hbmlmZXN0IGJhY2tncm91bmRfY29sb3IgZmllbGQgaXMgbnVsbCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIC8vIHRvZG86IHJlbGF0ZWRfYXBwbGljYXRpb25zIGZpZWxkc1xufVxuXG5jb25zdCB2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgLy8gdG9kbzogcHJlZmVyX3JlbGF0ZWRfYXBwbGljYXRpb25zIGZpZWxkc1xufVxuXG5jb25zdCB2YWxpZGF0ZUNhdGVnb3JpZXMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgaWYoJ2NhdGVnb3JpZXMnIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IG1hbmlmZXN0WydjYXRlZ29yaWVzJ107XG4gICAgaWYoIUFycmF5LmlzQXJyYXkoY2F0ZWdvcmllcykpIHtcbiAgICAgIG9wdGlvbnNFcnJvcnMuY2F0ZWdvcmllcyA9ICdtYW5pZmVzdCBjYXRlZ29yaWVzIGZpZWxkIHNob3VsZCBiZSBBcnJheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjYXRlZ29yaWVzRXJyb3JzID0gW107XG4gICAgICBjYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGlmKHR5cGVvZihjYXRlZ29yeSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY2F0ZWdvcmllc0Vycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnbWFuaWZlc3QgY2F0ZWdvcmllcyBmaWVsZCBjYXRlZ29yeSBzaG91bGQgYmUgU3RyaW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYoY2F0ZWdvcmllc0Vycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG9wdGlvbnNFcnJvcnMuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXNFcnJvcnM7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMuY2F0ZWdvcmllcyA9ICdtYW5pZmVzdCBjYXRlZ29yaWVzIGZpZWxkIGlzIG51bGwnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlU2NyZWVuc2hvdHMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgLy8gdG9kbzogc2NyZWVuU2hvdHMgZmllbGRzXG59XG5cbmNvbnN0IHZhbGlkYXRlU2hvcnRjdXRzID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIC8vIHRvZG86IHNob3J0Q3V0cyBmaWVsZHNcbn1cblxuY29uc3QgdmFsaWRhdGVPcHRpb25GaWVsZHMgPSAobWFuaWZlc3QpID0+IHtcbiAgbGV0IG9wdGlvbnNFcnJvcnMgPSB7fTtcbiAgdmFsaWRhdGVEaXIobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNjb3BlKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVEaXNwbGF5KG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZUNhdGVnb3JpZXMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNjcmVlbnNob3RzKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVTaG9ydGN1dHMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICByZXR1cm4gb3B0aW9uc0Vycm9ycztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUob2xkTWFuaWZlc3QpIHtcbiAgY29uc3QgcmVxdWlyZWRGaWVsZHNFcnJvciA9IHZhbGlkYXRlUmVxdWlyZWRGaWVsZHMob2xkTWFuaWZlc3QpO1xuICBjb25zdCBvcHRpb25GaWVsZHNFcnJvciA9IHZhbGlkYXRlT3B0aW9uRmllbGRzKG9sZE1hbmlmZXN0KTtcbiAgcmV0dXJuIHtcbiAgICAnUmVxdWlyZWRGaWVsZHMnOiBPYmplY3Qua2V5cyhyZXF1aXJlZEZpZWxkc0Vycm9yKS5sZW5ndGggPiAwID8gcmVxdWlyZWRGaWVsZHNFcnJvciA6ICdSZXF1aXJlZCBmaWVsZHMgaGF2ZSBubyBlcnJvciEhIScsXG4gICAgJ09wdGlvbmFsRmllbGRzJzogT2JqZWN0LmtleXMob3B0aW9uRmllbGRzRXJyb3IpLmxlbmd0aCA+IDAgPyBvcHRpb25GaWVsZHNFcnJvciA6ICdPcHRpb25hbCBmaWVsZHMgaGF2ZSBubyBlcnJvciEhIScsXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})
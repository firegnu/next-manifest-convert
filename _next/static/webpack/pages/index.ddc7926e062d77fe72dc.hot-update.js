webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\nvar validateString = function validateString(field, manifest, errors) {\n  if (field in manifest) {\n    if (typeof manifest[field] !== 'string') {\n      errors[field] = \"manifest \".concat(field, \" field type should be string\");\n    }\n  } else {\n    errors[field] = \"manifest \".concat(field, \" field is required\");\n  }\n}; // validate required fields\n\n\nvar validateName = function validateName(manifest, requiredErrors) {\n  validateString('name', manifest, requiredErrors);\n};\n\nvar validateDescription = function validateDescription(manifest, requiredErrors) {\n  validateString('description', manifest, requiredErrors);\n};\n\nvar validateLang = function validateLang(manifest, requiredErrors) {\n  if ('lang' in manifest) {\n    var manifestLang = manifest['lang'];\n\n    if (typeof manifestLang !== 'string') {\n      requiredErrors.lang = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(manifestLang)) {\n        requiredErrors.lang = 'manifest lang field type should be correct format!';\n      }\n    }\n  } else {\n    requiredErrors.lang = 'manifest lang field is required!';\n  }\n};\n\nvar validateThemeColor = function validateThemeColor(manifest, requiredErrors) {\n  validateString('theme_color', manifest, requiredErrors);\n};\n\nvar validateOritation = function validateOritation(manifest, requiredErrors) {\n  var ENUM_ORIENTATION = ['any', 'natural', 'landscape', 'landscape-primary', 'landscape-secondary', 'portrait', 'portrait-primary', 'portrait-secondary'];\n\n  if ('orientation' in manifest) {\n    if (typeof manifest['orientation'] !== 'string') {\n      requiredErrors.orientation = 'manifest orientation field type should be string';\n    } else {\n      var orientation = manifest['orientation'];\n\n      if (!ENUM_ORIENTATION.includes(orientation)) {\n        requiredErrors.orientation = 'manifest orientation field value not correct';\n      }\n    }\n  } else {\n    requiredErrors.orientation = 'manifest orientation field is required';\n  }\n};\n\nvar validateStartUrl = function validateStartUrl(manifest, requiredErrors) {\n  validateString('start_url', manifest, requiredErrors);\n};\n\nvar validateIconObj = function validateIconObj(iconObj) {\n  var error = {}; // icons src validate\n\n  if ('src' in iconObj) {\n    if (typeof iconObj['src'] !== 'string') {\n      error.src = 'manifest icons field icon type should be string';\n    }\n  } else {\n    error.src = 'manifest icons field icon is required';\n  } // icons size validate\n\n\n  if ('sizes' in iconObj) {\n    var sizes = iconObj['sizes'];\n\n    if (typeof sizes !== 'string') {\n      error.sizes = 'manifest icons field size type should be string';\n    } else {\n      if (!/^\\s*\\d+x\\d+(\\s+\\d+x\\d+)*\\s*$/.test(sizes)) {\n        error.sizes = 'manifest icons field sizes should be correct format!';\n      }\n    }\n  } else {\n    error.sizes = 'manifest icons field size is required!';\n  }\n\n  return error;\n};\n\nvar validateIcons = function validateIcons(manifest, requiredErrors) {\n  if ('icons' in manifest) {\n    var icons = manifest['icons'];\n\n    if (!Array.isArray(icons)) {\n      requiredErrors.icons = 'manifest icons field should be Array';\n    } else {\n      var iconErrors = [];\n      icons.forEach(function (icon) {\n        var error = validateIconObj(icon);\n\n        if (Object.keys(error).length > 0) {\n          iconErrors.push(error);\n        }\n      });\n\n      if (iconErrors.length > 0) {\n        requiredErrors.icons = iconErrors;\n      }\n    }\n  } else {\n    requiredErrors.icons = 'manifest icons field is required';\n  }\n};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  var requiredErrors = {};\n  validateName(manifest, requiredErrors);\n  validateDescription(manifest, requiredErrors);\n  validateLang(manifest, requiredErrors);\n  validateThemeColor(manifest, requiredErrors);\n  validateOritation(manifest, requiredErrors);\n  validateStartUrl(manifest, requiredErrors);\n  validateIcons(manifest, requiredErrors);\n  return requiredErrors;\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest, optionsErrors) {\n  var ENUM_DIR = ['rtl', 'ltr', 'auto'];\n\n  if ('dir' in manifest) {\n    if (typeof manifest['dir'] !== 'string') {\n      optionsErrors.dir = 'manifest dir field type should be string';\n    } else {\n      var dir = manifest['dir'];\n\n      if (!ENUM_DIR.includes(dir)) {\n        optionsErrors.dir = 'manifest dir field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.dir = 'manifest dir field is null';\n  }\n};\n\nvar validateScope = function validateScope(manifest, optionsErrors) {\n  if ('scope' in manifest) {\n    if (typeof manifest['scope'] !== 'string') {\n      optionsErrors.scope = 'manifest scope field type should be string';\n    }\n  } else {\n    optionsErrors.scope = 'manifest scope field is null';\n  }\n\n  validateString('scope', manifest, optionsErrors);\n};\n\nvar validateDisplay = function validateDisplay(manifest, optionsErrors) {\n  var ENUM_DISPLAY = ['fullscreen', 'standalone', 'minimal-ui', 'browser'];\n\n  if ('display' in manifest) {\n    if (typeof manifest['display'] !== 'string') {\n      optionsErrors.display = 'manifest display field type should be string';\n    } else {\n      var display = manifest['display'];\n\n      if (!ENUM_DISPLAY.includes(display)) {\n        optionsErrors.display = 'manifest display field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.display = 'manifest display field is null';\n  }\n};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest, optionsErrors) {\n  if ('background_color' in manifest) {\n    if (typeof manifest['background_color'] !== 'string') {\n      optionsErrors.background_color = 'manifest background_color field type should be string';\n    }\n  } else {\n    optionsErrors.background_color = 'manifest background_color field is null';\n  }\n};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest, optionsErrors) {// todo: related_applications fields\n};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest, optionsErrors) {// todo: prefer_related_applications fields\n};\n\nvar validateCategories = function validateCategories(manifest, optionsErrors) {\n  if ('categories' in manifest) {\n    var categories = manifest['categories'];\n\n    if (!Array.isArray(categories)) {\n      optionsErrors.categories = 'manifest categories field should be Array';\n    } else {\n      var categoriesErrors = [];\n      categories.forEach(function (category) {\n        if (typeof category !== 'string') {\n          categoriesErrors.push({\n            category: 'manifest categories field category should be String'\n          });\n        }\n      });\n\n      if (categoriesErrors.length > 0) {\n        optionsErrors.categories = categoriesErrors;\n      }\n    }\n  } else {\n    optionsErrors.categories = 'manifest categories field is null';\n  }\n};\n\nvar validateScreenshots = function validateScreenshots(manifest, optionsErrors) {// todo: screenShots fields\n};\n\nvar validateShortcuts = function validateShortcuts(manifest, optionsErrors) {// todo: shortCuts fields\n};\n\nvar validateOptionFields = function validateOptionFields(manifest) {\n  var optionsErrors = {};\n  validateDir(manifest, optionsErrors);\n  validateScope(manifest, optionsErrors);\n  validateDisplay(manifest, optionsErrors);\n  validateBackgroundColor(manifest, optionsErrors);\n  validateRelatedApplications(manifest, optionsErrors);\n  validatePreferRelatedApplications(manifest, optionsErrors);\n  validateCategories(manifest, optionsErrors);\n  validateScreenshots(manifest, optionsErrors);\n  validateShortcuts(manifest, optionsErrors);\n  return optionsErrors;\n};\n\nfunction validate(oldManifest) {\n  var requiredFieldsError = validateRequiredFields(oldManifest);\n  var optionFieldsError = validateOptionFields(oldManifest);\n  return {\n    'RequiredFields': Object.keys(requiredFieldsError).length > 0 ? requiredFieldsError : 'Required fields have no error!!!',\n    'OptionalFields': Object.keys(optionFieldsError).length > 0 ? optionFieldsError : 'Optional fields have no error!!!'\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZVN0cmluZyIsImZpZWxkIiwibWFuaWZlc3QiLCJlcnJvcnMiLCJ2YWxpZGF0ZU5hbWUiLCJyZXF1aXJlZEVycm9ycyIsInZhbGlkYXRlRGVzY3JpcHRpb24iLCJ2YWxpZGF0ZUxhbmciLCJtYW5pZmVzdExhbmciLCJsYW5nIiwidGVzdCIsInZhbGlkYXRlVGhlbWVDb2xvciIsInZhbGlkYXRlT3JpdGF0aW9uIiwiRU5VTV9PUklFTlRBVElPTiIsIm9yaWVudGF0aW9uIiwiaW5jbHVkZXMiLCJ2YWxpZGF0ZVN0YXJ0VXJsIiwidmFsaWRhdGVJY29uT2JqIiwiaWNvbk9iaiIsImVycm9yIiwic3JjIiwic2l6ZXMiLCJ2YWxpZGF0ZUljb25zIiwiaWNvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJpY29uRXJyb3JzIiwiZm9yRWFjaCIsImljb24iLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicHVzaCIsInZhbGlkYXRlUmVxdWlyZWRGaWVsZHMiLCJ2YWxpZGF0ZURpciIsIm9wdGlvbnNFcnJvcnMiLCJFTlVNX0RJUiIsImRpciIsInZhbGlkYXRlU2NvcGUiLCJzY29wZSIsInZhbGlkYXRlRGlzcGxheSIsIkVOVU1fRElTUExBWSIsImRpc3BsYXkiLCJ2YWxpZGF0ZUJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRfY29sb3IiLCJ2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMiLCJ2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMiLCJ2YWxpZGF0ZUNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcmllc0Vycm9ycyIsImNhdGVnb3J5IiwidmFsaWRhdGVTY3JlZW5zaG90cyIsInZhbGlkYXRlU2hvcnRjdXRzIiwidmFsaWRhdGVPcHRpb25GaWVsZHMiLCJ2YWxpZGF0ZSIsIm9sZE1hbmlmZXN0IiwicmVxdWlyZWRGaWVsZHNFcnJv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QkFBdUIsQ0FBQ3pDLFFBQUQsRUFBV2lDLGFBQVgsQ0FBdkI7QUFDQVUsNkJBQTJCLENBQUMzQyxRQUFELEVBQVdpQyxhQUFYLENBQTNCO0FBQ0FXLG1DQUFpQyxDQUFDNUMsUUFBRCxFQUFXaUMsYUFBWCxDQUFqQztBQUNBWSxvQkFBa0IsQ0FBQzdDLFFBQUQsRUFBV2lDLGFBQVgsQ0FBbEI7QUFDQWdCLHFCQUFtQixDQUFDakQsUUFBRCxFQUFXaUMsYUFBWCxDQUFuQjtBQUNBaUIsbUJBQWlCLENBQUNsRCxRQUFELEVBQVdpQyxhQUFYLENBQWpCO0FBQ0EsU0FBT0EsYUFBUDtBQUNELENBWkQ7O0FBY2UsU0FBU21CLFFBQVQsQ0FBa0JDLFdBQWxCLEVBQStCO0FBQzVDLE1BQU1DLG1CQUFtQixHQUFHdkIsc0JBQXNCLENBQUNzQixXQUFELENBQWxEO0FBQ0EsTUFBTUUsaUJBQWlCLEdBQUdKLG9CQUFvQixDQUFDRSxXQUFELENBQTlDO0FBQ0EsU0FBTztBQUNMLHNCQUFrQjFCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZMEIsbUJBQVosRUFBaUN6QixNQUFqQyxHQUEwQyxDQUExQyxHQUE4Q3lCLG1CQUE5QyxHQUFvRSxrQ0FEakY7QUFFTCxzQkFBa0IzQixNQUFNLENBQUNDLElBQVAsQ0FBWTJCLGlCQUFaLEVBQStCMUIsTUFBL0IsR0FBd0MsQ0FBeEMsR0FBNEMwQixpQkFBNUMsR0FBZ0U7QUFGN0UsR0FBUDtBQUlEIiwiZmlsZSI6Ii4vdXRpbHMvdmFsaWRhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIFJlcXVpcmVkIGZpZWxkczpcbiAgIG5hbWUgb3Igc2hvcnRfbmFtZTogc3RyaW5nXG4gICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICBsYW5nOiBzdHJpbmdcbiAgIHRoZW1lX2NvbG9yOiBzdHJpbmdcbiAgIG9yaWVudGF0aW9uOiBzdHJpbmdcbiAgIHN0YXJ0X3VybDogc3RyaW5nXG4gICBpY29uczogQXJyYXkgb2YgT2JqZWN0XG4gKi9cblxuLypcbiBPcHRpb25hbDpcbiAgIGRpcjogc3RyaW5nXG4gICBzY29wZTogc3RyaW5nXG4gICBkaXNwbGF5OiBzdHJpbmdcbiAgIGJhY2tncm91bmRfY29sb3I6IHN0cmluZ1xuICAgcmVsYXRlZF9hcHBsaWNhdGlvbnM6IEFycmF5IG9mIE9iamVjdFxuICAgcHJlZmVyX3JlbGF0ZWRfYXBwbGljYXRpb25zOiBib29sZWFuXG4gICBjYXRlZ29yaWVzOiBBcnJheSBvZiBzdHJpbmdzXG4gICBzY3JlZW5zaG90czogQXJyYXkgb2YgT2JqZWN0XG4gICBzaG9ydGN1dHM6IEFycmF5IG9mIE9iamVjdFxuICovXG5cbmNvbnN0IHZhbGlkYXRlU3RyaW5nID0gKGZpZWxkLCBtYW5pZmVzdCwgZXJyb3JzKSA9PiB7XG4gIGlmIChmaWVsZCBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFtmaWVsZF0pICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3JzW2ZpZWxkXSA9IGBtYW5pZmVzdCAke2ZpZWxkfSBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmdgO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlcnJvcnNbZmllbGRdID0gYG1hbmlmZXN0ICR7ZmllbGR9IGZpZWxkIGlzIHJlcXVpcmVkYDtcbiAgfVxufVxuXG4vLyB2YWxpZGF0ZSByZXF1aXJlZCBmaWVsZHNcbmNvbnN0IHZhbGlkYXRlTmFtZSA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgdmFsaWRhdGVTdHJpbmcoJ25hbWUnLCBtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xufVxuXG5jb25zdCB2YWxpZGF0ZURlc2NyaXB0aW9uID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICB2YWxpZGF0ZVN0cmluZygnZGVzY3JpcHRpb24nLCBtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xufVxuXG5jb25zdCB2YWxpZGF0ZUxhbmcgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmKCdsYW5nJyBpbiBtYW5pZmVzdCkge1xuICAgIGNvbnN0IG1hbmlmZXN0TGFuZyA9IG1hbmlmZXN0WydsYW5nJ107XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0TGFuZykgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5sYW5nID0gJ21hbmlmZXN0IGxhbmcgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nISc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKCEvXlxcdyooLVxcdyopKiQvLnRlc3QobWFuaWZlc3RMYW5nKSkge1xuICAgICAgICByZXF1aXJlZEVycm9ycy5sYW5nID0gJ21hbmlmZXN0IGxhbmcgZmllbGQgdHlwZSBzaG91bGQgYmUgY29ycmVjdCBmb3JtYXQhJztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMubGFuZyA9ICdtYW5pZmVzdCBsYW5nIGZpZWxkIGlzIHJlcXVpcmVkISdcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVRoZW1lQ29sb3IgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIHZhbGlkYXRlU3RyaW5nKCd0aGVtZV9jb2xvcicsIG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG59XG5cbmNvbnN0IHZhbGlkYXRlT3JpdGF0aW9uID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBjb25zdCBFTlVNX09SSUVOVEFUSU9OID0gW1xuICAgICdhbnknLFxuICAgICduYXR1cmFsJyxcbiAgICAnbGFuZHNjYXBlJyxcbiAgICAnbGFuZHNjYXBlLXByaW1hcnknLFxuICAgICdsYW5kc2NhcGUtc2Vjb25kYXJ5JyxcbiAgICAncG9ydHJhaXQnLFxuICAgICdwb3J0cmFpdC1wcmltYXJ5JyxcbiAgICAncG9ydHJhaXQtc2Vjb25kYXJ5J1xuICBdO1xuICBpZiAoJ29yaWVudGF0aW9uJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnb3JpZW50YXRpb24nXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5vcmllbnRhdGlvbiA9ICdtYW5pZmVzdCBvcmllbnRhdGlvbiBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvcmllbnRhdGlvbiA9IG1hbmlmZXN0WydvcmllbnRhdGlvbiddO1xuICAgICAgaWYoIUVOVU1fT1JJRU5UQVRJT04uaW5jbHVkZXMob3JpZW50YXRpb24pKSB7XG4gICAgICAgIHJlcXVpcmVkRXJyb3JzLm9yaWVudGF0aW9uID0gJ21hbmlmZXN0IG9yaWVudGF0aW9uIGZpZWxkIHZhbHVlIG5vdCBjb3JyZWN0JztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMub3JpZW50YXRpb24gPSAnbWFuaWZlc3Qgb3JpZW50YXRpb24gZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlU3RhcnRVcmwgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIHZhbGlkYXRlU3RyaW5nKCdzdGFydF91cmwnLCBtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xufVxuXG5jb25zdCB2YWxpZGF0ZUljb25PYmogPSAoaWNvbk9iaikgPT4ge1xuICBsZXQgZXJyb3IgPSB7fTtcbiAgLy8gaWNvbnMgc3JjIHZhbGlkYXRlXG4gIGlmICgnc3JjJyBpbiBpY29uT2JqKSB7XG4gICAgaWYodHlwZW9mKGljb25PYmpbJ3NyYyddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yLnNyYyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBpY29uIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVycm9yLnNyYyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBpY29uIGlzIHJlcXVpcmVkJztcbiAgfVxuICAvLyBpY29ucyBzaXplIHZhbGlkYXRlXG4gIGlmKCdzaXplcycgaW4gaWNvbk9iaikge1xuICAgIGNvbnN0IHNpemVzID0gaWNvbk9ialsnc2l6ZXMnXTtcbiAgICBpZih0eXBlb2Yoc2l6ZXMpICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3Iuc2l6ZXMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgc2l6ZSB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZighL15cXHMqXFxkK3hcXGQrKFxccytcXGQreFxcZCspKlxccyokLy50ZXN0KHNpemVzKSkge1xuICAgICAgICBlcnJvci5zaXplcyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaXplcyBzaG91bGQgYmUgY29ycmVjdCBmb3JtYXQhJztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZXJyb3Iuc2l6ZXMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgc2l6ZSBpcyByZXF1aXJlZCEnO1xuICB9XG4gIHJldHVybiBlcnJvcjtcbn1cblxuY29uc3QgdmFsaWRhdGVJY29ucyA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYoJ2ljb25zJyBpbiBtYW5pZmVzdCkge1xuICAgIGNvbnN0IGljb25zID0gbWFuaWZlc3RbJ2ljb25zJ107XG4gICAgaWYoIUFycmF5LmlzQXJyYXkoaWNvbnMpKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5pY29ucyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaG91bGQgYmUgQXJyYXknO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgaWNvbkVycm9ycyA9IFtdO1xuICAgICAgaWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgICBjb25zdCBlcnJvciA9IHZhbGlkYXRlSWNvbk9iaihpY29uKTtcbiAgICAgICAgaWYoT2JqZWN0LmtleXMoZXJyb3IpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpY29uRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYoaWNvbkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlcXVpcmVkRXJyb3JzLmljb25zID0gaWNvbkVycm9ycztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMuaWNvbnMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlUmVxdWlyZWRGaWVsZHMgPSAobWFuaWZlc3QsIGVycm9ycykgPT4ge1xuICBsZXQgcmVxdWlyZWRFcnJvcnMgPSB7fTtcbiAgdmFsaWRhdGVOYW1lKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlRGVzY3JpcHRpb24obWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVMYW5nKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlVGhlbWVDb2xvcihtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZU9yaXRhdGlvbihtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZVN0YXJ0VXJsKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlSWNvbnMobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgcmV0dXJuIHJlcXVpcmVkRXJyb3JzO1xufVxuXG4vLyB2YWxpZGF0ZSBvcHRpb24gZmllbGRzXG5cbmNvbnN0IHZhbGlkYXRlRGlyID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIGNvbnN0IEVOVU1fRElSID0gW1xuICAgICdydGwnLFxuICAgICdsdHInLFxuICAgICdhdXRvJ1xuICBdO1xuICBpZiAoJ2RpcicgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ2RpciddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnNFcnJvcnMuZGlyID0gJ21hbmlmZXN0IGRpciBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaXIgPSBtYW5pZmVzdFsnZGlyJ107XG4gICAgICBpZighRU5VTV9ESVIuaW5jbHVkZXMoZGlyKSkge1xuICAgICAgICBvcHRpb25zRXJyb3JzLmRpciA9ICdtYW5pZmVzdCBkaXIgZmllbGQgdmFsdWUgbm90IGNvcnJlY3QnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zRXJyb3JzLmRpciA9ICdtYW5pZmVzdCBkaXIgZmllbGQgaXMgbnVsbCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVTY29wZSA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICBpZiAoJ3Njb3BlJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnc2NvcGUnXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRpb25zRXJyb3JzLnNjb3BlID0gJ21hbmlmZXN0IHNjb3BlIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMuc2NvcGUgPSAnbWFuaWZlc3Qgc2NvcGUgZmllbGQgaXMgbnVsbCc7XG4gIH1cbiAgdmFsaWRhdGVTdHJpbmcoJ3Njb3BlJywgbWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xufVxuXG5jb25zdCB2YWxpZGF0ZURpc3BsYXkgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgY29uc3QgRU5VTV9ESVNQTEFZID0gW1xuICAgICdmdWxsc2NyZWVuJyxcbiAgICAnc3RhbmRhbG9uZScsXG4gICAgJ21pbmltYWwtdWknLFxuICAgICdicm93c2VyJ1xuICBdO1xuICBpZiAoJ2Rpc3BsYXknIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydkaXNwbGF5J10pICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9uc0Vycm9ycy5kaXNwbGF5ID0gJ21hbmlmZXN0IGRpc3BsYXkgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlzcGxheSA9IG1hbmlmZXN0WydkaXNwbGF5J107XG4gICAgICBpZighRU5VTV9ESVNQTEFZLmluY2x1ZGVzKGRpc3BsYXkpKSB7XG4gICAgICAgIG9wdGlvbnNFcnJvcnMuZGlzcGxheSA9ICdtYW5pZmVzdCBkaXNwbGF5IGZpZWxkIHZhbHVlIG5vdCBjb3JyZWN0JztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9uc0Vycm9ycy5kaXNwbGF5ID0gJ21hbmlmZXN0IGRpc3BsYXkgZmllbGQgaXMgbnVsbCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgaWYgKCdiYWNrZ3JvdW5kX2NvbG9yJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnYmFja2dyb3VuZF9jb2xvciddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnNFcnJvcnMuYmFja2dyb3VuZF9jb2xvciA9ICdtYW5pZmVzdCBiYWNrZ3JvdW5kX2NvbG9yIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMuYmFja2dyb3VuZF9jb2xvciA9ICdtYW5pZmVzdCBiYWNrZ3JvdW5kX2NvbG9yIGZpZWxkIGlzIG51bGwnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlUmVsYXRlZEFwcGxpY2F0aW9ucyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICAvLyB0b2RvOiByZWxhdGVkX2FwcGxpY2F0aW9ucyBmaWVsZHNcbn1cblxuY29uc3QgdmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIC8vIHRvZG86IHByZWZlcl9yZWxhdGVkX2FwcGxpY2F0aW9ucyBmaWVsZHNcbn1cblxuY29uc3QgdmFsaWRhdGVDYXRlZ29yaWVzID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIGlmKCdjYXRlZ29yaWVzJyBpbiBtYW5pZmVzdCkge1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBtYW5pZmVzdFsnY2F0ZWdvcmllcyddO1xuICAgIGlmKCFBcnJheS5pc0FycmF5KGNhdGVnb3JpZXMpKSB7XG4gICAgICBvcHRpb25zRXJyb3JzLmNhdGVnb3JpZXMgPSAnbWFuaWZlc3QgY2F0ZWdvcmllcyBmaWVsZCBzaG91bGQgYmUgQXJyYXknO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY2F0ZWdvcmllc0Vycm9ycyA9IFtdO1xuICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICBpZih0eXBlb2YoY2F0ZWdvcnkpICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNhdGVnb3JpZXNFcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ21hbmlmZXN0IGNhdGVnb3JpZXMgZmllbGQgY2F0ZWdvcnkgc2hvdWxkIGJlIFN0cmluZydcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmKGNhdGVnb3JpZXNFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBvcHRpb25zRXJyb3JzLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzRXJyb3JzO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zRXJyb3JzLmNhdGVnb3JpZXMgPSAnbWFuaWZlc3QgY2F0ZWdvcmllcyBmaWVsZCBpcyBudWxsJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVNjcmVlbnNob3RzID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIC8vIHRvZG86IHNjcmVlblNob3RzIGZpZWxkc1xufVxuXG5jb25zdCB2YWxpZGF0ZVNob3J0Y3V0cyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICAvLyB0b2RvOiBzaG9ydEN1dHMgZmllbGRzXG59XG5cbmNvbnN0IHZhbGlkYXRlT3B0aW9uRmllbGRzID0gKG1hbmlmZXN0KSA9PiB7XG4gIGxldCBvcHRpb25zRXJyb3JzID0ge307XG4gIHZhbGlkYXRlRGlyKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVTY29wZShtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlRGlzcGxheShtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlQmFja2dyb3VuZENvbG9yKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVDYXRlZ29yaWVzKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVTY3JlZW5zaG90cyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlU2hvcnRjdXRzKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgcmV0dXJuIG9wdGlvbnNFcnJvcnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKG9sZE1hbmlmZXN0KSB7XG4gIGNvbnN0IHJlcXVpcmVkRmllbGRzRXJyb3IgPSB2YWxpZGF0ZVJlcXVpcmVkRmllbGRzKG9sZE1hbmlmZXN0KTtcbiAgY29uc3Qgb3B0aW9uRmllbGRzRXJyb3IgPSB2YWxpZGF0ZU9wdGlvbkZpZWxkcyhvbGRNYW5pZmVzdCk7XG4gIHJldHVybiB7XG4gICAgJ1JlcXVpcmVkRmllbGRzJzogT2JqZWN0LmtleXMocmVxdWlyZWRGaWVsZHNFcnJvcikubGVuZ3RoID4gMCA/IHJlcXVpcmVkRmllbGRzRXJyb3IgOiAnUmVxdWlyZWQgZmllbGRzIGhhdmUgbm8gZXJyb3IhISEnLFxuICAgICdPcHRpb25hbEZpZWxkcyc6IE9iamVjdC5rZXlzKG9wdGlvbkZpZWxkc0Vycm9yKS5sZW5ndGggPiAwID8gb3B0aW9uRmllbGRzRXJyb3IgOiAnT3B0aW9uYWwgZmllbGRzIGhhdmUgbm8gZXJyb3IhISEnLFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})
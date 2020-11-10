webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./utils/utils.js\");\n\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\n// validate required fields\n\nvar validateName = function validateName(manifest, requiredErrors) {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateString\"])('name', manifest, requiredErrors);\n};\n\nvar validateDescription = function validateDescription(manifest, requiredErrors) {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateString\"])('description', manifest, requiredErrors);\n};\n\nvar validateLang = function validateLang(manifest, requiredErrors) {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateStringWithRegex\"])('lang', manifest, requiredErrors);\n};\n\nvar validateThemeColor = function validateThemeColor(manifest, requiredErrors) {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateString\"])('theme_color', manifest, requiredErrors);\n};\n\nvar validateOritation = function validateOritation(manifest, requiredErrors) {\n  var ENUM_ORIENTATION = ['any', 'natural', 'landscape', 'landscape-primary', 'landscape-secondary', 'portrait', 'portrait-primary', 'portrait-secondary'];\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateFieldWithEnum\"])('orientation', manifest, requiredErrors, ENUM_ORIENTATION);\n};\n\nvar validateStartUrl = function validateStartUrl(manifest, requiredErrors) {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateString\"])('start_url', manifest, requiredErrors);\n};\n\nvar validateIcons = function validateIcons(manifest, requiredErrors) {\n  if ('icons' in manifest) {\n    var icons = manifest['icons'];\n\n    if (!Array.isArray(icons)) {\n      requiredErrors.icons = 'manifest icons field should be Array';\n    } else {\n      var iconErrors = [];\n      icons.forEach(function (icon) {\n        var error = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateIconObj\"])(icon);\n\n        if (Object.keys(error).length > 0) {\n          iconErrors.push(error);\n        }\n      });\n\n      if (iconErrors.length > 0) {\n        requiredErrors.icons = iconErrors;\n      }\n    }\n  } else {\n    requiredErrors.icons = 'manifest icons field is required';\n  }\n};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  var requiredErrors = {};\n  validateName(manifest, requiredErrors);\n  validateDescription(manifest, requiredErrors);\n  validateLang(manifest, requiredErrors);\n  validateThemeColor(manifest, requiredErrors);\n  validateOritation(manifest, requiredErrors);\n  validateStartUrl(manifest, requiredErrors);\n  validateIcons(manifest, requiredErrors);\n  return requiredErrors;\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest, optionsErrors) {\n  var ENUM_DIR = ['rtl', 'ltr', 'auto'];\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateFieldWithEnum\"])('dir', manifest, optionsErrors, ENUM_DIR);\n};\n\nvar validateScope = function validateScope(manifest, optionsErrors) {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateString\"])('scope', manifest, optionsErrors);\n};\n\nvar validateDisplay = function validateDisplay(manifest, optionsErrors) {\n  var ENUM_DISPLAY = ['fullscreen', 'standalone', 'minimal-ui', 'browser'];\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateFieldWithEnum\"])('display', manifest, optionsErrors, ENUM_DISPLAY);\n};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest, optionsErrors) {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateString\"])('background_color', manifest, optionsErrors);\n};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest, optionsErrors) {// todo: related_applications fields\n};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest, optionsErrors) {// todo: prefer_related_applications fields\n};\n\nvar validateCategories = function validateCategories(manifest, optionsErrors) {\n  if ('categories' in manifest) {\n    var categories = manifest['categories'];\n\n    if (!Array.isArray(categories)) {\n      optionsErrors.categories = 'manifest categories field should be Array';\n    } else {\n      var categoriesErrors = [];\n      categories.forEach(function (category) {\n        if (typeof category !== 'string') {\n          categoriesErrors.push({\n            category: 'manifest categories field category should be String'\n          });\n        }\n      });\n\n      if (categoriesErrors.length > 0) {\n        optionsErrors.categories = categoriesErrors;\n      }\n    }\n  } else {\n    optionsErrors.categories = 'manifest categories field is null';\n  }\n};\n\nvar validateScreenshots = function validateScreenshots(manifest, optionsErrors) {// todo: screenShots fields\n};\n\nvar validateShortcuts = function validateShortcuts(manifest, optionsErrors) {// todo: shortCuts fields\n};\n\nvar validateOptionFields = function validateOptionFields(manifest) {\n  var optionsErrors = {};\n  validateDir(manifest, optionsErrors);\n  validateScope(manifest, optionsErrors);\n  validateDisplay(manifest, optionsErrors);\n  validateBackgroundColor(manifest, optionsErrors);\n  validateRelatedApplications(manifest, optionsErrors);\n  validatePreferRelatedApplications(manifest, optionsErrors);\n  validateCategories(manifest, optionsErrors);\n  validateScreenshots(manifest, optionsErrors);\n  validateShortcuts(manifest, optionsErrors);\n  return optionsErrors;\n};\n\nfunction validate(oldManifest) {\n  var requiredFieldsError = validateRequiredFields(oldManifest);\n  var optionFieldsError = validateOptionFields(oldManifest);\n  return {\n    'RequiredFields': Object.keys(requiredFieldsError).length > 0 ? requiredFieldsError : 'Required fields have no error!!!',\n    'OptionalFields': Object.keys(optionFieldsError).length > 0 ? optionFieldsError : 'Optional fields have no error!!!'\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZU5hbWUiLCJtYW5pZmVzdCIsInJlcXVpcmVkRXJyb3JzIiwidmFsaWRhdGVTdHJpbmciLCJ2YWxpZGF0ZURlc2NyaXB0aW9uIiwidmFsaWRhdGVMYW5nIiwidmFsaWRhdGVTdHJpbmdXaXRoUmVnZXgiLCJ2YWxpZGF0ZVRoZW1lQ29sb3IiLCJ2YWxpZGF0ZU9yaXRhdGlvbiIsIkVOVU1fT1JJRU5UQVRJT04iLCJ2YWxpZGF0ZUZpZWxkV2l0aEVudW0iLCJ2YWxpZGF0ZVN0YXJ0VXJsIiwidmFsaWRhdGVJY29ucyIsImljb25zIiwiQXJyYXkiLCJpc0FycmF5IiwiaWNvbkVycm9ycyIsImZvckVhY2giLCJpY29uIiwiZXJyb3IiLCJ2YWxpZGF0ZUljb25PYmoiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicHVzaCIsInZhbGlkYXRlUmVxdWlyZWRGaWVsZHMiLCJlcnJvcnMiLCJ2YWxpZGF0ZURpciIsIm9wdGlvbnNFcnJvcnMiLCJFTlVNX0RJUiIsInZhbGlkYXRlU2NvcGUiLCJ2YWxpZGF0ZURpc3BsYXkiLCJFTlVNX0RJU1BMQVkiLCJ2YWxpZGF0ZUJhY2tncm91bmRDb2xvciIsInZhbGlkYXRlUmVsYXRlZEFwcGxpY2F0aW9ucyIsInZhbGlkYXRlUHJlZmVyUmVsYXRlZEFwcGxpY2F0aW9ucyIsInZhbGlkYXRlQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzRXJyb3JzIiwiY2F0ZWdvcnkiLCJ2YWxpZGF0ZVNjcmVlbnNob3RzIiwidmFsaWRhdGVTaG9ydGN1dHMiLCJ2YWxpZGF0ZU9wdGlvbkZpZWxkcyIsInZhbGlkYXRlIiwib2xkTWFuaWZlc3QiLCJyZXF1aXJlZEZpZWxkc0Vycm9yIiwib3B0aW9uRmllbGRzRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTVDLEdBQWdFO0FBRjdFLEdBQVA7QUFJRCIsImZpbGUiOiIuL3V0aWxzL3ZhbGlkYXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgdmFsaWRhdGVTdHJpbmcsXG4gIHZhbGlkYXRlRmllbGRXaXRoRW51bSxcbiAgdmFsaWRhdGVJY29uT2JqLFxuICB2YWxpZGF0ZVN0cmluZ1dpdGhSZWdleFxufSBmcm9tICcuL3V0aWxzJztcblxuLypcbiBSZXF1aXJlZCBmaWVsZHM6XG4gICBuYW1lIG9yIHNob3J0X25hbWU6IHN0cmluZ1xuICAgZGVzY3JpcHRpb246IHN0cmluZ1xuICAgbGFuZzogc3RyaW5nXG4gICB0aGVtZV9jb2xvcjogc3RyaW5nXG4gICBvcmllbnRhdGlvbjogc3RyaW5nXG4gICBzdGFydF91cmw6IHN0cmluZ1xuICAgaWNvbnM6IEFycmF5IG9mIE9iamVjdFxuICovXG5cbi8qXG4gT3B0aW9uYWw6XG4gICBkaXI6IHN0cmluZ1xuICAgc2NvcGU6IHN0cmluZ1xuICAgZGlzcGxheTogc3RyaW5nXG4gICBiYWNrZ3JvdW5kX2NvbG9yOiBzdHJpbmdcbiAgIHJlbGF0ZWRfYXBwbGljYXRpb25zOiBBcnJheSBvZiBPYmplY3RcbiAgIHByZWZlcl9yZWxhdGVkX2FwcGxpY2F0aW9uczogYm9vbGVhblxuICAgY2F0ZWdvcmllczogQXJyYXkgb2Ygc3RyaW5nc1xuICAgc2NyZWVuc2hvdHM6IEFycmF5IG9mIE9iamVjdFxuICAgc2hvcnRjdXRzOiBBcnJheSBvZiBPYmplY3RcbiAqL1xuXG4vLyB2YWxpZGF0ZSByZXF1aXJlZCBmaWVsZHNcbmNvbnN0IHZhbGlkYXRlTmFtZSA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgdmFsaWRhdGVTdHJpbmcoJ25hbWUnLCBtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xufVxuXG5jb25zdCB2YWxpZGF0ZURlc2NyaXB0aW9uID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICB2YWxpZGF0ZVN0cmluZygnZGVzY3JpcHRpb24nLCBtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xufVxuXG5jb25zdCB2YWxpZGF0ZUxhbmcgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIHZhbGlkYXRlU3RyaW5nV2l0aFJlZ2V4KCdsYW5nJywgbWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbn1cblxuY29uc3QgdmFsaWRhdGVUaGVtZUNvbG9yID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICB2YWxpZGF0ZVN0cmluZygndGhlbWVfY29sb3InLCBtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xufVxuXG5jb25zdCB2YWxpZGF0ZU9yaXRhdGlvbiA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgY29uc3QgRU5VTV9PUklFTlRBVElPTiA9IFtcbiAgICAnYW55JyxcbiAgICAnbmF0dXJhbCcsXG4gICAgJ2xhbmRzY2FwZScsXG4gICAgJ2xhbmRzY2FwZS1wcmltYXJ5JyxcbiAgICAnbGFuZHNjYXBlLXNlY29uZGFyeScsXG4gICAgJ3BvcnRyYWl0JyxcbiAgICAncG9ydHJhaXQtcHJpbWFyeScsXG4gICAgJ3BvcnRyYWl0LXNlY29uZGFyeSdcbiAgXTtcbiAgdmFsaWRhdGVGaWVsZFdpdGhFbnVtKCdvcmllbnRhdGlvbicsIG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycywgRU5VTV9PUklFTlRBVElPTik7XG59XG5cbmNvbnN0IHZhbGlkYXRlU3RhcnRVcmwgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIHZhbGlkYXRlU3RyaW5nKCdzdGFydF91cmwnLCBtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xufVxuXG5jb25zdCB2YWxpZGF0ZUljb25zID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZignaWNvbnMnIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgaWNvbnMgPSBtYW5pZmVzdFsnaWNvbnMnXTtcbiAgICBpZighQXJyYXkuaXNBcnJheShpY29ucykpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmljb25zID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIHNob3VsZCBiZSBBcnJheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBpY29uRXJyb3JzID0gW107XG4gICAgICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdmFsaWRhdGVJY29uT2JqKGljb24pO1xuICAgICAgICBpZihPYmplY3Qua2V5cyhlcnJvcikubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGljb25FcnJvcnMucHVzaChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZihpY29uRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVxdWlyZWRFcnJvcnMuaWNvbnMgPSBpY29uRXJyb3JzO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5pY29ucyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVSZXF1aXJlZEZpZWxkcyA9IChtYW5pZmVzdCwgZXJyb3JzKSA9PiB7XG4gIGxldCByZXF1aXJlZEVycm9ycyA9IHt9O1xuICB2YWxpZGF0ZU5hbWUobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVEZXNjcmlwdGlvbihtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZUxhbmcobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVUaGVtZUNvbG9yKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlT3JpdGF0aW9uKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlU3RhcnRVcmwobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVJY29ucyhtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICByZXR1cm4gcmVxdWlyZWRFcnJvcnM7XG59XG5cbi8vIHZhbGlkYXRlIG9wdGlvbiBmaWVsZHNcblxuY29uc3QgdmFsaWRhdGVEaXIgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgY29uc3QgRU5VTV9ESVIgPSBbXG4gICAgJ3J0bCcsXG4gICAgJ2x0cicsXG4gICAgJ2F1dG8nXG4gIF07XG4gIHZhbGlkYXRlRmllbGRXaXRoRW51bSgnZGlyJywgbWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMsIEVOVU1fRElSKTtcbn1cblxuY29uc3QgdmFsaWRhdGVTY29wZSA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICB2YWxpZGF0ZVN0cmluZygnc2NvcGUnLCBtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG59XG5cbmNvbnN0IHZhbGlkYXRlRGlzcGxheSA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICBjb25zdCBFTlVNX0RJU1BMQVkgPSBbXG4gICAgJ2Z1bGxzY3JlZW4nLFxuICAgICdzdGFuZGFsb25lJyxcbiAgICAnbWluaW1hbC11aScsXG4gICAgJ2Jyb3dzZXInXG4gIF07XG4gIHZhbGlkYXRlRmllbGRXaXRoRW51bSgnZGlzcGxheScsIG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzLCBFTlVNX0RJU1BMQVkpO1xufVxuXG5jb25zdCB2YWxpZGF0ZUJhY2tncm91bmRDb2xvciA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICB2YWxpZGF0ZVN0cmluZygnYmFja2dyb3VuZF9jb2xvcicsIG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbn1cblxuY29uc3QgdmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIC8vIHRvZG86IHJlbGF0ZWRfYXBwbGljYXRpb25zIGZpZWxkc1xufVxuXG5jb25zdCB2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgLy8gdG9kbzogcHJlZmVyX3JlbGF0ZWRfYXBwbGljYXRpb25zIGZpZWxkc1xufVxuXG5jb25zdCB2YWxpZGF0ZUNhdGVnb3JpZXMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgaWYoJ2NhdGVnb3JpZXMnIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IG1hbmlmZXN0WydjYXRlZ29yaWVzJ107XG4gICAgaWYoIUFycmF5LmlzQXJyYXkoY2F0ZWdvcmllcykpIHtcbiAgICAgIG9wdGlvbnNFcnJvcnMuY2F0ZWdvcmllcyA9ICdtYW5pZmVzdCBjYXRlZ29yaWVzIGZpZWxkIHNob3VsZCBiZSBBcnJheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjYXRlZ29yaWVzRXJyb3JzID0gW107XG4gICAgICBjYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGlmKHR5cGVvZihjYXRlZ29yeSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY2F0ZWdvcmllc0Vycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnbWFuaWZlc3QgY2F0ZWdvcmllcyBmaWVsZCBjYXRlZ29yeSBzaG91bGQgYmUgU3RyaW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYoY2F0ZWdvcmllc0Vycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG9wdGlvbnNFcnJvcnMuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXNFcnJvcnM7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMuY2F0ZWdvcmllcyA9ICdtYW5pZmVzdCBjYXRlZ29yaWVzIGZpZWxkIGlzIG51bGwnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlU2NyZWVuc2hvdHMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgLy8gdG9kbzogc2NyZWVuU2hvdHMgZmllbGRzXG59XG5cbmNvbnN0IHZhbGlkYXRlU2hvcnRjdXRzID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIC8vIHRvZG86IHNob3J0Q3V0cyBmaWVsZHNcbn1cblxuY29uc3QgdmFsaWRhdGVPcHRpb25GaWVsZHMgPSAobWFuaWZlc3QpID0+IHtcbiAgbGV0IG9wdGlvbnNFcnJvcnMgPSB7fTtcbiAgdmFsaWRhdGVEaXIobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNjb3BlKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVEaXNwbGF5KG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZUNhdGVnb3JpZXMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNjcmVlbnNob3RzKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVTaG9ydGN1dHMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICByZXR1cm4gb3B0aW9uc0Vycm9ycztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUob2xkTWFuaWZlc3QpIHtcbiAgY29uc3QgcmVxdWlyZWRGaWVsZHNFcnJvciA9IHZhbGlkYXRlUmVxdWlyZWRGaWVsZHMob2xkTWFuaWZlc3QpO1xuICBjb25zdCBvcHRpb25GaWVsZHNFcnJvciA9IHZhbGlkYXRlT3B0aW9uRmllbGRzKG9sZE1hbmlmZXN0KTtcbiAgcmV0dXJuIHtcbiAgICAnUmVxdWlyZWRGaWVsZHMnOiBPYmplY3Qua2V5cyhyZXF1aXJlZEZpZWxkc0Vycm9yKS5sZW5ndGggPiAwID8gcmVxdWlyZWRGaWVsZHNFcnJvciA6ICdSZXF1aXJlZCBmaWVsZHMgaGF2ZSBubyBlcnJvciEhIScsXG4gICAgJ09wdGlvbmFsRmllbGRzJzogT2JqZWN0LmtleXMob3B0aW9uRmllbGRzRXJyb3IpLmxlbmd0aCA+IDAgPyBvcHRpb25GaWVsZHNFcnJvciA6ICdPcHRpb25hbCBmaWVsZHMgaGF2ZSBubyBlcnJvciEhIScsXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})
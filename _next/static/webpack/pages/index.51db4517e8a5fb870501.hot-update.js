webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./utils/utils.js\");\n\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\n// validate required fields\n\nvar validateName = function validateName(manifest, requiredErrors) {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateString\"])('name', manifest, requiredErrors);\n};\n\nvar validateDescription = function validateDescription(manifest, requiredErrors) {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateString\"])('description', manifest, requiredErrors);\n};\n\nvar validateLang = function validateLang(manifest, requiredErrors) {\n  if ('lang' in manifest) {\n    var manifestLang = manifest['lang'];\n\n    if (typeof manifestLang !== 'string') {\n      requiredErrors.lang = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(manifestLang)) {\n        requiredErrors.lang = 'manifest lang field type should be correct format!';\n      }\n    }\n  } else {\n    requiredErrors.lang = 'manifest lang field is required!';\n  }\n\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateStringWithRegex\"])();\n};\n\nvar validateThemeColor = function validateThemeColor(manifest, requiredErrors) {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateString\"])('theme_color', manifest, requiredErrors);\n};\n\nvar validateOritation = function validateOritation(manifest, requiredErrors) {\n  var ENUM_ORIENTATION = ['any', 'natural', 'landscape', 'landscape-primary', 'landscape-secondary', 'portrait', 'portrait-primary', 'portrait-secondary'];\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateFieldWithEnum\"])('orientation', manifest, requiredErrors, ENUM_ORIENTATION);\n};\n\nvar validateStartUrl = function validateStartUrl(manifest, requiredErrors) {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateString\"])('start_url', manifest, requiredErrors);\n};\n\nvar validateIcons = function validateIcons(manifest, requiredErrors) {\n  if ('icons' in manifest) {\n    var icons = manifest['icons'];\n\n    if (!Array.isArray(icons)) {\n      requiredErrors.icons = 'manifest icons field should be Array';\n    } else {\n      var iconErrors = [];\n      icons.forEach(function (icon) {\n        var error = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateIconObj\"])(icon);\n\n        if (Object.keys(error).length > 0) {\n          iconErrors.push(error);\n        }\n      });\n\n      if (iconErrors.length > 0) {\n        requiredErrors.icons = iconErrors;\n      }\n    }\n  } else {\n    requiredErrors.icons = 'manifest icons field is required';\n  }\n};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  var requiredErrors = {};\n  validateName(manifest, requiredErrors);\n  validateDescription(manifest, requiredErrors);\n  validateLang(manifest, requiredErrors);\n  validateThemeColor(manifest, requiredErrors);\n  validateOritation(manifest, requiredErrors);\n  validateStartUrl(manifest, requiredErrors);\n  validateIcons(manifest, requiredErrors);\n  return requiredErrors;\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest, optionsErrors) {\n  var ENUM_DIR = ['rtl', 'ltr', 'auto'];\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateFieldWithEnum\"])('dir', manifest, optionsErrors, ENUM_DIR);\n};\n\nvar validateScope = function validateScope(manifest, optionsErrors) {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateString\"])('scope', manifest, optionsErrors);\n};\n\nvar validateDisplay = function validateDisplay(manifest, optionsErrors) {\n  var ENUM_DISPLAY = ['fullscreen', 'standalone', 'minimal-ui', 'browser'];\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateFieldWithEnum\"])('display', manifest, optionsErrors, ENUM_DISPLAY);\n};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest, optionsErrors) {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateString\"])('background_color', manifest, optionsErrors);\n};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest, optionsErrors) {// todo: related_applications fields\n};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest, optionsErrors) {// todo: prefer_related_applications fields\n};\n\nvar validateCategories = function validateCategories(manifest, optionsErrors) {\n  if ('categories' in manifest) {\n    var categories = manifest['categories'];\n\n    if (!Array.isArray(categories)) {\n      optionsErrors.categories = 'manifest categories field should be Array';\n    } else {\n      var categoriesErrors = [];\n      categories.forEach(function (category) {\n        if (typeof category !== 'string') {\n          categoriesErrors.push({\n            category: 'manifest categories field category should be String'\n          });\n        }\n      });\n\n      if (categoriesErrors.length > 0) {\n        optionsErrors.categories = categoriesErrors;\n      }\n    }\n  } else {\n    optionsErrors.categories = 'manifest categories field is null';\n  }\n};\n\nvar validateScreenshots = function validateScreenshots(manifest, optionsErrors) {// todo: screenShots fields\n};\n\nvar validateShortcuts = function validateShortcuts(manifest, optionsErrors) {// todo: shortCuts fields\n};\n\nvar validateOptionFields = function validateOptionFields(manifest) {\n  var optionsErrors = {};\n  validateDir(manifest, optionsErrors);\n  validateScope(manifest, optionsErrors);\n  validateDisplay(manifest, optionsErrors);\n  validateBackgroundColor(manifest, optionsErrors);\n  validateRelatedApplications(manifest, optionsErrors);\n  validatePreferRelatedApplications(manifest, optionsErrors);\n  validateCategories(manifest, optionsErrors);\n  validateScreenshots(manifest, optionsErrors);\n  validateShortcuts(manifest, optionsErrors);\n  return optionsErrors;\n};\n\nfunction validate(oldManifest) {\n  var requiredFieldsError = validateRequiredFields(oldManifest);\n  var optionFieldsError = validateOptionFields(oldManifest);\n  return {\n    'RequiredFields': Object.keys(requiredFieldsError).length > 0 ? requiredFieldsError : 'Required fields have no error!!!',\n    'OptionalFields': Object.keys(optionFieldsError).length > 0 ? optionFieldsError : 'Optional fields have no error!!!'\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZU5hbWUiLCJtYW5pZmVzdCIsInJlcXVpcmVkRXJyb3JzIiwidmFsaWRhdGVTdHJpbmciLCJ2YWxpZGF0ZURlc2NyaXB0aW9uIiwidmFsaWRhdGVMYW5nIiwibWFuaWZlc3RMYW5nIiwibGFuZyIsInRlc3QiLCJ2YWxpZGF0ZVN0cmluZ1dpdGhSZWdleCIsInZhbGlkYXRlVGhlbWVDb2xvciIsInZhbGlkYXRlT3JpdGF0aW9uIiwiRU5VTV9PUklFTlRBVElPTiIsInZhbGlkYXRlRmllbGRXaXRoRW51bSIsInZhbGlkYXRlU3RhcnRVcmwiLCJ2YWxpZGF0ZUljb25zIiwiaWNvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJpY29uRXJyb3JzIiwiZm9yRWFjaCIsImljb24iLCJlcnJvciIsInZhbGlkYXRlSWNvbk9iaiIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJwdXNoIiwidmFsaWRhdGVSZXF1aXJlZEZpZWxkcyIsImVycm9ycyIsInZhbGlkYXRlRGlyIiwib3B0aW9uc0Vycm9ycyIsIkVOVU1fRElSIiwidmFsaWRhdGVTY29wZSIsInZhbGlkYXRlRGlzcGxheSIsIkVOVU1fRElTUExBWSIsInZhbGlkYXRlQmFja2dyb3VuZENvbG9yIiwidmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zIiwidmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zIiwidmFsaWRhdGVDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsImNhdGVnb3JpZXNFcnJvcnMiLCJjYXRlZ29yeSIsInZhbGlkYXRlU2NyZWVuc2hvdHMiLCJ2YWxpZGF0ZVNob3J0Y3V0cyIsInZhbGlkYXRlT3B0aW9uRmllbGRzIiwidmFsaWRhdGUiLCJvbGRNYW5pZmVzdCIsInJlcXVpcmVkRmllbGRzRXJyb3IiLCJvcHRpb25GaWVsZHNFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFB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LFFBQVQsQ0FBa0JDLFdBQWxCLEVBQStCO0FBQzVDLE1BQU1DLG1CQUFtQixHQUFHcEIsc0JBQXNCLENBQUNtQixXQUFELENBQWxEO0FBQ0EsTUFBTUUsaUJBQWlCLEdBQUdKLG9CQUFvQixDQUFDRSxXQUFELENBQTlDO0FBQ0EsU0FBTztBQUNMLHNCQUFrQnZCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZdUIsbUJBQVosRUFBaUN0QixNQUFqQyxHQUEwQyxDQUExQyxHQUE4Q3NCLG1CQUE5QyxHQUFvRSxrQ0FEakY7QUFFTCxzQkFBa0J4QixNQUFNLENBQUNDLElBQVAsQ0FBWXdCLGlCQUFaLEVBQStCdkIsTUFBL0IsR0FBd0MsQ0FBeEMsR0FBNEN1QixpQkFBNUMsR0FBZ0U7QUFGN0UsR0FBUDtBQUlEIiwiZmlsZSI6Ii4vdXRpbHMvdmFsaWRhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB2YWxpZGF0ZVN0cmluZyxcbiAgdmFsaWRhdGVGaWVsZFdpdGhFbnVtLFxuICB2YWxpZGF0ZUljb25PYmosXG4gIHZhbGlkYXRlU3RyaW5nV2l0aFJlZ2V4XG59IGZyb20gJy4vdXRpbHMnO1xuXG4vKlxuIFJlcXVpcmVkIGZpZWxkczpcbiAgIG5hbWUgb3Igc2hvcnRfbmFtZTogc3RyaW5nXG4gICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICBsYW5nOiBzdHJpbmdcbiAgIHRoZW1lX2NvbG9yOiBzdHJpbmdcbiAgIG9yaWVudGF0aW9uOiBzdHJpbmdcbiAgIHN0YXJ0X3VybDogc3RyaW5nXG4gICBpY29uczogQXJyYXkgb2YgT2JqZWN0XG4gKi9cblxuLypcbiBPcHRpb25hbDpcbiAgIGRpcjogc3RyaW5nXG4gICBzY29wZTogc3RyaW5nXG4gICBkaXNwbGF5OiBzdHJpbmdcbiAgIGJhY2tncm91bmRfY29sb3I6IHN0cmluZ1xuICAgcmVsYXRlZF9hcHBsaWNhdGlvbnM6IEFycmF5IG9mIE9iamVjdFxuICAgcHJlZmVyX3JlbGF0ZWRfYXBwbGljYXRpb25zOiBib29sZWFuXG4gICBjYXRlZ29yaWVzOiBBcnJheSBvZiBzdHJpbmdzXG4gICBzY3JlZW5zaG90czogQXJyYXkgb2YgT2JqZWN0XG4gICBzaG9ydGN1dHM6IEFycmF5IG9mIE9iamVjdFxuICovXG5cbi8vIHZhbGlkYXRlIHJlcXVpcmVkIGZpZWxkc1xuY29uc3QgdmFsaWRhdGVOYW1lID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICB2YWxpZGF0ZVN0cmluZygnbmFtZScsIG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG59XG5cbmNvbnN0IHZhbGlkYXRlRGVzY3JpcHRpb24gPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIHZhbGlkYXRlU3RyaW5nKCdkZXNjcmlwdGlvbicsIG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG59XG5cbmNvbnN0IHZhbGlkYXRlTGFuZyA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYoJ2xhbmcnIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgbWFuaWZlc3RMYW5nID0gbWFuaWZlc3RbJ2xhbmcnXTtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RMYW5nKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmchJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoIS9eXFx3KigtXFx3KikqJC8udGVzdChtYW5pZmVzdExhbmcpKSB7XG4gICAgICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCB0eXBlIHNob3VsZCBiZSBjb3JyZWN0IGZvcm1hdCEnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5sYW5nID0gJ21hbmlmZXN0IGxhbmcgZmllbGQgaXMgcmVxdWlyZWQhJ1xuICB9XG5cbiAgdmFsaWRhdGVTdHJpbmdXaXRoUmVnZXgoKTtcbn1cblxuY29uc3QgdmFsaWRhdGVUaGVtZUNvbG9yID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICB2YWxpZGF0ZVN0cmluZygndGhlbWVfY29sb3InLCBtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xufVxuXG5jb25zdCB2YWxpZGF0ZU9yaXRhdGlvbiA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgY29uc3QgRU5VTV9PUklFTlRBVElPTiA9IFtcbiAgICAnYW55JyxcbiAgICAnbmF0dXJhbCcsXG4gICAgJ2xhbmRzY2FwZScsXG4gICAgJ2xhbmRzY2FwZS1wcmltYXJ5JyxcbiAgICAnbGFuZHNjYXBlLXNlY29uZGFyeScsXG4gICAgJ3BvcnRyYWl0JyxcbiAgICAncG9ydHJhaXQtcHJpbWFyeScsXG4gICAgJ3BvcnRyYWl0LXNlY29uZGFyeSdcbiAgXTtcbiAgdmFsaWRhdGVGaWVsZFdpdGhFbnVtKCdvcmllbnRhdGlvbicsIG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycywgRU5VTV9PUklFTlRBVElPTik7XG59XG5cbmNvbnN0IHZhbGlkYXRlU3RhcnRVcmwgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIHZhbGlkYXRlU3RyaW5nKCdzdGFydF91cmwnLCBtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xufVxuXG5jb25zdCB2YWxpZGF0ZUljb25zID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZignaWNvbnMnIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgaWNvbnMgPSBtYW5pZmVzdFsnaWNvbnMnXTtcbiAgICBpZighQXJyYXkuaXNBcnJheShpY29ucykpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmljb25zID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIHNob3VsZCBiZSBBcnJheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBpY29uRXJyb3JzID0gW107XG4gICAgICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdmFsaWRhdGVJY29uT2JqKGljb24pO1xuICAgICAgICBpZihPYmplY3Qua2V5cyhlcnJvcikubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGljb25FcnJvcnMucHVzaChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZihpY29uRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVxdWlyZWRFcnJvcnMuaWNvbnMgPSBpY29uRXJyb3JzO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5pY29ucyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVSZXF1aXJlZEZpZWxkcyA9IChtYW5pZmVzdCwgZXJyb3JzKSA9PiB7XG4gIGxldCByZXF1aXJlZEVycm9ycyA9IHt9O1xuICB2YWxpZGF0ZU5hbWUobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVEZXNjcmlwdGlvbihtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZUxhbmcobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVUaGVtZUNvbG9yKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlT3JpdGF0aW9uKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlU3RhcnRVcmwobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVJY29ucyhtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICByZXR1cm4gcmVxdWlyZWRFcnJvcnM7XG59XG5cbi8vIHZhbGlkYXRlIG9wdGlvbiBmaWVsZHNcblxuY29uc3QgdmFsaWRhdGVEaXIgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgY29uc3QgRU5VTV9ESVIgPSBbXG4gICAgJ3J0bCcsXG4gICAgJ2x0cicsXG4gICAgJ2F1dG8nXG4gIF07XG4gIHZhbGlkYXRlRmllbGRXaXRoRW51bSgnZGlyJywgbWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMsIEVOVU1fRElSKTtcbn1cblxuY29uc3QgdmFsaWRhdGVTY29wZSA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICB2YWxpZGF0ZVN0cmluZygnc2NvcGUnLCBtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG59XG5cbmNvbnN0IHZhbGlkYXRlRGlzcGxheSA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICBjb25zdCBFTlVNX0RJU1BMQVkgPSBbXG4gICAgJ2Z1bGxzY3JlZW4nLFxuICAgICdzdGFuZGFsb25lJyxcbiAgICAnbWluaW1hbC11aScsXG4gICAgJ2Jyb3dzZXInXG4gIF07XG4gIHZhbGlkYXRlRmllbGRXaXRoRW51bSgnZGlzcGxheScsIG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzLCBFTlVNX0RJU1BMQVkpO1xufVxuXG5jb25zdCB2YWxpZGF0ZUJhY2tncm91bmRDb2xvciA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICB2YWxpZGF0ZVN0cmluZygnYmFja2dyb3VuZF9jb2xvcicsIG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbn1cblxuY29uc3QgdmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIC8vIHRvZG86IHJlbGF0ZWRfYXBwbGljYXRpb25zIGZpZWxkc1xufVxuXG5jb25zdCB2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgLy8gdG9kbzogcHJlZmVyX3JlbGF0ZWRfYXBwbGljYXRpb25zIGZpZWxkc1xufVxuXG5jb25zdCB2YWxpZGF0ZUNhdGVnb3JpZXMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgaWYoJ2NhdGVnb3JpZXMnIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IG1hbmlmZXN0WydjYXRlZ29yaWVzJ107XG4gICAgaWYoIUFycmF5LmlzQXJyYXkoY2F0ZWdvcmllcykpIHtcbiAgICAgIG9wdGlvbnNFcnJvcnMuY2F0ZWdvcmllcyA9ICdtYW5pZmVzdCBjYXRlZ29yaWVzIGZpZWxkIHNob3VsZCBiZSBBcnJheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjYXRlZ29yaWVzRXJyb3JzID0gW107XG4gICAgICBjYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGlmKHR5cGVvZihjYXRlZ29yeSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY2F0ZWdvcmllc0Vycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnbWFuaWZlc3QgY2F0ZWdvcmllcyBmaWVsZCBjYXRlZ29yeSBzaG91bGQgYmUgU3RyaW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYoY2F0ZWdvcmllc0Vycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG9wdGlvbnNFcnJvcnMuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXNFcnJvcnM7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMuY2F0ZWdvcmllcyA9ICdtYW5pZmVzdCBjYXRlZ29yaWVzIGZpZWxkIGlzIG51bGwnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlU2NyZWVuc2hvdHMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgLy8gdG9kbzogc2NyZWVuU2hvdHMgZmllbGRzXG59XG5cbmNvbnN0IHZhbGlkYXRlU2hvcnRjdXRzID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIC8vIHRvZG86IHNob3J0Q3V0cyBmaWVsZHNcbn1cblxuY29uc3QgdmFsaWRhdGVPcHRpb25GaWVsZHMgPSAobWFuaWZlc3QpID0+IHtcbiAgbGV0IG9wdGlvbnNFcnJvcnMgPSB7fTtcbiAgdmFsaWRhdGVEaXIobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNjb3BlKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVEaXNwbGF5KG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZUNhdGVnb3JpZXMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNjcmVlbnNob3RzKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVTaG9ydGN1dHMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICByZXR1cm4gb3B0aW9uc0Vycm9ycztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUob2xkTWFuaWZlc3QpIHtcbiAgY29uc3QgcmVxdWlyZWRGaWVsZHNFcnJvciA9IHZhbGlkYXRlUmVxdWlyZWRGaWVsZHMob2xkTWFuaWZlc3QpO1xuICBjb25zdCBvcHRpb25GaWVsZHNFcnJvciA9IHZhbGlkYXRlT3B0aW9uRmllbGRzKG9sZE1hbmlmZXN0KTtcbiAgcmV0dXJuIHtcbiAgICAnUmVxdWlyZWRGaWVsZHMnOiBPYmplY3Qua2V5cyhyZXF1aXJlZEZpZWxkc0Vycm9yKS5sZW5ndGggPiAwID8gcmVxdWlyZWRGaWVsZHNFcnJvciA6ICdSZXF1aXJlZCBmaWVsZHMgaGF2ZSBubyBlcnJvciEhIScsXG4gICAgJ09wdGlvbmFsRmllbGRzJzogT2JqZWN0LmtleXMob3B0aW9uRmllbGRzRXJyb3IpLmxlbmd0aCA+IDAgPyBvcHRpb25GaWVsZHNFcnJvciA6ICdPcHRpb25hbCBmaWVsZHMgaGF2ZSBubyBlcnJvciEhIScsXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})
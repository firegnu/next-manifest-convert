webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./utils/utils.js\");\n\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\n// validate required fields\n\nvar validateName = function validateName(manifest, requiredErrors) {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateString\"])('name', manifest, requiredErrors);\n};\n\nvar validateDescription = function validateDescription(manifest, requiredErrors) {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateString\"])('description', manifest, requiredErrors);\n};\n\nvar validateLang = function validateLang(manifest, requiredErrors) {\n  if ('lang' in manifest) {\n    var manifestLang = manifest['lang'];\n\n    if (typeof manifestLang !== 'string') {\n      requiredErrors.lang = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(manifestLang)) {\n        requiredErrors.lang = 'manifest lang field type should be correct format!';\n      }\n    }\n  } else {\n    requiredErrors.lang = 'manifest lang field is required!';\n  }\n\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateStringWithRegex\"])('lang');\n};\n\nvar validateThemeColor = function validateThemeColor(manifest, requiredErrors) {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateString\"])('theme_color', manifest, requiredErrors);\n};\n\nvar validateOritation = function validateOritation(manifest, requiredErrors) {\n  var ENUM_ORIENTATION = ['any', 'natural', 'landscape', 'landscape-primary', 'landscape-secondary', 'portrait', 'portrait-primary', 'portrait-secondary'];\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateFieldWithEnum\"])('orientation', manifest, requiredErrors, ENUM_ORIENTATION);\n};\n\nvar validateStartUrl = function validateStartUrl(manifest, requiredErrors) {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateString\"])('start_url', manifest, requiredErrors);\n};\n\nvar validateIcons = function validateIcons(manifest, requiredErrors) {\n  if ('icons' in manifest) {\n    var icons = manifest['icons'];\n\n    if (!Array.isArray(icons)) {\n      requiredErrors.icons = 'manifest icons field should be Array';\n    } else {\n      var iconErrors = [];\n      icons.forEach(function (icon) {\n        var error = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateIconObj\"])(icon);\n\n        if (Object.keys(error).length > 0) {\n          iconErrors.push(error);\n        }\n      });\n\n      if (iconErrors.length > 0) {\n        requiredErrors.icons = iconErrors;\n      }\n    }\n  } else {\n    requiredErrors.icons = 'manifest icons field is required';\n  }\n};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  var requiredErrors = {};\n  validateName(manifest, requiredErrors);\n  validateDescription(manifest, requiredErrors);\n  validateLang(manifest, requiredErrors);\n  validateThemeColor(manifest, requiredErrors);\n  validateOritation(manifest, requiredErrors);\n  validateStartUrl(manifest, requiredErrors);\n  validateIcons(manifest, requiredErrors);\n  return requiredErrors;\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest, optionsErrors) {\n  var ENUM_DIR = ['rtl', 'ltr', 'auto'];\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateFieldWithEnum\"])('dir', manifest, optionsErrors, ENUM_DIR);\n};\n\nvar validateScope = function validateScope(manifest, optionsErrors) {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateString\"])('scope', manifest, optionsErrors);\n};\n\nvar validateDisplay = function validateDisplay(manifest, optionsErrors) {\n  var ENUM_DISPLAY = ['fullscreen', 'standalone', 'minimal-ui', 'browser'];\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateFieldWithEnum\"])('display', manifest, optionsErrors, ENUM_DISPLAY);\n};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest, optionsErrors) {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateString\"])('background_color', manifest, optionsErrors);\n};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest, optionsErrors) {// todo: related_applications fields\n};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest, optionsErrors) {// todo: prefer_related_applications fields\n};\n\nvar validateCategories = function validateCategories(manifest, optionsErrors) {\n  if ('categories' in manifest) {\n    var categories = manifest['categories'];\n\n    if (!Array.isArray(categories)) {\n      optionsErrors.categories = 'manifest categories field should be Array';\n    } else {\n      var categoriesErrors = [];\n      categories.forEach(function (category) {\n        if (typeof category !== 'string') {\n          categoriesErrors.push({\n            category: 'manifest categories field category should be String'\n          });\n        }\n      });\n\n      if (categoriesErrors.length > 0) {\n        optionsErrors.categories = categoriesErrors;\n      }\n    }\n  } else {\n    optionsErrors.categories = 'manifest categories field is null';\n  }\n};\n\nvar validateScreenshots = function validateScreenshots(manifest, optionsErrors) {// todo: screenShots fields\n};\n\nvar validateShortcuts = function validateShortcuts(manifest, optionsErrors) {// todo: shortCuts fields\n};\n\nvar validateOptionFields = function validateOptionFields(manifest) {\n  var optionsErrors = {};\n  validateDir(manifest, optionsErrors);\n  validateScope(manifest, optionsErrors);\n  validateDisplay(manifest, optionsErrors);\n  validateBackgroundColor(manifest, optionsErrors);\n  validateRelatedApplications(manifest, optionsErrors);\n  validatePreferRelatedApplications(manifest, optionsErrors);\n  validateCategories(manifest, optionsErrors);\n  validateScreenshots(manifest, optionsErrors);\n  validateShortcuts(manifest, optionsErrors);\n  return optionsErrors;\n};\n\nfunction validate(oldManifest) {\n  var requiredFieldsError = validateRequiredFields(oldManifest);\n  var optionFieldsError = validateOptionFields(oldManifest);\n  return {\n    'RequiredFields': Object.keys(requiredFieldsError).length > 0 ? requiredFieldsError : 'Required fields have no error!!!',\n    'OptionalFields': Object.keys(optionFieldsError).length > 0 ? optionFieldsError : 'Optional fields have no error!!!'\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZU5hbWUiLCJtYW5pZmVzdCIsInJlcXVpcmVkRXJyb3JzIiwidmFsaWRhdGVTdHJpbmciLCJ2YWxpZGF0ZURlc2NyaXB0aW9uIiwidmFsaWRhdGVMYW5nIiwibWFuaWZlc3RMYW5nIiwibGFuZyIsInRlc3QiLCJ2YWxpZGF0ZVN0cmluZ1dpdGhSZWdleCIsInZhbGlkYXRlVGhlbWVDb2xvciIsInZhbGlkYXRlT3JpdGF0aW9uIiwiRU5VTV9PUklFTlRBVElPTiIsInZhbGlkYXRlRmllbGRXaXRoRW51bSIsInZhbGlkYXRlU3RhcnRVcmwiLCJ2YWxpZGF0ZUljb25zIiwiaWNvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJpY29uRXJyb3JzIiwiZm9yRWFjaCIsImljb24iLCJlcnJvciIsInZhbGlkYXRlSWNvbk9iaiIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJwdXNoIiwidmFsaWRhdGVSZXF1aXJlZEZpZWxkcyIsImVycm9ycyIsInZhbGlkYXRlRGlyIiwib3B0aW9uc0Vycm9ycyIsIkVOVU1fRElSIiwidmFsaWRhdGVTY29wZSIsInZhbGlkYXRlRGlzcGxheSIsIkVOVU1fRElTUExBWSIsInZhbGlkYXRlQmFja2dyb3VuZENvbG9yIiwidmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zIiwidmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zIiwidmFsaWRhdGVDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsImNhdGVnb3JpZXNFcnJvcnMiLCJjYXRlZ29yeSIsInZhbGlkYXRlU2NyZWVuc2hvdHMiLCJ2YWxpZGF0ZVNob3J0Y3V0cyIsInZhbGlkYXRlT3B0aW9uRmllbGRzIiwidmFsaWRhdGUiLCJvbGRNYW5pZmVzdCIsInJlcXVpcmVkRmllbGRzRXJyb3IiLCJvcHRpb25GaWVsZHNFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFB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QVpEOztBQWNlLFNBQVNlLFFBQVQsQ0FBa0JDLFdBQWxCLEVBQStCO0FBQzVDLE1BQU1DLG1CQUFtQixHQUFHcEIsc0JBQXNCLENBQUNtQixXQUFELENBQWxEO0FBQ0EsTUFBTUUsaUJBQWlCLEdBQUdKLG9CQUFvQixDQUFDRSxXQUFELENBQTlDO0FBQ0EsU0FBTztBQUNMLHNCQUFrQnZCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZdUIsbUJBQVosRUFBaUN0QixNQUFqQyxHQUEwQyxDQUExQyxHQUE4Q3NCLG1CQUE5QyxHQUFvRSxrQ0FEakY7QUFFTCxzQkFBa0J4QixNQUFNLENBQUNDLElBQVAsQ0FBWXdCLGlCQUFaLEVBQStCdkIsTUFBL0IsR0FBd0MsQ0FBeEMsR0FBNEN1QixpQkFBNUMsR0FBZ0U7QUFGN0UsR0FBUDtBQUlEIiwiZmlsZSI6Ii4vdXRpbHMvdmFsaWRhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB2YWxpZGF0ZVN0cmluZyxcbiAgdmFsaWRhdGVGaWVsZFdpdGhFbnVtLFxuICB2YWxpZGF0ZUljb25PYmosXG4gIHZhbGlkYXRlU3RyaW5nV2l0aFJlZ2V4XG59IGZyb20gJy4vdXRpbHMnO1xuXG4vKlxuIFJlcXVpcmVkIGZpZWxkczpcbiAgIG5hbWUgb3Igc2hvcnRfbmFtZTogc3RyaW5nXG4gICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICBsYW5nOiBzdHJpbmdcbiAgIHRoZW1lX2NvbG9yOiBzdHJpbmdcbiAgIG9yaWVudGF0aW9uOiBzdHJpbmdcbiAgIHN0YXJ0X3VybDogc3RyaW5nXG4gICBpY29uczogQXJyYXkgb2YgT2JqZWN0XG4gKi9cblxuLypcbiBPcHRpb25hbDpcbiAgIGRpcjogc3RyaW5nXG4gICBzY29wZTogc3RyaW5nXG4gICBkaXNwbGF5OiBzdHJpbmdcbiAgIGJhY2tncm91bmRfY29sb3I6IHN0cmluZ1xuICAgcmVsYXRlZF9hcHBsaWNhdGlvbnM6IEFycmF5IG9mIE9iamVjdFxuICAgcHJlZmVyX3JlbGF0ZWRfYXBwbGljYXRpb25zOiBib29sZWFuXG4gICBjYXRlZ29yaWVzOiBBcnJheSBvZiBzdHJpbmdzXG4gICBzY3JlZW5zaG90czogQXJyYXkgb2YgT2JqZWN0XG4gICBzaG9ydGN1dHM6IEFycmF5IG9mIE9iamVjdFxuICovXG5cbi8vIHZhbGlkYXRlIHJlcXVpcmVkIGZpZWxkc1xuY29uc3QgdmFsaWRhdGVOYW1lID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICB2YWxpZGF0ZVN0cmluZygnbmFtZScsIG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG59XG5cbmNvbnN0IHZhbGlkYXRlRGVzY3JpcHRpb24gPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIHZhbGlkYXRlU3RyaW5nKCdkZXNjcmlwdGlvbicsIG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG59XG5cbmNvbnN0IHZhbGlkYXRlTGFuZyA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYoJ2xhbmcnIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgbWFuaWZlc3RMYW5nID0gbWFuaWZlc3RbJ2xhbmcnXTtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RMYW5nKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmchJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoIS9eXFx3KigtXFx3KikqJC8udGVzdChtYW5pZmVzdExhbmcpKSB7XG4gICAgICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCB0eXBlIHNob3VsZCBiZSBjb3JyZWN0IGZvcm1hdCEnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5sYW5nID0gJ21hbmlmZXN0IGxhbmcgZmllbGQgaXMgcmVxdWlyZWQhJ1xuICB9XG5cbiAgdmFsaWRhdGVTdHJpbmdXaXRoUmVnZXgoJ2xhbmcnLCApO1xufVxuXG5jb25zdCB2YWxpZGF0ZVRoZW1lQ29sb3IgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIHZhbGlkYXRlU3RyaW5nKCd0aGVtZV9jb2xvcicsIG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG59XG5cbmNvbnN0IHZhbGlkYXRlT3JpdGF0aW9uID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBjb25zdCBFTlVNX09SSUVOVEFUSU9OID0gW1xuICAgICdhbnknLFxuICAgICduYXR1cmFsJyxcbiAgICAnbGFuZHNjYXBlJyxcbiAgICAnbGFuZHNjYXBlLXByaW1hcnknLFxuICAgICdsYW5kc2NhcGUtc2Vjb25kYXJ5JyxcbiAgICAncG9ydHJhaXQnLFxuICAgICdwb3J0cmFpdC1wcmltYXJ5JyxcbiAgICAncG9ydHJhaXQtc2Vjb25kYXJ5J1xuICBdO1xuICB2YWxpZGF0ZUZpZWxkV2l0aEVudW0oJ29yaWVudGF0aW9uJywgbWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzLCBFTlVNX09SSUVOVEFUSU9OKTtcbn1cblxuY29uc3QgdmFsaWRhdGVTdGFydFVybCA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgdmFsaWRhdGVTdHJpbmcoJ3N0YXJ0X3VybCcsIG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG59XG5cbmNvbnN0IHZhbGlkYXRlSWNvbnMgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmKCdpY29ucycgaW4gbWFuaWZlc3QpIHtcbiAgICBjb25zdCBpY29ucyA9IG1hbmlmZXN0WydpY29ucyddO1xuICAgIGlmKCFBcnJheS5pc0FycmF5KGljb25zKSkge1xuICAgICAgcmVxdWlyZWRFcnJvcnMuaWNvbnMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgc2hvdWxkIGJlIEFycmF5JztcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGljb25FcnJvcnMgPSBbXTtcbiAgICAgIGljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB2YWxpZGF0ZUljb25PYmooaWNvbik7XG4gICAgICAgIGlmKE9iamVjdC5rZXlzKGVycm9yKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWNvbkVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmKGljb25FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXF1aXJlZEVycm9ycy5pY29ucyA9IGljb25FcnJvcnM7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLmljb25zID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVJlcXVpcmVkRmllbGRzID0gKG1hbmlmZXN0LCBlcnJvcnMpID0+IHtcbiAgbGV0IHJlcXVpcmVkRXJyb3JzID0ge307XG4gIHZhbGlkYXRlTmFtZShtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZURlc2NyaXB0aW9uKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlTGFuZyhtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZVRoZW1lQ29sb3IobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVPcml0YXRpb24obWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVTdGFydFVybChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZUljb25zKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHJldHVybiByZXF1aXJlZEVycm9ycztcbn1cblxuLy8gdmFsaWRhdGUgb3B0aW9uIGZpZWxkc1xuXG5jb25zdCB2YWxpZGF0ZURpciA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICBjb25zdCBFTlVNX0RJUiA9IFtcbiAgICAncnRsJyxcbiAgICAnbHRyJyxcbiAgICAnYXV0bydcbiAgXTtcbiAgdmFsaWRhdGVGaWVsZFdpdGhFbnVtKCdkaXInLCBtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycywgRU5VTV9ESVIpO1xufVxuXG5jb25zdCB2YWxpZGF0ZVNjb3BlID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIHZhbGlkYXRlU3RyaW5nKCdzY29wZScsIG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbn1cblxuY29uc3QgdmFsaWRhdGVEaXNwbGF5ID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIGNvbnN0IEVOVU1fRElTUExBWSA9IFtcbiAgICAnZnVsbHNjcmVlbicsXG4gICAgJ3N0YW5kYWxvbmUnLFxuICAgICdtaW5pbWFsLXVpJyxcbiAgICAnYnJvd3NlcidcbiAgXTtcbiAgdmFsaWRhdGVGaWVsZFdpdGhFbnVtKCdkaXNwbGF5JywgbWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMsIEVOVU1fRElTUExBWSk7XG59XG5cbmNvbnN0IHZhbGlkYXRlQmFja2dyb3VuZENvbG9yID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIHZhbGlkYXRlU3RyaW5nKCdiYWNrZ3JvdW5kX2NvbG9yJywgbWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xufVxuXG5jb25zdCB2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgLy8gdG9kbzogcmVsYXRlZF9hcHBsaWNhdGlvbnMgZmllbGRzXG59XG5cbmNvbnN0IHZhbGlkYXRlUHJlZmVyUmVsYXRlZEFwcGxpY2F0aW9ucyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICAvLyB0b2RvOiBwcmVmZXJfcmVsYXRlZF9hcHBsaWNhdGlvbnMgZmllbGRzXG59XG5cbmNvbnN0IHZhbGlkYXRlQ2F0ZWdvcmllcyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICBpZignY2F0ZWdvcmllcycgaW4gbWFuaWZlc3QpIHtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gbWFuaWZlc3RbJ2NhdGVnb3JpZXMnXTtcbiAgICBpZighQXJyYXkuaXNBcnJheShjYXRlZ29yaWVzKSkge1xuICAgICAgb3B0aW9uc0Vycm9ycy5jYXRlZ29yaWVzID0gJ21hbmlmZXN0IGNhdGVnb3JpZXMgZmllbGQgc2hvdWxkIGJlIEFycmF5JztcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNhdGVnb3JpZXNFcnJvcnMgPSBbXTtcbiAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgaWYodHlwZW9mKGNhdGVnb3J5KSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjYXRlZ29yaWVzRXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdtYW5pZmVzdCBjYXRlZ29yaWVzIGZpZWxkIGNhdGVnb3J5IHNob3VsZCBiZSBTdHJpbmcnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZihjYXRlZ29yaWVzRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgb3B0aW9uc0Vycm9ycy5jYXRlZ29yaWVzID0gY2F0ZWdvcmllc0Vycm9ycztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9uc0Vycm9ycy5jYXRlZ29yaWVzID0gJ21hbmlmZXN0IGNhdGVnb3JpZXMgZmllbGQgaXMgbnVsbCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVTY3JlZW5zaG90cyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICAvLyB0b2RvOiBzY3JlZW5TaG90cyBmaWVsZHNcbn1cblxuY29uc3QgdmFsaWRhdGVTaG9ydGN1dHMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgLy8gdG9kbzogc2hvcnRDdXRzIGZpZWxkc1xufVxuXG5jb25zdCB2YWxpZGF0ZU9wdGlvbkZpZWxkcyA9IChtYW5pZmVzdCkgPT4ge1xuICBsZXQgb3B0aW9uc0Vycm9ycyA9IHt9O1xuICB2YWxpZGF0ZURpcihtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlU2NvcGUobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZURpc3BsYXkobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZUJhY2tncm91bmRDb2xvcihtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlUmVsYXRlZEFwcGxpY2F0aW9ucyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlUHJlZmVyUmVsYXRlZEFwcGxpY2F0aW9ucyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlQ2F0ZWdvcmllcyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlU2NyZWVuc2hvdHMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNob3J0Y3V0cyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHJldHVybiBvcHRpb25zRXJyb3JzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZShvbGRNYW5pZmVzdCkge1xuICBjb25zdCByZXF1aXJlZEZpZWxkc0Vycm9yID0gdmFsaWRhdGVSZXF1aXJlZEZpZWxkcyhvbGRNYW5pZmVzdCk7XG4gIGNvbnN0IG9wdGlvbkZpZWxkc0Vycm9yID0gdmFsaWRhdGVPcHRpb25GaWVsZHMob2xkTWFuaWZlc3QpO1xuICByZXR1cm4ge1xuICAgICdSZXF1aXJlZEZpZWxkcyc6IE9iamVjdC5rZXlzKHJlcXVpcmVkRmllbGRzRXJyb3IpLmxlbmd0aCA+IDAgPyByZXF1aXJlZEZpZWxkc0Vycm9yIDogJ1JlcXVpcmVkIGZpZWxkcyBoYXZlIG5vIGVycm9yISEhJyxcbiAgICAnT3B0aW9uYWxGaWVsZHMnOiBPYmplY3Qua2V5cyhvcHRpb25GaWVsZHNFcnJvcikubGVuZ3RoID4gMCA/IG9wdGlvbkZpZWxkc0Vycm9yIDogJ09wdGlvbmFsIGZpZWxkcyBoYXZlIG5vIGVycm9yISEhJyxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\nvar validateString = function validateString(field, manifest, errors) {\n  if ('name' in manifest) {\n    if (typeof manifest['name'] !== 'string') {\n      requiredErrors.name = 'manifest name field type should be string';\n    }\n  } else {\n    requiredErrors.name = 'manifest name field is required';\n  }\n}; // validate required fields\n\n\nvar validateName = function validateName(manifest, requiredErrors) {\n  if ('name' in manifest) {\n    if (typeof manifest['name'] !== 'string') {\n      requiredErrors.name = 'manifest name field type should be string';\n    }\n  } else {\n    requiredErrors.name = 'manifest name field is required';\n  }\n};\n\nvar validateDescription = function validateDescription(manifest, requiredErrors) {\n  if ('description' in manifest) {\n    if (typeof manifest['description'] !== 'string') {\n      requiredErrors.description = 'manifest description field type should be string';\n    }\n  } else {\n    requiredErrors.description = 'manifest description field is required';\n  }\n};\n\nvar validateLang = function validateLang(manifest, requiredErrors) {\n  if ('lang' in manifest) {\n    var manifestLang = manifest['lang'];\n\n    if (typeof manifestLang !== 'string') {\n      requiredErrors.lang = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(manifestLang)) {\n        requiredErrors.lang = 'manifest lang field type should be correct format!';\n      }\n    }\n  } else {\n    requiredErrors.lang = 'manifest lang field is required!';\n  }\n};\n\nvar validateThemeColor = function validateThemeColor(manifest, requiredErrors) {\n  if ('theme_color' in manifest) {\n    if (typeof manifest['theme_color'] !== 'string') {\n      requiredErrors.theme_color = 'manifest theme_color field type should be string';\n    }\n  } else {\n    requiredErrors.theme_color = 'manifest theme_color field is required';\n  }\n};\n\nvar validateOritation = function validateOritation(manifest, requiredErrors) {\n  var ENUM_ORIENTATION = ['any', 'natural', 'landscape', 'landscape-primary', 'landscape-secondary', 'portrait', 'portrait-primary', 'portrait-secondary'];\n\n  if ('orientation' in manifest) {\n    if (typeof manifest['orientation'] !== 'string') {\n      requiredErrors.orientation = 'manifest orientation field type should be string';\n    } else {\n      var orientation = manifest['orientation'];\n\n      if (!ENUM_ORIENTATION.includes(orientation)) {\n        requiredErrors.orientation = 'manifest orientation field value not correct';\n      }\n    }\n  } else {\n    requiredErrors.orientation = 'manifest orientation field is required';\n  }\n};\n\nvar validateStartUrl = function validateStartUrl(manifest, requiredErrors) {\n  if ('start_url' in manifest) {\n    if (typeof manifest['start_url'] !== 'string') {\n      requiredErrors.start_url = 'manifest start_url field type should be string';\n    }\n  } else {\n    requiredErrors.start_url = 'manifest start_url field is required';\n  }\n};\n\nvar validateIconObj = function validateIconObj(iconObj) {\n  var error = {}; // icons src validate\n\n  if ('src' in iconObj) {\n    if (typeof iconObj['src'] !== 'string') {\n      error.src = 'manifest icons field icon type should be string';\n    }\n  } else {\n    error.src = 'manifest icons field icon is required';\n  } // icons size validate\n\n\n  if ('sizes' in iconObj) {\n    var sizes = iconObj['sizes'];\n\n    if (typeof sizes !== 'string') {\n      error.sizes = 'manifest icons field size type should be string';\n    } else {\n      if (!/^\\s*\\d+x\\d+(\\s+\\d+x\\d+)*\\s*$/.test(sizes)) {\n        error.sizes = 'manifest icons field sizes should be correct format!';\n      }\n    }\n  } else {\n    error.sizes = 'manifest icons field size is required!';\n  }\n\n  return error;\n};\n\nvar validateIcons = function validateIcons(manifest, requiredErrors) {\n  if ('icons' in manifest) {\n    var icons = manifest['icons'];\n\n    if (!Array.isArray(icons)) {\n      requiredErrors.icons = 'manifest icons field should be Array';\n    } else {\n      var iconErrors = [];\n      icons.forEach(function (icon) {\n        var error = validateIconObj(icon);\n\n        if (Object.keys(error).length > 0) {\n          iconErrors.push(error);\n        }\n      });\n\n      if (iconErrors.length > 0) {\n        requiredErrors.icons = iconErrors;\n      }\n    }\n  } else {\n    requiredErrors.icons = 'manifest icons field is required';\n  }\n};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  var requiredErrors = {};\n  validateName(manifest, requiredErrors);\n  validateDescription(manifest, requiredErrors);\n  validateLang(manifest, requiredErrors);\n  validateThemeColor(manifest, requiredErrors);\n  validateOritation(manifest, requiredErrors);\n  validateStartUrl(manifest, requiredErrors);\n  validateIcons(manifest, requiredErrors);\n  return requiredErrors;\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest, optionsErrors) {\n  var ENUM_DIR = ['rtl', 'ltr', 'auto'];\n\n  if ('dir' in manifest) {\n    if (typeof manifest['dir'] !== 'string') {\n      optionsErrors.dir = 'manifest dir field type should be string';\n    } else {\n      var dir = manifest['dir'];\n\n      if (!ENUM_DIR.includes(dir)) {\n        optionsErrors.dir = 'manifest dir field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.dir = 'manifest dir field is null';\n  }\n};\n\nvar validateScope = function validateScope(manifest, optionsErrors) {\n  if ('scope' in manifest) {\n    if (typeof manifest['scope'] !== 'string') {\n      optionsErrors.scope = 'manifest scope field type should be string';\n    }\n  } else {\n    optionsErrors.scope = 'manifest scope field is null';\n  }\n};\n\nvar validateDisplay = function validateDisplay(manifest, optionsErrors) {\n  var ENUM_DISPLAY = ['fullscreen', 'standalone', 'minimal-ui', 'browser'];\n\n  if ('display' in manifest) {\n    if (typeof manifest['display'] !== 'string') {\n      optionsErrors.display = 'manifest display field type should be string';\n    } else {\n      var display = manifest['display'];\n\n      if (!ENUM_DISPLAY.includes(display)) {\n        optionsErrors.display = 'manifest display field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.display = 'manifest display field is null';\n  }\n};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest, optionsErrors) {\n  if ('background_color' in manifest) {\n    if (typeof manifest['background_color'] !== 'string') {\n      optionsErrors.background_color = 'manifest background_color field type should be string';\n    }\n  } else {\n    optionsErrors.background_color = 'manifest background_color field is null';\n  }\n};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest, optionsErrors) {// todo: related_applications fields\n};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest, optionsErrors) {// todo: prefer_related_applications fields\n};\n\nvar validateCategories = function validateCategories(manifest, optionsErrors) {\n  if ('categories' in manifest) {\n    var categories = manifest['categories'];\n\n    if (!Array.isArray(categories)) {\n      optionsErrors.categories = 'manifest categories field should be Array';\n    } else {\n      var categoriesErrors = [];\n      categories.forEach(function (category) {\n        if (typeof category !== 'string') {\n          categoriesErrors.push({\n            category: 'manifest categories field category should be String'\n          });\n        }\n      });\n\n      if (categoriesErrors.length > 0) {\n        optionsErrors.categories = categoriesErrors;\n      }\n    }\n  } else {\n    optionsErrors.categories = 'manifest categories field is null';\n  }\n};\n\nvar validateScreenshots = function validateScreenshots(manifest, optionsErrors) {// todo: screenShots fields\n};\n\nvar validateShortcuts = function validateShortcuts(manifest, optionsErrors) {// todo: shortCuts fields\n};\n\nvar validateOptionFields = function validateOptionFields(manifest) {\n  var optionsErrors = {};\n  validateDir(manifest, optionsErrors);\n  validateScope(manifest, optionsErrors);\n  validateDisplay(manifest, optionsErrors);\n  validateBackgroundColor(manifest, optionsErrors);\n  validateRelatedApplications(manifest, optionsErrors);\n  validatePreferRelatedApplications(manifest, optionsErrors);\n  validateCategories(manifest, optionsErrors);\n  validateScreenshots(manifest, optionsErrors);\n  validateShortcuts(manifest, optionsErrors);\n  return optionsErrors;\n};\n\nfunction validate(oldManifest) {\n  var requiredFieldsError = validateRequiredFields(oldManifest);\n  var optionFieldsError = validateOptionFields(oldManifest);\n  return {\n    'RequiredFields': Object.keys(requiredFieldsError).length > 0 ? requiredFieldsError : 'Required fields have no error!!!',\n    'OptionalFields': Object.keys(optionFieldsError).length > 0 ? optionFieldsError : 'Optional fields have no error!!!'\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZVN0cmluZyIsImZpZWxkIiwibWFuaWZlc3QiLCJlcnJvcnMiLCJyZXF1aXJlZEVycm9ycyIsIm5hbWUiLCJ2YWxpZGF0ZU5hbWUiLCJ2YWxpZGF0ZURlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJ2YWxpZGF0ZUxhbmciLCJtYW5pZmVzdExhbmciLCJsYW5nIiwidGVzdCIsInZhbGlkYXRlVGhlbWVDb2xvciIsInRoZW1lX2NvbG9yIiwidmFsaWRhdGVPcml0YXRpb24iLCJFTlVNX09SSUVOVEFUSU9OIiwib3JpZW50YXRpb24iLCJpbmNsdWRlcyIsInZhbGlkYXRlU3RhcnRVcmwiLCJzdGFydF91cmwiLCJ2YWxpZGF0ZUljb25PYmoiLCJpY29uT2JqIiwiZXJyb3IiLCJzcmMiLCJzaXplcyIsInZhbGlkYXRlSWNvbnMiLCJpY29ucyIsIkFycmF5IiwiaXNBcnJheSIsImljb25FcnJvcnMiLCJmb3JFYWNoIiwiaWNvbiIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJwdXNoIiwidmFsaWRhdGVSZXF1aXJlZEZpZWxkcyIsInZhbGlkYXRlRGlyIiwib3B0aW9uc0Vycm9ycyIsIkVOVU1fRElSIiwiZGlyIiwidmFsaWRhdGVTY29wZSIsInNjb3BlIiwidmFsaWRhdGVEaXNwbGF5IiwiRU5VTV9ESVNQTEFZIiwiZGlzcGxheSIsInZhbGlkYXRlQmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZF9jb2xvciIsInZhbGlkYXRlUmVsYXRlZEFwcGxpY2F0aW9ucyIsInZhbGlkYXRlUHJlZmVyUmVsYXRlZEFwcGxpY2F0aW9ucyIsInZhbGlkYXRlQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzRXJyb3JzIiwiY2F0ZWdvcnkiLCJ2YWxpZGF0ZVNjcmVlbnNob3RzIiwidmFsaWRhdGVTaG9ydGN1dHMiLCJ2YWxpZGF0ZU9wdGlvbkZpZWxkcyIsInZhbGlkYXRlIiwib2xkTWFuaWZlc3QiLCJyZXF1aXJlZEZpZWxkc0Vycm9yIiwib3B0aW9uRmllbGRzRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBUUMsUUFBUixFQUFrQkMsTUFBbEIsRUFBNkI7QUFDbEQsTUFBSSxVQUFVRCxRQUFkLEVBQXdCO0FBQ3RCLFFBQUcsT0FBT0EsUUFBUSxDQUFDLE1BQUQsQ0FBZixLQUE2QixRQUFoQyxFQUEwQztBQUN4Q0Usb0JBQWMsQ0FBQ0MsSUFBZixHQUFzQiwyQ0FBdEI7QUFDRDtBQUNGLEdBSkQsTUFJTztBQUNMRCxrQkFBYyxDQUFDQyxJQUFmLEdBQXNCLGlDQUF0QjtBQUNEO0FBQ0YsQ0FSRCxDLENBVUE7OztBQUNBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNKLFFBQUQsRUFBV0UsY0FBWCxFQUE4QjtBQUNqRCxNQUFJLFVBQVVGLFFBQWQsRUFBd0I7QUFDdEIsUUFBRyxPQUFPQSxRQUFRLENBQUMsTUFBRCxDQUFmLEtBQTZCLFFBQWhDLEVBQTBDO0FBQ3hDRSxvQkFBYyxDQUFDQyxJQUFmLEdBQXNCLDJDQUF0QjtBQUNEO0FBQ0YsR0FKRCxNQUlPO0FBQ0xELGtCQUFjLENBQUNDLElBQWYsR0FBc0IsaUNBQXRCO0FBQ0Q7QUFDRixDQVJEOztBQVVBLElBQU1FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0wsUUFBRCxFQUFXRSxjQUFYLEVBQThCO0FBQ3hELE1BQUksaUJBQWlCRixRQUFyQixFQUErQjtBQUM3QixRQUFHLE9BQU9BLFFBQVEsQ0FBQyxhQUFELENBQWYsS0FBb0MsUUFBdkMsRUFBaUQ7QUFDL0NFLG9CQUFjLENBQUNJ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QUNFLFdBQUQsQ0FBOUM7QUFDQSxTQUFPO0FBQ0wsc0JBQWtCMUIsTUFBTSxDQUFDQyxJQUFQLENBQVkwQixtQkFBWixFQUFpQ3pCLE1BQWpDLEdBQTBDLENBQTFDLEdBQThDeUIsbUJBQTlDLEdBQW9FLGtDQURqRjtBQUVMLHNCQUFrQjNCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZMkIsaUJBQVosRUFBK0IxQixNQUEvQixHQUF3QyxDQUF4QyxHQUE0QzBCLGlCQUE1QyxHQUFnRTtBQUY3RSxHQUFQO0FBSUQiLCJmaWxlIjoiLi91dGlscy92YWxpZGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gUmVxdWlyZWQgZmllbGRzOlxuICAgbmFtZSBvciBzaG9ydF9uYW1lOiBzdHJpbmdcbiAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgIGxhbmc6IHN0cmluZ1xuICAgdGhlbWVfY29sb3I6IHN0cmluZ1xuICAgb3JpZW50YXRpb246IHN0cmluZ1xuICAgc3RhcnRfdXJsOiBzdHJpbmdcbiAgIGljb25zOiBBcnJheSBvZiBPYmplY3RcbiAqL1xuXG4vKlxuIE9wdGlvbmFsOlxuICAgZGlyOiBzdHJpbmdcbiAgIHNjb3BlOiBzdHJpbmdcbiAgIGRpc3BsYXk6IHN0cmluZ1xuICAgYmFja2dyb3VuZF9jb2xvcjogc3RyaW5nXG4gICByZWxhdGVkX2FwcGxpY2F0aW9uczogQXJyYXkgb2YgT2JqZWN0XG4gICBwcmVmZXJfcmVsYXRlZF9hcHBsaWNhdGlvbnM6IGJvb2xlYW5cbiAgIGNhdGVnb3JpZXM6IEFycmF5IG9mIHN0cmluZ3NcbiAgIHNjcmVlbnNob3RzOiBBcnJheSBvZiBPYmplY3RcbiAgIHNob3J0Y3V0czogQXJyYXkgb2YgT2JqZWN0XG4gKi9cblxuY29uc3QgdmFsaWRhdGVTdHJpbmcgPSAoZmllbGQsIG1hbmlmZXN0LCBlcnJvcnMpID0+IHtcbiAgaWYgKCduYW1lJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnbmFtZSddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLm5hbWUgPSAnbWFuaWZlc3QgbmFtZSBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5uYW1lID0gJ21hbmlmZXN0IG5hbWUgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbi8vIHZhbGlkYXRlIHJlcXVpcmVkIGZpZWxkc1xuY29uc3QgdmFsaWRhdGVOYW1lID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZiAoJ25hbWUnIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WyduYW1lJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMubmFtZSA9ICdtYW5pZmVzdCBuYW1lIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLm5hbWUgPSAnbWFuaWZlc3QgbmFtZSBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVEZXNjcmlwdGlvbiA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYgKCdkZXNjcmlwdGlvbicgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ2Rlc2NyaXB0aW9uJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMuZGVzY3JpcHRpb24gPSAnbWFuaWZlc3QgZGVzY3JpcHRpb24gZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMuZGVzY3JpcHRpb24gPSAnbWFuaWZlc3QgZGVzY3JpcHRpb24gZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlTGFuZyA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYoJ2xhbmcnIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgbWFuaWZlc3RMYW5nID0gbWFuaWZlc3RbJ2xhbmcnXTtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RMYW5nKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmchJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoIS9eXFx3KigtXFx3KikqJC8udGVzdChtYW5pZmVzdExhbmcpKSB7XG4gICAgICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCB0eXBlIHNob3VsZCBiZSBjb3JyZWN0IGZvcm1hdCEnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5sYW5nID0gJ21hbmlmZXN0IGxhbmcgZmllbGQgaXMgcmVxdWlyZWQhJ1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlVGhlbWVDb2xvciA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYgKCd0aGVtZV9jb2xvcicgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ3RoZW1lX2NvbG9yJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMudGhlbWVfY29sb3IgPSAnbWFuaWZlc3QgdGhlbWVfY29sb3IgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMudGhlbWVfY29sb3IgPSAnbWFuaWZlc3QgdGhlbWVfY29sb3IgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlT3JpdGF0aW9uID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBjb25zdCBFTlVNX09SSUVOVEFUSU9OID0gW1xuICAgICdhbnknLFxuICAgICduYXR1cmFsJyxcbiAgICAnbGFuZHNjYXBlJyxcbiAgICAnbGFuZHNjYXBlLXByaW1hcnknLFxuICAgICdsYW5kc2NhcGUtc2Vjb25kYXJ5JyxcbiAgICAncG9ydHJhaXQnLFxuICAgICdwb3J0cmFpdC1wcmltYXJ5JyxcbiAgICAncG9ydHJhaXQtc2Vjb25kYXJ5J1xuICBdO1xuICBpZiAoJ29yaWVudGF0aW9uJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnb3JpZW50YXRpb24nXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5vcmllbnRhdGlvbiA9ICdtYW5pZmVzdCBvcmllbnRhdGlvbiBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvcmllbnRhdGlvbiA9IG1hbmlmZXN0WydvcmllbnRhdGlvbiddO1xuICAgICAgaWYoIUVOVU1fT1JJRU5UQVRJT04uaW5jbHVkZXMob3JpZW50YXRpb24pKSB7XG4gICAgICAgIHJlcXVpcmVkRXJyb3JzLm9yaWVudGF0aW9uID0gJ21hbmlmZXN0IG9yaWVudGF0aW9uIGZpZWxkIHZhbHVlIG5vdCBjb3JyZWN0JztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMub3JpZW50YXRpb24gPSAnbWFuaWZlc3Qgb3JpZW50YXRpb24gZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlU3RhcnRVcmwgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmICgnc3RhcnRfdXJsJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnc3RhcnRfdXJsJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMuc3RhcnRfdXJsID0gJ21hbmlmZXN0IHN0YXJ0X3VybCBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5zdGFydF91cmwgPSAnbWFuaWZlc3Qgc3RhcnRfdXJsIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZUljb25PYmogPSAoaWNvbk9iaikgPT4ge1xuICBsZXQgZXJyb3IgPSB7fTtcbiAgLy8gaWNvbnMgc3JjIHZhbGlkYXRlXG4gIGlmICgnc3JjJyBpbiBpY29uT2JqKSB7XG4gICAgaWYodHlwZW9mKGljb25PYmpbJ3NyYyddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yLnNyYyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBpY29uIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVycm9yLnNyYyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBpY29uIGlzIHJlcXVpcmVkJztcbiAgfVxuICAvLyBpY29ucyBzaXplIHZhbGlkYXRlXG4gIGlmKCdzaXplcycgaW4gaWNvbk9iaikge1xuICAgIGNvbnN0IHNpemVzID0gaWNvbk9ialsnc2l6ZXMnXTtcbiAgICBpZih0eXBlb2Yoc2l6ZXMpICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3Iuc2l6ZXMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgc2l6ZSB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZighL15cXHMqXFxkK3hcXGQrKFxccytcXGQreFxcZCspKlxccyokLy50ZXN0KHNpemVzKSkge1xuICAgICAgICBlcnJvci5zaXplcyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaXplcyBzaG91bGQgYmUgY29ycmVjdCBmb3JtYXQhJztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZXJyb3Iuc2l6ZXMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgc2l6ZSBpcyByZXF1aXJlZCEnO1xuICB9XG4gIHJldHVybiBlcnJvcjtcbn1cblxuY29uc3QgdmFsaWRhdGVJY29ucyA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYoJ2ljb25zJyBpbiBtYW5pZmVzdCkge1xuICAgIGNvbnN0IGljb25zID0gbWFuaWZlc3RbJ2ljb25zJ107XG4gICAgaWYoIUFycmF5LmlzQXJyYXkoaWNvbnMpKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5pY29ucyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaG91bGQgYmUgQXJyYXknO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgaWNvbkVycm9ycyA9IFtdO1xuICAgICAgaWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgICBjb25zdCBlcnJvciA9IHZhbGlkYXRlSWNvbk9iaihpY29uKTtcbiAgICAgICAgaWYoT2JqZWN0LmtleXMoZXJyb3IpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpY29uRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYoaWNvbkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlcXVpcmVkRXJyb3JzLmljb25zID0gaWNvbkVycm9ycztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMuaWNvbnMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlUmVxdWlyZWRGaWVsZHMgPSAobWFuaWZlc3QsIGVycm9ycykgPT4ge1xuICBsZXQgcmVxdWlyZWRFcnJvcnMgPSB7fTtcbiAgdmFsaWRhdGVOYW1lKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlRGVzY3JpcHRpb24obWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVMYW5nKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlVGhlbWVDb2xvcihtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZU9yaXRhdGlvbihtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZVN0YXJ0VXJsKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlSWNvbnMobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgcmV0dXJuIHJlcXVpcmVkRXJyb3JzO1xufVxuXG4vLyB2YWxpZGF0ZSBvcHRpb24gZmllbGRzXG5cbmNvbnN0IHZhbGlkYXRlRGlyID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIGNvbnN0IEVOVU1fRElSID0gW1xuICAgICdydGwnLFxuICAgICdsdHInLFxuICAgICdhdXRvJ1xuICBdO1xuICBpZiAoJ2RpcicgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ2RpciddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnNFcnJvcnMuZGlyID0gJ21hbmlmZXN0IGRpciBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaXIgPSBtYW5pZmVzdFsnZGlyJ107XG4gICAgICBpZighRU5VTV9ESVIuaW5jbHVkZXMoZGlyKSkge1xuICAgICAgICBvcHRpb25zRXJyb3JzLmRpciA9ICdtYW5pZmVzdCBkaXIgZmllbGQgdmFsdWUgbm90IGNvcnJlY3QnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zRXJyb3JzLmRpciA9ICdtYW5pZmVzdCBkaXIgZmllbGQgaXMgbnVsbCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVTY29wZSA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICBpZiAoJ3Njb3BlJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnc2NvcGUnXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRpb25zRXJyb3JzLnNjb3BlID0gJ21hbmlmZXN0IHNjb3BlIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMuc2NvcGUgPSAnbWFuaWZlc3Qgc2NvcGUgZmllbGQgaXMgbnVsbCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVEaXNwbGF5ID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIGNvbnN0IEVOVU1fRElTUExBWSA9IFtcbiAgICAnZnVsbHNjcmVlbicsXG4gICAgJ3N0YW5kYWxvbmUnLFxuICAgICdtaW5pbWFsLXVpJyxcbiAgICAnYnJvd3NlcidcbiAgXTtcbiAgaWYgKCdkaXNwbGF5JyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnZGlzcGxheSddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnNFcnJvcnMuZGlzcGxheSA9ICdtYW5pZmVzdCBkaXNwbGF5IGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpc3BsYXkgPSBtYW5pZmVzdFsnZGlzcGxheSddO1xuICAgICAgaWYoIUVOVU1fRElTUExBWS5pbmNsdWRlcyhkaXNwbGF5KSkge1xuICAgICAgICBvcHRpb25zRXJyb3JzLmRpc3BsYXkgPSAnbWFuaWZlc3QgZGlzcGxheSBmaWVsZCB2YWx1ZSBub3QgY29ycmVjdCc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMuZGlzcGxheSA9ICdtYW5pZmVzdCBkaXNwbGF5IGZpZWxkIGlzIG51bGwnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlQmFja2dyb3VuZENvbG9yID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIGlmICgnYmFja2dyb3VuZF9jb2xvcicgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ2JhY2tncm91bmRfY29sb3InXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRpb25zRXJyb3JzLmJhY2tncm91bmRfY29sb3IgPSAnbWFuaWZlc3QgYmFja2dyb3VuZF9jb2xvciBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zRXJyb3JzLmJhY2tncm91bmRfY29sb3IgPSAnbWFuaWZlc3QgYmFja2dyb3VuZF9jb2xvciBmaWVsZCBpcyBudWxsJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgLy8gdG9kbzogcmVsYXRlZF9hcHBsaWNhdGlvbnMgZmllbGRzXG59XG5cbmNvbnN0IHZhbGlkYXRlUHJlZmVyUmVsYXRlZEFwcGxpY2F0aW9ucyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICAvLyB0b2RvOiBwcmVmZXJfcmVsYXRlZF9hcHBsaWNhdGlvbnMgZmllbGRzXG59XG5cbmNvbnN0IHZhbGlkYXRlQ2F0ZWdvcmllcyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICBpZignY2F0ZWdvcmllcycgaW4gbWFuaWZlc3QpIHtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gbWFuaWZlc3RbJ2NhdGVnb3JpZXMnXTtcbiAgICBpZighQXJyYXkuaXNBcnJheShjYXRlZ29yaWVzKSkge1xuICAgICAgb3B0aW9uc0Vycm9ycy5jYXRlZ29yaWVzID0gJ21hbmlmZXN0IGNhdGVnb3JpZXMgZmllbGQgc2hvdWxkIGJlIEFycmF5JztcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNhdGVnb3JpZXNFcnJvcnMgPSBbXTtcbiAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgaWYodHlwZW9mKGNhdGVnb3J5KSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjYXRlZ29yaWVzRXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdtYW5pZmVzdCBjYXRlZ29yaWVzIGZpZWxkIGNhdGVnb3J5IHNob3VsZCBiZSBTdHJpbmcnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZihjYXRlZ29yaWVzRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgb3B0aW9uc0Vycm9ycy5jYXRlZ29yaWVzID0gY2F0ZWdvcmllc0Vycm9ycztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9uc0Vycm9ycy5jYXRlZ29yaWVzID0gJ21hbmlmZXN0IGNhdGVnb3JpZXMgZmllbGQgaXMgbnVsbCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVTY3JlZW5zaG90cyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICAvLyB0b2RvOiBzY3JlZW5TaG90cyBmaWVsZHNcbn1cblxuY29uc3QgdmFsaWRhdGVTaG9ydGN1dHMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgLy8gdG9kbzogc2hvcnRDdXRzIGZpZWxkc1xufVxuXG5jb25zdCB2YWxpZGF0ZU9wdGlvbkZpZWxkcyA9IChtYW5pZmVzdCkgPT4ge1xuICBsZXQgb3B0aW9uc0Vycm9ycyA9IHt9O1xuICB2YWxpZGF0ZURpcihtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlU2NvcGUobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZURpc3BsYXkobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZUJhY2tncm91bmRDb2xvcihtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlUmVsYXRlZEFwcGxpY2F0aW9ucyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlUHJlZmVyUmVsYXRlZEFwcGxpY2F0aW9ucyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlQ2F0ZWdvcmllcyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlU2NyZWVuc2hvdHMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNob3J0Y3V0cyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHJldHVybiBvcHRpb25zRXJyb3JzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZShvbGRNYW5pZmVzdCkge1xuICBjb25zdCByZXF1aXJlZEZpZWxkc0Vycm9yID0gdmFsaWRhdGVSZXF1aXJlZEZpZWxkcyhvbGRNYW5pZmVzdCk7XG4gIGNvbnN0IG9wdGlvbkZpZWxkc0Vycm9yID0gdmFsaWRhdGVPcHRpb25GaWVsZHMob2xkTWFuaWZlc3QpO1xuICByZXR1cm4ge1xuICAgICdSZXF1aXJlZEZpZWxkcyc6IE9iamVjdC5rZXlzKHJlcXVpcmVkRmllbGRzRXJyb3IpLmxlbmd0aCA+IDAgPyByZXF1aXJlZEZpZWxkc0Vycm9yIDogJ1JlcXVpcmVkIGZpZWxkcyBoYXZlIG5vIGVycm9yISEhJyxcbiAgICAnT3B0aW9uYWxGaWVsZHMnOiBPYmplY3Qua2V5cyhvcHRpb25GaWVsZHNFcnJvcikubGVuZ3RoID4gMCA/IG9wdGlvbkZpZWxkc0Vycm9yIDogJ09wdGlvbmFsIGZpZWxkcyBoYXZlIG5vIGVycm9yISEhJyxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})
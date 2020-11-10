webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\nvar validateString = function validateString(field, manifest, errors) {\n  if (field in manifest) {\n    if (typeof manifest[field] !== 'string') {\n      errors[field] = \"manifest \".concat(field, \" field type should be string\");\n    }\n  } else {\n    errors[field] = \"manifest \".concat(field, \" field is required\");\n  }\n}; // validate required fields\n\n\nvar validateName = function validateName(manifest, requiredErrors) {\n  validateString('name', manifest, requiredErrors);\n};\n\nvar validateDescription = function validateDescription(manifest, requiredErrors) {\n  validateString('description', manifest, requiredErrors);\n};\n\nvar validateLang = function validateLang(manifest, requiredErrors) {\n  if ('lang' in manifest) {\n    var manifestLang = manifest['lang'];\n\n    if (typeof manifestLang !== 'string') {\n      requiredErrors.lang = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(manifestLang)) {\n        requiredErrors.lang = 'manifest lang field type should be correct format!';\n      }\n    }\n  } else {\n    requiredErrors.lang = 'manifest lang field is required!';\n  }\n};\n\nvar validateThemeColor = function validateThemeColor(manifest, requiredErrors) {\n  validateString('theme_color', manifest, requiredErrors);\n};\n\nvar validateOritation = function validateOritation(manifest, requiredErrors) {\n  var ENUM_ORIENTATION = ['any', 'natural', 'landscape', 'landscape-primary', 'landscape-secondary', 'portrait', 'portrait-primary', 'portrait-secondary'];\n\n  if ('orientation' in manifest) {\n    if (typeof manifest['orientation'] !== 'string') {\n      requiredErrors.orientation = 'manifest orientation field type should be string';\n    } else {\n      var orientation = manifest['orientation'];\n\n      if (!ENUM_ORIENTATION.includes(orientation)) {\n        requiredErrors.orientation = 'manifest orientation field value not correct';\n      }\n    }\n  } else {\n    requiredErrors.orientation = 'manifest orientation field is required';\n  }\n};\n\nvar validateStartUrl = function validateStartUrl(manifest, requiredErrors) {\n  validateString('start_url', manifest, requiredErrors);\n};\n\nvar validateIconObj = function validateIconObj(iconObj) {\n  var error = {}; // icons src validate\n\n  if ('src' in iconObj) {\n    if (typeof iconObj['src'] !== 'string') {\n      error.src = 'manifest icons field icon type should be string';\n    }\n  } else {\n    error.src = 'manifest icons field icon is required';\n  } // icons size validate\n\n\n  if ('sizes' in iconObj) {\n    var sizes = iconObj['sizes'];\n\n    if (typeof sizes !== 'string') {\n      error.sizes = 'manifest icons field size type should be string';\n    } else {\n      if (!/^\\s*\\d+x\\d+(\\s+\\d+x\\d+)*\\s*$/.test(sizes)) {\n        error.sizes = 'manifest icons field sizes should be correct format!';\n      }\n    }\n  } else {\n    error.sizes = 'manifest icons field size is required!';\n  }\n\n  return error;\n};\n\nvar validateIcons = function validateIcons(manifest, requiredErrors) {\n  if ('icons' in manifest) {\n    var icons = manifest['icons'];\n\n    if (!Array.isArray(icons)) {\n      requiredErrors.icons = 'manifest icons field should be Array';\n    } else {\n      var iconErrors = [];\n      icons.forEach(function (icon) {\n        var error = validateIconObj(icon);\n\n        if (Object.keys(error).length > 0) {\n          iconErrors.push(error);\n        }\n      });\n\n      if (iconErrors.length > 0) {\n        requiredErrors.icons = iconErrors;\n      }\n    }\n  } else {\n    requiredErrors.icons = 'manifest icons field is required';\n  }\n};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  var requiredErrors = {};\n  validateName(manifest, requiredErrors);\n  validateDescription(manifest, requiredErrors);\n  validateLang(manifest, requiredErrors);\n  validateThemeColor(manifest, requiredErrors);\n  validateOritation(manifest, requiredErrors);\n  validateStartUrl(manifest, requiredErrors);\n  validateIcons(manifest, requiredErrors);\n  return requiredErrors;\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest, optionsErrors) {\n  var ENUM_DIR = ['rtl', 'ltr', 'auto'];\n\n  if ('dir' in manifest) {\n    if (typeof manifest['dir'] !== 'string') {\n      optionsErrors.dir = 'manifest dir field type should be string';\n    } else {\n      var dir = manifest['dir'];\n\n      if (!ENUM_DIR.includes(dir)) {\n        optionsErrors.dir = 'manifest dir field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.dir = 'manifest dir field is null';\n  }\n};\n\nvar validateScope = function validateScope(manifest, optionsErrors) {\n  validateString('scope', manifest, optionsErrors);\n};\n\nvar validateDisplay = function validateDisplay(manifest, optionsErrors) {\n  var ENUM_DISPLAY = ['fullscreen', 'standalone', 'minimal-ui', 'browser'];\n\n  if ('display' in manifest) {\n    if (typeof manifest['display'] !== 'string') {\n      optionsErrors.display = 'manifest display field type should be string';\n    } else {\n      var display = manifest['display'];\n\n      if (!ENUM_DISPLAY.includes(display)) {\n        optionsErrors.display = 'manifest display field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.display = 'manifest display field is null';\n  }\n};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest, optionsErrors) {\n  validateString('background_color', manifest, optionsErrors);\n};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest, optionsErrors) {// todo: related_applications fields\n};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest, optionsErrors) {// todo: prefer_related_applications fields\n};\n\nvar validateCategories = function validateCategories(manifest, optionsErrors) {\n  if ('categories' in manifest) {\n    var categories = manifest['categories'];\n\n    if (!Array.isArray(categories)) {\n      optionsErrors.categories = 'manifest categories field should be Array';\n    } else {\n      var categoriesErrors = [];\n      categories.forEach(function (category) {\n        if (typeof category !== 'string') {\n          categoriesErrors.push({\n            category: 'manifest categories field category should be String'\n          });\n        }\n      });\n\n      if (categoriesErrors.length > 0) {\n        optionsErrors.categories = categoriesErrors;\n      }\n    }\n  } else {\n    optionsErrors.categories = 'manifest categories field is null';\n  }\n};\n\nvar validateScreenshots = function validateScreenshots(manifest, optionsErrors) {// todo: screenShots fields\n};\n\nvar validateShortcuts = function validateShortcuts(manifest, optionsErrors) {// todo: shortCuts fields\n};\n\nvar validateOptionFields = function validateOptionFields(manifest) {\n  var optionsErrors = {};\n  validateDir(manifest, optionsErrors);\n  validateScope(manifest, optionsErrors);\n  validateDisplay(manifest, optionsErrors);\n  validateBackgroundColor(manifest, optionsErrors);\n  validateRelatedApplications(manifest, optionsErrors);\n  validatePreferRelatedApplications(manifest, optionsErrors);\n  validateCategories(manifest, optionsErrors);\n  validateScreenshots(manifest, optionsErrors);\n  validateShortcuts(manifest, optionsErrors);\n  return optionsErrors;\n};\n\nfunction validate(oldManifest) {\n  var requiredFieldsError = validateRequiredFields(oldManifest);\n  var optionFieldsError = validateOptionFields(oldManifest);\n  return {\n    'RequiredFields': Object.keys(requiredFieldsError).length > 0 ? requiredFieldsError : 'Required fields have no error!!!',\n    'OptionalFields': Object.keys(optionFieldsError).length > 0 ? optionFieldsError : 'Optional fields have no error!!!'\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZVN0cmluZyIsImZpZWxkIiwibWFuaWZlc3QiLCJlcnJvcnMiLCJ2YWxpZGF0ZU5hbWUiLCJyZXF1aXJlZEVycm9ycyIsInZhbGlkYXRlRGVzY3JpcHRpb24iLCJ2YWxpZGF0ZUxhbmciLCJtYW5pZmVzdExhbmciLCJsYW5nIiwidGVzdCIsInZhbGlkYXRlVGhlbWVDb2xvciIsInZhbGlkYXRlT3JpdGF0aW9uIiwiRU5VTV9PUklFTlRBVElPTiIsIm9yaWVudGF0aW9uIiwiaW5jbHVkZXMiLCJ2YWxpZGF0ZVN0YXJ0VXJsIiwidmFsaWRhdGVJY29uT2JqIiwiaWNvbk9iaiIsImVycm9yIiwic3JjIiwic2l6ZXMiLCJ2YWxpZGF0ZUljb25zIiwiaWNvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJpY29uRXJyb3JzIiwiZm9yRWFjaCIsImljb24iLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicHVzaCIsInZhbGlkYXRlUmVxdWlyZWRGaWVsZHMiLCJ2YWxpZGF0ZURpciIsIm9wdGlvbnNFcnJvcnMiLCJFTlVNX0RJUiIsImRpciIsInZhbGlkYXRlU2NvcGUiLCJ2YWxpZGF0ZURpc3BsYXkiLCJFTlVNX0RJU1BMQVkiLCJkaXNwbGF5IiwidmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IiLCJ2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMiLCJ2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMiLCJ2YWxpZGF0ZUNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcmllc0Vycm9ycyIsImNhdGVnb3J5IiwidmFsaWRhdGVTY3JlZW5zaG90cyIsInZhbGlkYXRlU2hvcnRjdXRzIiwidmFsaWRhdGVPcHRpb25GaWVsZHMiLCJ2YWxpZGF0ZSIsIm9sZE1hbmlmZXN0IiwicmVxdWlyZWRGaWVsZHNFcnJvciIsIm9wdGlvbkZpZWxkc0Vycm9yIl0sIm1h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c0IsQ0FBQ29CLFdBQUQsQ0FBbEQ7QUFDQSxNQUFNRSxpQkFBaUIsR0FBR0osb0JBQW9CLENBQUNFLFdBQUQsQ0FBOUM7QUFDQSxTQUFPO0FBQ0wsc0JBQWtCeEIsTUFBTSxDQUFDQyxJQUFQLENBQVl3QixtQkFBWixFQUFpQ3ZCLE1BQWpDLEdBQTBDLENBQTFDLEdBQThDdUIsbUJBQTlDLEdBQW9FLGtDQURqRjtBQUVMLHNCQUFrQnpCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZeUIsaUJBQVosRUFBK0J4QixNQUEvQixHQUF3QyxDQUF4QyxHQUE0Q3dCLGlCQUE1QyxHQUFnRTtBQUY3RSxHQUFQO0FBSUQiLCJmaWxlIjoiLi91dGlscy92YWxpZGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gUmVxdWlyZWQgZmllbGRzOlxuICAgbmFtZSBvciBzaG9ydF9uYW1lOiBzdHJpbmdcbiAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgIGxhbmc6IHN0cmluZ1xuICAgdGhlbWVfY29sb3I6IHN0cmluZ1xuICAgb3JpZW50YXRpb246IHN0cmluZ1xuICAgc3RhcnRfdXJsOiBzdHJpbmdcbiAgIGljb25zOiBBcnJheSBvZiBPYmplY3RcbiAqL1xuXG4vKlxuIE9wdGlvbmFsOlxuICAgZGlyOiBzdHJpbmdcbiAgIHNjb3BlOiBzdHJpbmdcbiAgIGRpc3BsYXk6IHN0cmluZ1xuICAgYmFja2dyb3VuZF9jb2xvcjogc3RyaW5nXG4gICByZWxhdGVkX2FwcGxpY2F0aW9uczogQXJyYXkgb2YgT2JqZWN0XG4gICBwcmVmZXJfcmVsYXRlZF9hcHBsaWNhdGlvbnM6IGJvb2xlYW5cbiAgIGNhdGVnb3JpZXM6IEFycmF5IG9mIHN0cmluZ3NcbiAgIHNjcmVlbnNob3RzOiBBcnJheSBvZiBPYmplY3RcbiAgIHNob3J0Y3V0czogQXJyYXkgb2YgT2JqZWN0XG4gKi9cblxuY29uc3QgdmFsaWRhdGVTdHJpbmcgPSAoZmllbGQsIG1hbmlmZXN0LCBlcnJvcnMpID0+IHtcbiAgaWYgKGZpZWxkIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0W2ZpZWxkXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvcnNbZmllbGRdID0gYG1hbmlmZXN0ICR7ZmllbGR9IGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZ2A7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVycm9yc1tmaWVsZF0gPSBgbWFuaWZlc3QgJHtmaWVsZH0gZmllbGQgaXMgcmVxdWlyZWRgO1xuICB9XG59XG5cbi8vIHZhbGlkYXRlIHJlcXVpcmVkIGZpZWxkc1xuY29uc3QgdmFsaWRhdGVOYW1lID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICB2YWxpZGF0ZVN0cmluZygnbmFtZScsIG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG59XG5cbmNvbnN0IHZhbGlkYXRlRGVzY3JpcHRpb24gPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIHZhbGlkYXRlU3RyaW5nKCdkZXNjcmlwdGlvbicsIG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG59XG5cbmNvbnN0IHZhbGlkYXRlTGFuZyA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYoJ2xhbmcnIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgbWFuaWZlc3RMYW5nID0gbWFuaWZlc3RbJ2xhbmcnXTtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RMYW5nKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmchJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoIS9eXFx3KigtXFx3KikqJC8udGVzdChtYW5pZmVzdExhbmcpKSB7XG4gICAgICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCB0eXBlIHNob3VsZCBiZSBjb3JyZWN0IGZvcm1hdCEnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5sYW5nID0gJ21hbmlmZXN0IGxhbmcgZmllbGQgaXMgcmVxdWlyZWQhJ1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlVGhlbWVDb2xvciA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgdmFsaWRhdGVTdHJpbmcoJ3RoZW1lX2NvbG9yJywgbWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbn1cblxuY29uc3QgdmFsaWRhdGVPcml0YXRpb24gPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGNvbnN0IEVOVU1fT1JJRU5UQVRJT04gPSBbXG4gICAgJ2FueScsXG4gICAgJ25hdHVyYWwnLFxuICAgICdsYW5kc2NhcGUnLFxuICAgICdsYW5kc2NhcGUtcHJpbWFyeScsXG4gICAgJ2xhbmRzY2FwZS1zZWNvbmRhcnknLFxuICAgICdwb3J0cmFpdCcsXG4gICAgJ3BvcnRyYWl0LXByaW1hcnknLFxuICAgICdwb3J0cmFpdC1zZWNvbmRhcnknXG4gIF07XG4gIGlmICgnb3JpZW50YXRpb24nIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydvcmllbnRhdGlvbiddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLm9yaWVudGF0aW9uID0gJ21hbmlmZXN0IG9yaWVudGF0aW9uIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gbWFuaWZlc3RbJ29yaWVudGF0aW9uJ107XG4gICAgICBpZighRU5VTV9PUklFTlRBVElPTi5pbmNsdWRlcyhvcmllbnRhdGlvbikpIHtcbiAgICAgICAgcmVxdWlyZWRFcnJvcnMub3JpZW50YXRpb24gPSAnbWFuaWZlc3Qgb3JpZW50YXRpb24gZmllbGQgdmFsdWUgbm90IGNvcnJlY3QnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5vcmllbnRhdGlvbiA9ICdtYW5pZmVzdCBvcmllbnRhdGlvbiBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVTdGFydFVybCA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgdmFsaWRhdGVTdHJpbmcoJ3N0YXJ0X3VybCcsIG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG59XG5cbmNvbnN0IHZhbGlkYXRlSWNvbk9iaiA9IChpY29uT2JqKSA9PiB7XG4gIGxldCBlcnJvciA9IHt9O1xuICAvLyBpY29ucyBzcmMgdmFsaWRhdGVcbiAgaWYgKCdzcmMnIGluIGljb25PYmopIHtcbiAgICBpZih0eXBlb2YoaWNvbk9ialsnc3JjJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3Iuc3JjID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIGljb24gdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZXJyb3Iuc3JjID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIGljb24gaXMgcmVxdWlyZWQnO1xuICB9XG4gIC8vIGljb25zIHNpemUgdmFsaWRhdGVcbiAgaWYoJ3NpemVzJyBpbiBpY29uT2JqKSB7XG4gICAgY29uc3Qgc2l6ZXMgPSBpY29uT2JqWydzaXplcyddO1xuICAgIGlmKHR5cGVvZihzaXplcykgIT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvci5zaXplcyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaXplIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKCEvXlxccypcXGQreFxcZCsoXFxzK1xcZCt4XFxkKykqXFxzKiQvLnRlc3Qoc2l6ZXMpKSB7XG4gICAgICAgIGVycm9yLnNpemVzID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIHNpemVzIHNob3VsZCBiZSBjb3JyZWN0IGZvcm1hdCEnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlcnJvci5zaXplcyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaXplIGlzIHJlcXVpcmVkISc7XG4gIH1cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5jb25zdCB2YWxpZGF0ZUljb25zID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZignaWNvbnMnIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgaWNvbnMgPSBtYW5pZmVzdFsnaWNvbnMnXTtcbiAgICBpZighQXJyYXkuaXNBcnJheShpY29ucykpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmljb25zID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIHNob3VsZCBiZSBBcnJheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBpY29uRXJyb3JzID0gW107XG4gICAgICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdmFsaWRhdGVJY29uT2JqKGljb24pO1xuICAgICAgICBpZihPYmplY3Qua2V5cyhlcnJvcikubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGljb25FcnJvcnMucHVzaChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZihpY29uRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVxdWlyZWRFcnJvcnMuaWNvbnMgPSBpY29uRXJyb3JzO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5pY29ucyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVSZXF1aXJlZEZpZWxkcyA9IChtYW5pZmVzdCwgZXJyb3JzKSA9PiB7XG4gIGxldCByZXF1aXJlZEVycm9ycyA9IHt9O1xuICB2YWxpZGF0ZU5hbWUobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVEZXNjcmlwdGlvbihtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZUxhbmcobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVUaGVtZUNvbG9yKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlT3JpdGF0aW9uKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlU3RhcnRVcmwobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVJY29ucyhtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICByZXR1cm4gcmVxdWlyZWRFcnJvcnM7XG59XG5cbi8vIHZhbGlkYXRlIG9wdGlvbiBmaWVsZHNcblxuY29uc3QgdmFsaWRhdGVEaXIgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgY29uc3QgRU5VTV9ESVIgPSBbXG4gICAgJ3J0bCcsXG4gICAgJ2x0cicsXG4gICAgJ2F1dG8nXG4gIF07XG4gIGlmICgnZGlyJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnZGlyJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9uc0Vycm9ycy5kaXIgPSAnbWFuaWZlc3QgZGlyIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpciA9IG1hbmlmZXN0WydkaXInXTtcbiAgICAgIGlmKCFFTlVNX0RJUi5pbmNsdWRlcyhkaXIpKSB7XG4gICAgICAgIG9wdGlvbnNFcnJvcnMuZGlyID0gJ21hbmlmZXN0IGRpciBmaWVsZCB2YWx1ZSBub3QgY29ycmVjdCc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMuZGlyID0gJ21hbmlmZXN0IGRpciBmaWVsZCBpcyBudWxsJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVNjb3BlID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIHZhbGlkYXRlU3RyaW5nKCdzY29wZScsIG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbn1cblxuY29uc3QgdmFsaWRhdGVEaXNwbGF5ID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIGNvbnN0IEVOVU1fRElTUExBWSA9IFtcbiAgICAnZnVsbHNjcmVlbicsXG4gICAgJ3N0YW5kYWxvbmUnLFxuICAgICdtaW5pbWFsLXVpJyxcbiAgICAnYnJvd3NlcidcbiAgXTtcbiAgaWYgKCdkaXNwbGF5JyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnZGlzcGxheSddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnNFcnJvcnMuZGlzcGxheSA9ICdtYW5pZmVzdCBkaXNwbGF5IGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpc3BsYXkgPSBtYW5pZmVzdFsnZGlzcGxheSddO1xuICAgICAgaWYoIUVOVU1fRElTUExBWS5pbmNsdWRlcyhkaXNwbGF5KSkge1xuICAgICAgICBvcHRpb25zRXJyb3JzLmRpc3BsYXkgPSAnbWFuaWZlc3QgZGlzcGxheSBmaWVsZCB2YWx1ZSBub3QgY29ycmVjdCc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMuZGlzcGxheSA9ICdtYW5pZmVzdCBkaXNwbGF5IGZpZWxkIGlzIG51bGwnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlQmFja2dyb3VuZENvbG9yID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIHZhbGlkYXRlU3RyaW5nKCdiYWNrZ3JvdW5kX2NvbG9yJywgbWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xufVxuXG5jb25zdCB2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgLy8gdG9kbzogcmVsYXRlZF9hcHBsaWNhdGlvbnMgZmllbGRzXG59XG5cbmNvbnN0IHZhbGlkYXRlUHJlZmVyUmVsYXRlZEFwcGxpY2F0aW9ucyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICAvLyB0b2RvOiBwcmVmZXJfcmVsYXRlZF9hcHBsaWNhdGlvbnMgZmllbGRzXG59XG5cbmNvbnN0IHZhbGlkYXRlQ2F0ZWdvcmllcyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICBpZignY2F0ZWdvcmllcycgaW4gbWFuaWZlc3QpIHtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gbWFuaWZlc3RbJ2NhdGVnb3JpZXMnXTtcbiAgICBpZighQXJyYXkuaXNBcnJheShjYXRlZ29yaWVzKSkge1xuICAgICAgb3B0aW9uc0Vycm9ycy5jYXRlZ29yaWVzID0gJ21hbmlmZXN0IGNhdGVnb3JpZXMgZmllbGQgc2hvdWxkIGJlIEFycmF5JztcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNhdGVnb3JpZXNFcnJvcnMgPSBbXTtcbiAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgaWYodHlwZW9mKGNhdGVnb3J5KSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjYXRlZ29yaWVzRXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdtYW5pZmVzdCBjYXRlZ29yaWVzIGZpZWxkIGNhdGVnb3J5IHNob3VsZCBiZSBTdHJpbmcnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZihjYXRlZ29yaWVzRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgb3B0aW9uc0Vycm9ycy5jYXRlZ29yaWVzID0gY2F0ZWdvcmllc0Vycm9ycztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9uc0Vycm9ycy5jYXRlZ29yaWVzID0gJ21hbmlmZXN0IGNhdGVnb3JpZXMgZmllbGQgaXMgbnVsbCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVTY3JlZW5zaG90cyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICAvLyB0b2RvOiBzY3JlZW5TaG90cyBmaWVsZHNcbn1cblxuY29uc3QgdmFsaWRhdGVTaG9ydGN1dHMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgLy8gdG9kbzogc2hvcnRDdXRzIGZpZWxkc1xufVxuXG5jb25zdCB2YWxpZGF0ZU9wdGlvbkZpZWxkcyA9IChtYW5pZmVzdCkgPT4ge1xuICBsZXQgb3B0aW9uc0Vycm9ycyA9IHt9O1xuICB2YWxpZGF0ZURpcihtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlU2NvcGUobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZURpc3BsYXkobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZUJhY2tncm91bmRDb2xvcihtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlUmVsYXRlZEFwcGxpY2F0aW9ucyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlUHJlZmVyUmVsYXRlZEFwcGxpY2F0aW9ucyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlQ2F0ZWdvcmllcyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlU2NyZWVuc2hvdHMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNob3J0Y3V0cyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHJldHVybiBvcHRpb25zRXJyb3JzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZShvbGRNYW5pZmVzdCkge1xuICBjb25zdCByZXF1aXJlZEZpZWxkc0Vycm9yID0gdmFsaWRhdGVSZXF1aXJlZEZpZWxkcyhvbGRNYW5pZmVzdCk7XG4gIGNvbnN0IG9wdGlvbkZpZWxkc0Vycm9yID0gdmFsaWRhdGVPcHRpb25GaWVsZHMob2xkTWFuaWZlc3QpO1xuICByZXR1cm4ge1xuICAgICdSZXF1aXJlZEZpZWxkcyc6IE9iamVjdC5rZXlzKHJlcXVpcmVkRmllbGRzRXJyb3IpLmxlbmd0aCA+IDAgPyByZXF1aXJlZEZpZWxkc0Vycm9yIDogJ1JlcXVpcmVkIGZpZWxkcyBoYXZlIG5vIGVycm9yISEhJyxcbiAgICAnT3B0aW9uYWxGaWVsZHMnOiBPYmplY3Qua2V5cyhvcHRpb25GaWVsZHNFcnJvcikubGVuZ3RoID4gMCA/IG9wdGlvbkZpZWxkc0Vycm9yIDogJ09wdGlvbmFsIGZpZWxkcyBoYXZlIG5vIGVycm9yISEhJyxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})
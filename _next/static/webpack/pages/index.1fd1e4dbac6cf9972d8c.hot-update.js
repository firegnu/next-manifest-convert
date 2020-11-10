webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\nvar validateString = function validateString(field, manifest, errors) {\n  if (field in manifest) {\n    if (typeof manifest[field] !== 'string') {\n      errors[field] = \"manifest \".concat(field, \" field type should be string\");\n    }\n  } else {\n    errors[field] = \"manifest \".concat(field, \" field is required\");\n  }\n}; // validate required fields\n\n\nvar validateName = function validateName(manifest, requiredErrors) {\n  // if ('name' in manifest) {\n  //   if(typeof(manifest['name']) !== 'string') {\n  //     requiredErrors.name = 'manifest name field type should be string';\n  //   }\n  // } else {\n  //   requiredErrors.name = 'manifest name field is required';\n  // }\n  validateString('name', manifest, requiredErrors);\n};\n\nvar validateDescription = function validateDescription(manifest, requiredErrors) {\n  if ('description' in manifest) {\n    if (typeof manifest['description'] !== 'string') {\n      requiredErrors.description = 'manifest description field type should be string';\n    }\n  } else {\n    requiredErrors.description = 'manifest description field is required';\n  }\n};\n\nvar validateLang = function validateLang(manifest, requiredErrors) {\n  if ('lang' in manifest) {\n    var manifestLang = manifest['lang'];\n\n    if (typeof manifestLang !== 'string') {\n      requiredErrors.lang = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(manifestLang)) {\n        requiredErrors.lang = 'manifest lang field type should be correct format!';\n      }\n    }\n  } else {\n    requiredErrors.lang = 'manifest lang field is required!';\n  }\n};\n\nvar validateThemeColor = function validateThemeColor(manifest, requiredErrors) {\n  if ('theme_color' in manifest) {\n    if (typeof manifest['theme_color'] !== 'string') {\n      requiredErrors.theme_color = 'manifest theme_color field type should be string';\n    }\n  } else {\n    requiredErrors.theme_color = 'manifest theme_color field is required';\n  }\n};\n\nvar validateOritation = function validateOritation(manifest, requiredErrors) {\n  var ENUM_ORIENTATION = ['any', 'natural', 'landscape', 'landscape-primary', 'landscape-secondary', 'portrait', 'portrait-primary', 'portrait-secondary'];\n\n  if ('orientation' in manifest) {\n    if (typeof manifest['orientation'] !== 'string') {\n      requiredErrors.orientation = 'manifest orientation field type should be string';\n    } else {\n      var orientation = manifest['orientation'];\n\n      if (!ENUM_ORIENTATION.includes(orientation)) {\n        requiredErrors.orientation = 'manifest orientation field value not correct';\n      }\n    }\n  } else {\n    requiredErrors.orientation = 'manifest orientation field is required';\n  }\n};\n\nvar validateStartUrl = function validateStartUrl(manifest, requiredErrors) {\n  if ('start_url' in manifest) {\n    if (typeof manifest['start_url'] !== 'string') {\n      requiredErrors.start_url = 'manifest start_url field type should be string';\n    }\n  } else {\n    requiredErrors.start_url = 'manifest start_url field is required';\n  }\n};\n\nvar validateIconObj = function validateIconObj(iconObj) {\n  var error = {}; // icons src validate\n\n  if ('src' in iconObj) {\n    if (typeof iconObj['src'] !== 'string') {\n      error.src = 'manifest icons field icon type should be string';\n    }\n  } else {\n    error.src = 'manifest icons field icon is required';\n  } // icons size validate\n\n\n  if ('sizes' in iconObj) {\n    var sizes = iconObj['sizes'];\n\n    if (typeof sizes !== 'string') {\n      error.sizes = 'manifest icons field size type should be string';\n    } else {\n      if (!/^\\s*\\d+x\\d+(\\s+\\d+x\\d+)*\\s*$/.test(sizes)) {\n        error.sizes = 'manifest icons field sizes should be correct format!';\n      }\n    }\n  } else {\n    error.sizes = 'manifest icons field size is required!';\n  }\n\n  return error;\n};\n\nvar validateIcons = function validateIcons(manifest, requiredErrors) {\n  if ('icons' in manifest) {\n    var icons = manifest['icons'];\n\n    if (!Array.isArray(icons)) {\n      requiredErrors.icons = 'manifest icons field should be Array';\n    } else {\n      var iconErrors = [];\n      icons.forEach(function (icon) {\n        var error = validateIconObj(icon);\n\n        if (Object.keys(error).length > 0) {\n          iconErrors.push(error);\n        }\n      });\n\n      if (iconErrors.length > 0) {\n        requiredErrors.icons = iconErrors;\n      }\n    }\n  } else {\n    requiredErrors.icons = 'manifest icons field is required';\n  }\n};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  var requiredErrors = {};\n  validateName(manifest, requiredErrors);\n  validateDescription(manifest, requiredErrors);\n  validateLang(manifest, requiredErrors);\n  validateThemeColor(manifest, requiredErrors);\n  validateOritation(manifest, requiredErrors);\n  validateStartUrl(manifest, requiredErrors);\n  validateIcons(manifest, requiredErrors);\n  return requiredErrors;\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest, optionsErrors) {\n  var ENUM_DIR = ['rtl', 'ltr', 'auto'];\n\n  if ('dir' in manifest) {\n    if (typeof manifest['dir'] !== 'string') {\n      optionsErrors.dir = 'manifest dir field type should be string';\n    } else {\n      var dir = manifest['dir'];\n\n      if (!ENUM_DIR.includes(dir)) {\n        optionsErrors.dir = 'manifest dir field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.dir = 'manifest dir field is null';\n  }\n};\n\nvar validateScope = function validateScope(manifest, optionsErrors) {\n  if ('scope' in manifest) {\n    if (typeof manifest['scope'] !== 'string') {\n      optionsErrors.scope = 'manifest scope field type should be string';\n    }\n  } else {\n    optionsErrors.scope = 'manifest scope field is null';\n  }\n};\n\nvar validateDisplay = function validateDisplay(manifest, optionsErrors) {\n  var ENUM_DISPLAY = ['fullscreen', 'standalone', 'minimal-ui', 'browser'];\n\n  if ('display' in manifest) {\n    if (typeof manifest['display'] !== 'string') {\n      optionsErrors.display = 'manifest display field type should be string';\n    } else {\n      var display = manifest['display'];\n\n      if (!ENUM_DISPLAY.includes(display)) {\n        optionsErrors.display = 'manifest display field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.display = 'manifest display field is null';\n  }\n};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest, optionsErrors) {\n  if ('background_color' in manifest) {\n    if (typeof manifest['background_color'] !== 'string') {\n      optionsErrors.background_color = 'manifest background_color field type should be string';\n    }\n  } else {\n    optionsErrors.background_color = 'manifest background_color field is null';\n  }\n};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest, optionsErrors) {// todo: related_applications fields\n};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest, optionsErrors) {// todo: prefer_related_applications fields\n};\n\nvar validateCategories = function validateCategories(manifest, optionsErrors) {\n  if ('categories' in manifest) {\n    var categories = manifest['categories'];\n\n    if (!Array.isArray(categories)) {\n      optionsErrors.categories = 'manifest categories field should be Array';\n    } else {\n      var categoriesErrors = [];\n      categories.forEach(function (category) {\n        if (typeof category !== 'string') {\n          categoriesErrors.push({\n            category: 'manifest categories field category should be String'\n          });\n        }\n      });\n\n      if (categoriesErrors.length > 0) {\n        optionsErrors.categories = categoriesErrors;\n      }\n    }\n  } else {\n    optionsErrors.categories = 'manifest categories field is null';\n  }\n};\n\nvar validateScreenshots = function validateScreenshots(manifest, optionsErrors) {// todo: screenShots fields\n};\n\nvar validateShortcuts = function validateShortcuts(manifest, optionsErrors) {// todo: shortCuts fields\n};\n\nvar validateOptionFields = function validateOptionFields(manifest) {\n  var optionsErrors = {};\n  validateDir(manifest, optionsErrors);\n  validateScope(manifest, optionsErrors);\n  validateDisplay(manifest, optionsErrors);\n  validateBackgroundColor(manifest, optionsErrors);\n  validateRelatedApplications(manifest, optionsErrors);\n  validatePreferRelatedApplications(manifest, optionsErrors);\n  validateCategories(manifest, optionsErrors);\n  validateScreenshots(manifest, optionsErrors);\n  validateShortcuts(manifest, optionsErrors);\n  return optionsErrors;\n};\n\nfunction validate(oldManifest) {\n  var requiredFieldsError = validateRequiredFields(oldManifest);\n  var optionFieldsError = validateOptionFields(oldManifest);\n  return {\n    'RequiredFields': Object.keys(requiredFieldsError).length > 0 ? requiredFieldsError : 'Required fields have no error!!!',\n    'OptionalFields': Object.keys(optionFieldsError).length > 0 ? optionFieldsError : 'Optional fields have no error!!!'\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZVN0cmluZyIsImZpZWxkIiwibWFuaWZlc3QiLCJlcnJvcnMiLCJ2YWxpZGF0ZU5hbWUiLCJyZXF1aXJlZEVycm9ycyIsInZhbGlkYXRlRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInZhbGlkYXRlTGFuZyIsIm1hbmlmZXN0TGFuZyIsImxhbmciLCJ0ZXN0IiwidmFsaWRhdGVUaGVtZUNvbG9yIiwidGhlbWVfY29sb3IiLCJ2YWxpZGF0ZU9yaXRhdGlvbiIsIkVOVU1fT1JJRU5UQVRJT04iLCJvcmllbnRhdGlvbiIsImluY2x1ZGVzIiwidmFsaWRhdGVTdGFydFVybCIsInN0YXJ0X3VybCIsInZhbGlkYXRlSWNvbk9iaiIsImljb25PYmoiLCJlcnJvciIsInNyYyIsInNpemVzIiwidmFsaWRhdGVJY29ucyIsImljb25zIiwiQXJyYXkiLCJpc0FycmF5IiwiaWNvbkVycm9ycyIsImZvckVhY2giLCJpY29uIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInB1c2giLCJ2YWxpZGF0ZVJlcXVpcmVkRmllbGRzIiwidmFsaWRhdGVEaXIiLCJvcHRpb25zRXJyb3JzIiwiRU5VTV9ESVIiLCJkaXIiLCJ2YWxpZGF0ZVNjb3BlIiwic2NvcGUiLCJ2YWxpZGF0ZURpc3BsYXkiLCJFTlVNX0RJU1BMQVkiLCJkaXNwbGF5IiwidmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kX2NvbG9yIiwidmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zIiwidmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zIiwidmFsaWRhdGVDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsImNhdGVnb3JpZXNFcnJvcnMiLCJjYXRlZ29yeSIsInZhbGlkYXRlU2NyZWVuc2hvdHMiLCJ2YWxpZGF0ZVNob3J0Y3V0cyIsInZhbGlkYXRlT3B0aW9uRmllbGRzIiwidmFsaWRhdGUiLCJvbGRNYW5pZmVzdCIsInJlcXVpcmVkRmllbGRzRXJyb3IiLCJvcHRpb25GaWVsZHNFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQWtCQyxNQUFsQixFQUE2QjtBQUNsRCxNQUFJRixLQUFLLElBQUlDLFFBQWIsRUFBdUI7QUFDckIsUUFBRyxPQUFPQSxRQUFRLENBQUNELEtBQUQsQ0FBZixLQUE0QixRQUEvQixFQUF5QztBQUN2Q0UsWUFBTSxDQUFDRixLQUFELENBQU4sc0JBQTRCQSxLQUE1QjtBQUNEO0FBQ0YsR0FKRCxNQUlPO0FBQ0xFLFVBQU0sQ0FBQ0YsS0FBRCxDQUFOLHNCQUE0QkEsS0FBNUI7QUFDRDtBQUNGLENBUkQsQyxDQVVBOzs7QUFDQSxJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDRixRQUFELEVBQVdHLGNBQVgsRUFBOEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUwsZ0JBQWMsQ0FBQyxNQUFELEVBQVNFLFFBQVQsRUFBbUJHLGNBQW5CLENBQWQ7QUFDRCxDQVREOztBQVdBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0osUUFBRCxFQUFXRyxjQUFYLEVBQThCO0FBQ3hELE1BQUksaUJBQWlCSCxRQUFyQixFQUErQjtBQUM3QixRQUFHLE9BQU9BLFFBQVEsQ0FBQyxhQUFELENBQWYsS0FBb0MsUUFBdkMsRUFBaUQ7QUFDL0NHLG9CQUFjLENBQUNFLFdBQWYsR0FBNkIsa0RBQTdCO0FBQ0Q7QUFDRixHQUpELE1BSU87QUFDTEYsa0JBQWMsQ0FBQ0UsV0FBZixHQUE2Qix3Q0FBN0I7QUFDRDtBQUNG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LENBQTFDLEdBQThDeUIsbUJBQTlDLEdBQW9FLGtDQURqRjtBQUVMLHNCQUFrQjNCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZMkIsaUJBQVosRUFBK0IxQixNQUEvQixHQUF3QyxDQUF4QyxHQUE0QzBCLGlCQUE1QyxHQUFnRTtBQUY3RSxHQUFQO0FBSUQiLCJmaWxlIjoiLi91dGlscy92YWxpZGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gUmVxdWlyZWQgZmllbGRzOlxuICAgbmFtZSBvciBzaG9ydF9uYW1lOiBzdHJpbmdcbiAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgIGxhbmc6IHN0cmluZ1xuICAgdGhlbWVfY29sb3I6IHN0cmluZ1xuICAgb3JpZW50YXRpb246IHN0cmluZ1xuICAgc3RhcnRfdXJsOiBzdHJpbmdcbiAgIGljb25zOiBBcnJheSBvZiBPYmplY3RcbiAqL1xuXG4vKlxuIE9wdGlvbmFsOlxuICAgZGlyOiBzdHJpbmdcbiAgIHNjb3BlOiBzdHJpbmdcbiAgIGRpc3BsYXk6IHN0cmluZ1xuICAgYmFja2dyb3VuZF9jb2xvcjogc3RyaW5nXG4gICByZWxhdGVkX2FwcGxpY2F0aW9uczogQXJyYXkgb2YgT2JqZWN0XG4gICBwcmVmZXJfcmVsYXRlZF9hcHBsaWNhdGlvbnM6IGJvb2xlYW5cbiAgIGNhdGVnb3JpZXM6IEFycmF5IG9mIHN0cmluZ3NcbiAgIHNjcmVlbnNob3RzOiBBcnJheSBvZiBPYmplY3RcbiAgIHNob3J0Y3V0czogQXJyYXkgb2YgT2JqZWN0XG4gKi9cblxuY29uc3QgdmFsaWRhdGVTdHJpbmcgPSAoZmllbGQsIG1hbmlmZXN0LCBlcnJvcnMpID0+IHtcbiAgaWYgKGZpZWxkIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0W2ZpZWxkXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvcnNbZmllbGRdID0gYG1hbmlmZXN0ICR7ZmllbGR9IGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZ2A7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVycm9yc1tmaWVsZF0gPSBgbWFuaWZlc3QgJHtmaWVsZH0gZmllbGQgaXMgcmVxdWlyZWRgO1xuICB9XG59XG5cbi8vIHZhbGlkYXRlIHJlcXVpcmVkIGZpZWxkc1xuY29uc3QgdmFsaWRhdGVOYW1lID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICAvLyBpZiAoJ25hbWUnIGluIG1hbmlmZXN0KSB7XG4gIC8vICAgaWYodHlwZW9mKG1hbmlmZXN0WyduYW1lJ10pICE9PSAnc3RyaW5nJykge1xuICAvLyAgICAgcmVxdWlyZWRFcnJvcnMubmFtZSA9ICdtYW5pZmVzdCBuYW1lIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gIC8vICAgfVxuICAvLyB9IGVsc2Uge1xuICAvLyAgIHJlcXVpcmVkRXJyb3JzLm5hbWUgPSAnbWFuaWZlc3QgbmFtZSBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIC8vIH1cbiAgdmFsaWRhdGVTdHJpbmcoJ25hbWUnLCBtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xufVxuXG5jb25zdCB2YWxpZGF0ZURlc2NyaXB0aW9uID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZiAoJ2Rlc2NyaXB0aW9uJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnZGVzY3JpcHRpb24nXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5kZXNjcmlwdGlvbiA9ICdtYW5pZmVzdCBkZXNjcmlwdGlvbiBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5kZXNjcmlwdGlvbiA9ICdtYW5pZmVzdCBkZXNjcmlwdGlvbiBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVMYW5nID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZignbGFuZycgaW4gbWFuaWZlc3QpIHtcbiAgICBjb25zdCBtYW5pZmVzdExhbmcgPSBtYW5pZmVzdFsnbGFuZyddO1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdExhbmcpICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMubGFuZyA9ICdtYW5pZmVzdCBsYW5nIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyEnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZighL15cXHcqKC1cXHcqKSokLy50ZXN0KG1hbmlmZXN0TGFuZykpIHtcbiAgICAgICAgcmVxdWlyZWRFcnJvcnMubGFuZyA9ICdtYW5pZmVzdCBsYW5nIGZpZWxkIHR5cGUgc2hvdWxkIGJlIGNvcnJlY3QgZm9ybWF0ISc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCBpcyByZXF1aXJlZCEnXG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVUaGVtZUNvbG9yID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZiAoJ3RoZW1lX2NvbG9yJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsndGhlbWVfY29sb3InXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy50aGVtZV9jb2xvciA9ICdtYW5pZmVzdCB0aGVtZV9jb2xvciBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy50aGVtZV9jb2xvciA9ICdtYW5pZmVzdCB0aGVtZV9jb2xvciBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVPcml0YXRpb24gPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGNvbnN0IEVOVU1fT1JJRU5UQVRJT04gPSBbXG4gICAgJ2FueScsXG4gICAgJ25hdHVyYWwnLFxuICAgICdsYW5kc2NhcGUnLFxuICAgICdsYW5kc2NhcGUtcHJpbWFyeScsXG4gICAgJ2xhbmRzY2FwZS1zZWNvbmRhcnknLFxuICAgICdwb3J0cmFpdCcsXG4gICAgJ3BvcnRyYWl0LXByaW1hcnknLFxuICAgICdwb3J0cmFpdC1zZWNvbmRhcnknXG4gIF07XG4gIGlmICgnb3JpZW50YXRpb24nIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydvcmllbnRhdGlvbiddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLm9yaWVudGF0aW9uID0gJ21hbmlmZXN0IG9yaWVudGF0aW9uIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gbWFuaWZlc3RbJ29yaWVudGF0aW9uJ107XG4gICAgICBpZighRU5VTV9PUklFTlRBVElPTi5pbmNsdWRlcyhvcmllbnRhdGlvbikpIHtcbiAgICAgICAgcmVxdWlyZWRFcnJvcnMub3JpZW50YXRpb24gPSAnbWFuaWZlc3Qgb3JpZW50YXRpb24gZmllbGQgdmFsdWUgbm90IGNvcnJlY3QnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5vcmllbnRhdGlvbiA9ICdtYW5pZmVzdCBvcmllbnRhdGlvbiBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVTdGFydFVybCA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYgKCdzdGFydF91cmwnIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydzdGFydF91cmwnXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5zdGFydF91cmwgPSAnbWFuaWZlc3Qgc3RhcnRfdXJsIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLnN0YXJ0X3VybCA9ICdtYW5pZmVzdCBzdGFydF91cmwgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlSWNvbk9iaiA9IChpY29uT2JqKSA9PiB7XG4gIGxldCBlcnJvciA9IHt9O1xuICAvLyBpY29ucyBzcmMgdmFsaWRhdGVcbiAgaWYgKCdzcmMnIGluIGljb25PYmopIHtcbiAgICBpZih0eXBlb2YoaWNvbk9ialsnc3JjJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3Iuc3JjID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIGljb24gdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZXJyb3Iuc3JjID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIGljb24gaXMgcmVxdWlyZWQnO1xuICB9XG4gIC8vIGljb25zIHNpemUgdmFsaWRhdGVcbiAgaWYoJ3NpemVzJyBpbiBpY29uT2JqKSB7XG4gICAgY29uc3Qgc2l6ZXMgPSBpY29uT2JqWydzaXplcyddO1xuICAgIGlmKHR5cGVvZihzaXplcykgIT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvci5zaXplcyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaXplIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKCEvXlxccypcXGQreFxcZCsoXFxzK1xcZCt4XFxkKykqXFxzKiQvLnRlc3Qoc2l6ZXMpKSB7XG4gICAgICAgIGVycm9yLnNpemVzID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIHNpemVzIHNob3VsZCBiZSBjb3JyZWN0IGZvcm1hdCEnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlcnJvci5zaXplcyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaXplIGlzIHJlcXVpcmVkISc7XG4gIH1cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5jb25zdCB2YWxpZGF0ZUljb25zID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZignaWNvbnMnIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgaWNvbnMgPSBtYW5pZmVzdFsnaWNvbnMnXTtcbiAgICBpZighQXJyYXkuaXNBcnJheShpY29ucykpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmljb25zID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIHNob3VsZCBiZSBBcnJheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBpY29uRXJyb3JzID0gW107XG4gICAgICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdmFsaWRhdGVJY29uT2JqKGljb24pO1xuICAgICAgICBpZihPYmplY3Qua2V5cyhlcnJvcikubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGljb25FcnJvcnMucHVzaChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZihpY29uRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVxdWlyZWRFcnJvcnMuaWNvbnMgPSBpY29uRXJyb3JzO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5pY29ucyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVSZXF1aXJlZEZpZWxkcyA9IChtYW5pZmVzdCwgZXJyb3JzKSA9PiB7XG4gIGxldCByZXF1aXJlZEVycm9ycyA9IHt9O1xuICB2YWxpZGF0ZU5hbWUobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVEZXNjcmlwdGlvbihtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZUxhbmcobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVUaGVtZUNvbG9yKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlT3JpdGF0aW9uKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlU3RhcnRVcmwobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVJY29ucyhtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICByZXR1cm4gcmVxdWlyZWRFcnJvcnM7XG59XG5cbi8vIHZhbGlkYXRlIG9wdGlvbiBmaWVsZHNcblxuY29uc3QgdmFsaWRhdGVEaXIgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgY29uc3QgRU5VTV9ESVIgPSBbXG4gICAgJ3J0bCcsXG4gICAgJ2x0cicsXG4gICAgJ2F1dG8nXG4gIF07XG4gIGlmICgnZGlyJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnZGlyJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9uc0Vycm9ycy5kaXIgPSAnbWFuaWZlc3QgZGlyIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpciA9IG1hbmlmZXN0WydkaXInXTtcbiAgICAgIGlmKCFFTlVNX0RJUi5pbmNsdWRlcyhkaXIpKSB7XG4gICAgICAgIG9wdGlvbnNFcnJvcnMuZGlyID0gJ21hbmlmZXN0IGRpciBmaWVsZCB2YWx1ZSBub3QgY29ycmVjdCc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMuZGlyID0gJ21hbmlmZXN0IGRpciBmaWVsZCBpcyBudWxsJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVNjb3BlID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIGlmICgnc2NvcGUnIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydzY29wZSddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnNFcnJvcnMuc2NvcGUgPSAnbWFuaWZlc3Qgc2NvcGUgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9uc0Vycm9ycy5zY29wZSA9ICdtYW5pZmVzdCBzY29wZSBmaWVsZCBpcyBudWxsJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZURpc3BsYXkgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgY29uc3QgRU5VTV9ESVNQTEFZID0gW1xuICAgICdmdWxsc2NyZWVuJyxcbiAgICAnc3RhbmRhbG9uZScsXG4gICAgJ21pbmltYWwtdWknLFxuICAgICdicm93c2VyJ1xuICBdO1xuICBpZiAoJ2Rpc3BsYXknIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydkaXNwbGF5J10pICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9uc0Vycm9ycy5kaXNwbGF5ID0gJ21hbmlmZXN0IGRpc3BsYXkgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlzcGxheSA9IG1hbmlmZXN0WydkaXNwbGF5J107XG4gICAgICBpZighRU5VTV9ESVNQTEFZLmluY2x1ZGVzKGRpc3BsYXkpKSB7XG4gICAgICAgIG9wdGlvbnNFcnJvcnMuZGlzcGxheSA9ICdtYW5pZmVzdCBkaXNwbGF5IGZpZWxkIHZhbHVlIG5vdCBjb3JyZWN0JztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9uc0Vycm9ycy5kaXNwbGF5ID0gJ21hbmlmZXN0IGRpc3BsYXkgZmllbGQgaXMgbnVsbCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgaWYgKCdiYWNrZ3JvdW5kX2NvbG9yJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnYmFja2dyb3VuZF9jb2xvciddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnNFcnJvcnMuYmFja2dyb3VuZF9jb2xvciA9ICdtYW5pZmVzdCBiYWNrZ3JvdW5kX2NvbG9yIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMuYmFja2dyb3VuZF9jb2xvciA9ICdtYW5pZmVzdCBiYWNrZ3JvdW5kX2NvbG9yIGZpZWxkIGlzIG51bGwnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlUmVsYXRlZEFwcGxpY2F0aW9ucyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICAvLyB0b2RvOiByZWxhdGVkX2FwcGxpY2F0aW9ucyBmaWVsZHNcbn1cblxuY29uc3QgdmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIC8vIHRvZG86IHByZWZlcl9yZWxhdGVkX2FwcGxpY2F0aW9ucyBmaWVsZHNcbn1cblxuY29uc3QgdmFsaWRhdGVDYXRlZ29yaWVzID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIGlmKCdjYXRlZ29yaWVzJyBpbiBtYW5pZmVzdCkge1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBtYW5pZmVzdFsnY2F0ZWdvcmllcyddO1xuICAgIGlmKCFBcnJheS5pc0FycmF5KGNhdGVnb3JpZXMpKSB7XG4gICAgICBvcHRpb25zRXJyb3JzLmNhdGVnb3JpZXMgPSAnbWFuaWZlc3QgY2F0ZWdvcmllcyBmaWVsZCBzaG91bGQgYmUgQXJyYXknO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY2F0ZWdvcmllc0Vycm9ycyA9IFtdO1xuICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICBpZih0eXBlb2YoY2F0ZWdvcnkpICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNhdGVnb3JpZXNFcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ21hbmlmZXN0IGNhdGVnb3JpZXMgZmllbGQgY2F0ZWdvcnkgc2hvdWxkIGJlIFN0cmluZydcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmKGNhdGVnb3JpZXNFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBvcHRpb25zRXJyb3JzLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzRXJyb3JzO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zRXJyb3JzLmNhdGVnb3JpZXMgPSAnbWFuaWZlc3QgY2F0ZWdvcmllcyBmaWVsZCBpcyBudWxsJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVNjcmVlbnNob3RzID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIC8vIHRvZG86IHNjcmVlblNob3RzIGZpZWxkc1xufVxuXG5jb25zdCB2YWxpZGF0ZVNob3J0Y3V0cyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICAvLyB0b2RvOiBzaG9ydEN1dHMgZmllbGRzXG59XG5cbmNvbnN0IHZhbGlkYXRlT3B0aW9uRmllbGRzID0gKG1hbmlmZXN0KSA9PiB7XG4gIGxldCBvcHRpb25zRXJyb3JzID0ge307XG4gIHZhbGlkYXRlRGlyKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVTY29wZShtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlRGlzcGxheShtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlQmFja2dyb3VuZENvbG9yKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVDYXRlZ29yaWVzKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVTY3JlZW5zaG90cyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlU2hvcnRjdXRzKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgcmV0dXJuIG9wdGlvbnNFcnJvcnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKG9sZE1hbmlmZXN0KSB7XG4gIGNvbnN0IHJlcXVpcmVkRmllbGRzRXJyb3IgPSB2YWxpZGF0ZVJlcXVpcmVkRmllbGRzKG9sZE1hbmlmZXN0KTtcbiAgY29uc3Qgb3B0aW9uRmllbGRzRXJyb3IgPSB2YWxpZGF0ZU9wdGlvbkZpZWxkcyhvbGRNYW5pZmVzdCk7XG4gIHJldHVybiB7XG4gICAgJ1JlcXVpcmVkRmllbGRzJzogT2JqZWN0LmtleXMocmVxdWlyZWRGaWVsZHNFcnJvcikubGVuZ3RoID4gMCA/IHJlcXVpcmVkRmllbGRzRXJyb3IgOiAnUmVxdWlyZWQgZmllbGRzIGhhdmUgbm8gZXJyb3IhISEnLFxuICAgICdPcHRpb25hbEZpZWxkcyc6IE9iamVjdC5rZXlzKG9wdGlvbkZpZWxkc0Vycm9yKS5sZW5ndGggPiAwID8gb3B0aW9uRmllbGRzRXJyb3IgOiAnT3B0aW9uYWwgZmllbGRzIGhhdmUgbm8gZXJyb3IhISEnLFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})
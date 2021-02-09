/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!./style/font.css":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./style/font.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _font_OpenSans_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./font/OpenSans-Regular.ttf */ \"./style/font/OpenSans-Regular.ttf\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_OpenSans_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n  font-family: 'Open-Sans';\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./style/font.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./style/style.css":
/*!****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./style/style.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_font_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./font.css */ \"../node_modules/css-loader/dist/cjs.js!./style/font.css\");\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_font_css__WEBPACK_IMPORTED_MODULE_1__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  text-decoration: none;\\r\\n  list-style: none;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  font-family: \\\"Open Sans\\\", sans-serif;\\r\\n}\\r\\n\\r\\n.deactive {\\r\\n  opacity: 0.7;\\r\\n}\\r\\n\\r\\n.error-404 {\\r\\n  margin-top: 250px;\\r\\n  font-size: 35px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: black;\\r\\n  color: #ececec;\\r\\n}\\r\\n\\r\\n#root {\\r\\n  max-width: 1000px;\\r\\n  margin: 0 auto;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  margin-top: 90px;\\r\\n  font-size: 30px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.setpack {\\r\\n  width: 57.7%;\\r\\n  margin-top: 40px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.setpack__elem {\\r\\n  box-sizing: border-box;\\r\\n  height: 40px;\\r\\n  padding: 8px 30px;\\r\\n  border-radius: 5px;\\r\\n  background-color: #6B7AFF;\\r\\n  color: #ececec;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.setpack__elem:hover {\\r\\n  background-color: #2F41E1;\\r\\n}\\r\\n\\r\\n.content-image {\\r\\n  max-width: 100%;\\r\\n  margin-top: 40px;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  margin-top: 38px;\\r\\n  font-size: 17px;\\r\\n}\\r\\n\\r\\n.description__elem {\\r\\n  margin-top: 2px;\\r\\n}\\r\\n\\r\\n.date {\\r\\n  margin: 80px 0;\\r\\n  font-size: 15px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./style/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./style/font/OpenSans-Regular.ttf":
/*!*****************************************!*\
  !*** ./style/font/OpenSans-Regular.ttf ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"17e98b9e5586529b13ccb1f7af16861c.ttf\");\n\n//# sourceURL=webpack:///./style/font/OpenSans-Regular.ttf?");

/***/ }),

/***/ "./style/style.css":
/*!*************************!*\
  !*** ./style/style.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./style/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./style/style.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_FetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/FetchData */ \"./modules/FetchData.js\");\n/* harmony import */ var _modules_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Title */ \"./modules/Title.js\");\n/* harmony import */ var _modules_ControlElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ControlElements */ \"./modules/ControlElements.js\");\n/* harmony import */ var _modules_Img__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Img */ \"./modules/Img.js\");\n/* harmony import */ var _modules_Description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Description */ \"./modules/Description.js\");\n/* harmony import */ var _modules_FullDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/FullDate */ \"./modules/FullDate.js\");\n/* harmony import */ var _modules_Error404__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/Error404 */ \"./modules/Error404.js\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style/style.css */ \"./style/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst frontURL = new URL(window.location.href)\r\nconst hash = frontURL.searchParams.get('num')\r\n// const backURL = `https://xkcd.com/${hash}/info.0.json`\r\nconst backURL = `http://localhost:3000/${hash}` //Для json-server\r\nconst root = document.querySelector('#root')\r\n\r\nconst AppModules = [_modules_Title__WEBPACK_IMPORTED_MODULE_1__.Title, _modules_ControlElements__WEBPACK_IMPORTED_MODULE_2__.ControlElements, _modules_Img__WEBPACK_IMPORTED_MODULE_3__.Img, _modules_Description__WEBPACK_IMPORTED_MODULE_4__.Description, _modules_ControlElements__WEBPACK_IMPORTED_MODULE_2__.ControlElements, _modules_FullDate__WEBPACK_IMPORTED_MODULE_5__.FullDate]\r\n;(0,_modules_FetchData__WEBPACK_IMPORTED_MODULE_0__.FetchData)(backURL, root, AppModules).catch(() => {\r\n  const elems = Array.from(root.children)\r\n  elems.forEach(item=>item.remove())\r\n\r\n  root.append((0,_modules_Error404__WEBPACK_IMPORTED_MODULE_6__.Error404)())\r\n})\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/ControlElem.js":
/*!********************************!*\
  !*** ./modules/ControlElem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ControlElem\": () => (/* binding */ ControlElem)\n/* harmony export */ });\nconst ControlElem = (url, text, num) => {\r\n  const classNames = ['setpack__elem'];\r\n  const btn = document.createElement('a')\r\n  btn.textContent = text\r\n  if(num<1 || num>2421) {\r\n    btn.classList.add('deactive')\r\n    btn.onclick = () => false\r\n  }\r\n  url.searchParams.set('num', num)\r\n  btn.href = url.href\r\n  classNames.forEach(item => btn.classList.add(item))\r\n  return btn\r\n}\n\n//# sourceURL=webpack:///./modules/ControlElem.js?");

/***/ }),

/***/ "./modules/ControlElements.js":
/*!************************************!*\
  !*** ./modules/ControlElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ControlElements\": () => (/* binding */ ControlElements)\n/* harmony export */ });\n/* harmony import */ var _ControlElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlElem */ \"./modules/ControlElem.js\");\n\r\n\r\nconst frontURL = new URL(window.location.href)\r\n\r\nconst ControlElements = ({num}) => {\r\n  const classNames = ['setpack'];\r\n  const getRandom = max => Math.floor(Math.random() * max)\r\n\r\n  const toFirst = (0,_ControlElem__WEBPACK_IMPORTED_MODULE_0__.ControlElem)(frontURL, '|<', 1)\r\n  const toPrev = (0,_ControlElem__WEBPACK_IMPORTED_MODULE_0__.ControlElem)(frontURL, '< Prev', num-1)\r\n  const toRandom = (0,_ControlElem__WEBPACK_IMPORTED_MODULE_0__.ControlElem)(frontURL, 'Random', getRandom(2421))\r\n  const toNext = (0,_ControlElem__WEBPACK_IMPORTED_MODULE_0__.ControlElem)(frontURL, 'Next >', num+1)\r\n  const toLast = (0,_ControlElem__WEBPACK_IMPORTED_MODULE_0__.ControlElem)(frontURL, '>|', 2421)\r\n\r\n  const setpack = document.createElement('div')\r\n  setpack.append(toFirst, toPrev, toRandom, toNext, toLast)\r\n  classNames.forEach(item => setpack.classList.add(item))\r\n  return setpack\r\n}\n\n//# sourceURL=webpack:///./modules/ControlElements.js?");

/***/ }),

/***/ "./modules/Description.js":
/*!********************************!*\
  !*** ./modules/Description.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Description\": () => (/* binding */ Description)\n/* harmony export */ });\nconst Description = ({transcript}) => {\r\n  const classNamesParent = ['description'];\r\n  transcript = transcript.split(/\\n/)\r\n  \r\n  const description = transcript.reduce((accum, item)=>{\r\n    const classNamesChild = ['description__elem'];\r\n    const paragraph = document.createElement('p')\r\n    paragraph.textContent = item\r\n    accum.append(paragraph)\r\n    classNamesChild.forEach(item => paragraph.classList.add(item))\r\n    return accum\r\n  }, document.createElement('div'))\r\n\r\n  classNamesParent.forEach(item => description.classList.add(item))\r\n  return description\r\n}\n\n//# sourceURL=webpack:///./modules/Description.js?");

/***/ }),

/***/ "./modules/Error404.js":
/*!*****************************!*\
  !*** ./modules/Error404.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Error404\": () => (/* binding */ Error404)\n/* harmony export */ });\nconst Error404 = () => {\r\n  const error404 = document.createElement('h1')\r\n  error404.textContent = '404 Такая страница не найдена'\r\n  error404.classList.add('error-404')\r\n  return error404\r\n}\n\n//# sourceURL=webpack:///./modules/Error404.js?");

/***/ }),

/***/ "./modules/FetchData.js":
/*!******************************!*\
  !*** ./modules/FetchData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FetchData\": () => (/* binding */ FetchData)\n/* harmony export */ });\nconst FetchData = async (url, root, DOMElements) => {\r\n  const response = await fetch(url)\r\n  const data = await response.json()\r\n  DOMElements.forEach(DOMElement => root.append(DOMElement(data)))\r\n  return data\r\n}\n\n//# sourceURL=webpack:///./modules/FetchData.js?");

/***/ }),

/***/ "./modules/FullDate.js":
/*!*****************************!*\
  !*** ./modules/FullDate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FullDate\": () => (/* binding */ FullDate)\n/* harmony export */ });\nconst FullDate = ({day, month, year}) => {\r\n  const classNames = ['date'];\r\n  if(day<10) day = `0${day}`\r\n  if(month<10) month = `0${month}`\r\n  const date = document.createElement('p')\r\n  date.textContent = `${day}.${month}.${year}`\r\n  classNames.forEach(item => date.classList.add(item))\r\n  return date\r\n}\n\n//# sourceURL=webpack:///./modules/FullDate.js?");

/***/ }),

/***/ "./modules/Img.js":
/*!************************!*\
  !*** ./modules/Img.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Img\": () => (/* binding */ Img)\n/* harmony export */ });\nconst Img = ({img, alt}) => {\r\n  const classNames = ['content-image'];\r\n  const image = document.createElement('img')\r\n  image.src = img\r\n  image.alt = alt\r\n  classNames.forEach(item => image.classList.add(item))\r\n  return image\r\n}\n\n//# sourceURL=webpack:///./modules/Img.js?");

/***/ }),

/***/ "./modules/Title.js":
/*!**************************!*\
  !*** ./modules/Title.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Title\": () => (/* binding */ Title)\n/* harmony export */ });\nconst Title = ({title}) => {\r\n  const classNames = ['title'];\r\n  const titleElem = document.createElement('h1')\r\n  titleElem.textContent = title\r\n  classNames.forEach(item => titleElem.classList.add(item))\r\n  return titleElem\r\n}\n\n//# sourceURL=webpack:///./modules/Title.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
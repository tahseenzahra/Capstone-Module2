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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  font-style: normal;\\n  scroll-behavior: smooth;\\n}\\n\\n.flexRow {\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n#navbar-container {\\n  padding: 24px;\\n}\\n\\n.navbar {\\n  justify-content: space-around;\\n}\\n\\n#logo {\\n  border-radius: 50%;\\n  height: 80px;\\n  cursor: pointer;\\n}\\n\\n.navLinks {\\n  gap: 10px;\\n  align-items: center;\\n}\\n\\n.navLinks a {\\n  text-decoration: none;\\n  font-weight: 600;\\n  font-size: 17px;\\n  line-height: 20px;\\n  color: #344563;\\n  cursor: pointer;\\n}\\n\\na:hover {\\n  text-decoration: underline;\\n}\\n\\n.display {\\n  display: grid;\\n  grid-template-columns: auto auto auto auto;\\n  gap: 40px;\\n  justify-content: center;\\n}\\n\\n.food-box {\\n  border: 1px solid grey;\\n  padding-bottom: 10px;\\n  border-top-left-radius: 10px;\\n  border-top-right-radius: 10px;\\n  overflow: hidden;\\n  max-width: 310px;\\n}\\n\\n.img {\\n  width: 300px;\\n  height: 30vh;\\n  object-fit: fill;\\n}\\n\\n.like-content {\\n  display: flex;\\n  flex-direction: row;\\n  gap: 5px;\\n  align-items: center;\\n}\\n\\n.card-body {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 15px;\\n}\\n\\n.card-body p {\\n  font-size: 20px;\\n  font-weight: bold;\\n}\\n\\n.card-content {\\n  margin-top: 25px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 15px;\\n}\\n\\n.review-btn {\\n  font-size: 15px;\\n  padding: 5px 10px;\\n}\\n\\nfooter {\\n  padding: 15px;\\n  margin-top: 50px;\\n  border-top: 2px solid gray;\\n}\\n\\n/* Popup styling */\\n\\n.popup-img {\\n  width: 100%;\\n  height: 80%;\\n  object-fit: fill;\\n}\\n\\n.PopupBg {\\n  /* @ should be none when pg loaded */\\n\\n  /* display: none; */\\n  background: rgba(189, 189, 190, 0.226);\\n  backdrop-filter: blur(7px);\\n  width: 100%;\\n  height: 100%;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  position: fixed;\\n  z-index: 2;\\n  box-sizing: content-box;\\n  padding: 34px;\\n  overflow: scroll;\\n}\\n\\n.popup-detailCard {\\n  margin: auto;\\n  height: 90%;\\n  width: 50%;\\n  background-color: white;\\n  padding: 25px;\\n  border: 1px solid black;\\n  box-sizing: border-box;\\n  border-radius: 16px;\\n  overflow-y: scroll;\\n\\n  /* margin: 20vh 30vh; */\\n}\\n\\n.prj-popup-header {\\n  justify-content: space-between;\\n  margin: 10px;\\n}\\n\\n.ProductPrice {\\n  /* justify-content: center;\\n  align-items: center; */\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n\\n  /* grid-row: 1fr 1fr; */\\n  margin: auto;\\n  font-weight: 500;\\n  font-size: 17px;\\n  line-height: 24px;\\n}\\n\\n.reviewForm {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n  margin-top: 1rem;\\n  padding: 1rem 1rem 1rem 0;\\n  box-shadow: 12px 0 20px -12px;\\n}\\n\\ninput {\\n  border: none;\\n  border-bottom: 1px solid #c5b9b9;\\n  padding: 0.25rem 0.5rem;\\n}\\n\\n.button {\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  font-weight: 400;\\n  font-size: 14px;\\n  line-height: 14px;\\n  height: 38px;\\n  width: fit-content;\\n  color: #ce4c5d;\\n  background-color: white;\\n  border: 1px solid #ce4c5d;\\n  border-radius: 8px;\\n  margin: 12px 0;\\n  padding: 5px;\\n  cursor: pointer;\\n}\\n\\n.button:hover {\\n  color: white;\\n  background-color: #ce4c5d;\\n  border: 1px solid #ce3e51;\\n}\\n\\n#review-count,\\n#give-review {\\n  margin: 7px 35%;\\n}\\n\\n#reviews-list {\\n  padding: 8px 0;\\n}\\n\\nli {\\n  list-style-type: none;\\n  font-weight: 400;\\n  font-size: 14px;\\n  line-height: 14px;\\n  height: 38px;\\n  width: fit-content;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_chef_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/chef.png */ \"./src/images/chef.png\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n\n\n\n// import appId from './config1.js';\n\nconst projLogo = document.querySelector('#logo');\nprojLogo.setAttribute('src', _images_chef_png__WEBPACK_IMPORTED_MODULE_1__);\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__.displayCards)();\n});\n// console.log(appId());\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayCards\": () => (/* binding */ displayCards),\n/* harmony export */   \"mealApi\": () => (/* binding */ mealApi)\n/* harmony export */ });\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n\n// import reviewCounter from './modules/reviewCounter.js';\n\nconst mealApi = async () => {\n  const fetchResult = await fetch(\n    'https://www.themealdb.com/api/json/v1/1/search.php?f=e',\n  );\n  const showCategory = await fetchResult.json();\n  return showCategory;\n};\n\nconst foodCard = (item) => {\n  const div = `<div class='food-box'>\n  <img src='${item.strMealThumb}' class='img' alt='food-img' />\n  <div class='card-body'>\n    <p>${item.strMeal}</p>\n  </div>\n  <div class='card-content'>\n    <div class='card-action'>\n      <button class='review-btn' id=\"${item.idMeal}\">Review</button>\n    </div>\n    <div class='like-content'>\n      <i class='fa-regular fa-heart'></i>\n      <span>5 likes</span>\n    </div>\n  </div>\n  </div>`;\n  return div;\n};\n\nsetTimeout(() => {\n  const ReviewBtn = Array.from(document.querySelectorAll('.review-btn'));\n  ReviewBtn.forEach((btn) => {\n    btn.addEventListener('click', () => {\n      (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(btn.id);\n    });\n  });\n}, 2000);\n\nconst displayCards = async () => {\n  const response = await mealApi();\n  const { meals } = response;\n  const results = meals.map((category) => foodCard(category));\n  const cardWrapper = document.querySelector('.display');\n  cardWrapper.innerHTML = results.join('');\n};\n\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _postreview_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postreview.js */ \"./src/modules/postreview.js\");\n\n\n\nconst overlay = document.getElementById('overlay');\nconst getData = async (IdMeal) => {\n  // create html elements here\n  let mealData = [];\n  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${IdMeal}`)\n    .then((response) => response.json())\n    .then((data) => {\n      data = data.meals;\n      mealData = data;\n      return fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RKHWm1KUzqGmx0UP3nkk/comments?item_id=${IdMeal}`);\n    })\n    .then((response) => response.json())\n    .then((commData) => {\n      const div = `<div class=\"PopupBg\" id=\"popup-1\">\n      <section class=\"popup-detailCard\">\n          <div class=\"prj-popup-header flexRow\">\n              <h2 class=\"PopupTitle\" id=\"popup-title\">\n              ${mealData[0].strMeal}\n              </h2>\n              <i class=\"fas fa-times x-icon\" id=\"x-icon-popup\"></i>\n          </div>\n              <!-- Image and Details -->\n          <img src=\"${mealData[0].strMealThumb}\" alt=\"Meal\" class=\"popup-img\" id=\"img-id\">\n              <!-- @ take img with id -->\n          <div class=\"ProductPrice\" id=\"product-price\"> \n              <p>${mealData[0].strTags}</p>\n              <p href=\"${mealData[0].strYoutube}\">Youtube</p>\n              <p>${mealData[0].strIngredient1}</p>\n              <p>${mealData[0].strIngredient2}</p>\n          </div>\n      \n          <div class=\"ReviewTxtarea\" id=\"review-txtarea\">\n          <h3 id=\"review-count\"></h3>    \n          <ul id=\"reviews-list\"></ul>\n          </div>\n          <div>\n              <h3 id=\"give-review\">Give Review</h3>\n              <form class=\"reviewForm\" id=\"\">\n                  <input id=\"form-name\" type=\"text\" placeholder=\"Your Name\" required>\n                  <input id=\"form-review\" type=\"text\" placeholder=\"Give Review\" required>\n                  <div class=\"style-popupbtn\">\n                      <button type=\"button\" class=\"button\" id=\"submit-btn\">\n                        Submit Review\n                      </button>\n                  </div>\n              </form>\n          </div>\n              <div id=\"counter\"></div>\n            <p class=\"proj-primarytxt\" id=\"proj-primarytxt-id\"></p>\n            <div id=\"popuplist\">\n              <ul class=\"no-bullets proj-list\" id=\"tech-list-id\">\n              </ul>\n              \n            </div>\n      </section>\n  </div>`;\n\n      overlay.innerHTML = div;\n      // Create DOM Elements for User Comments\n      // const displayComments = document.getElementById('review-txtarea');\n      const commentCount = document.getElementById('review-count');\n      let reviewCounts = commData.length;\n      if (!(reviewCounts > 0)) {\n        reviewCounts = 0;\n        commentCount.innerText = `Reviews (${reviewCounts})`;\n        // displayComments.append(commentCount);\n      } else {\n        commentCount.innerText = `Reviews  (${reviewCounts})`;\n        const Reviewul = document.getElementById('reviews-list');\n        commData.forEach((item) => {\n          const reviewDetail = document.createElement('li');\n          reviewDetail.innerText = `${item.creation_date} ${item.username}: ${item.comment}`;\n          reviewDetail.classList = 'review-detail';\n          Reviewul.append(reviewDetail);\n        });\n      }\n\n      // Close Button function for Popup\n      const closeButton = document.getElementById('x-icon-popup');\n      closeButton.addEventListener('click', () => {\n        if (overlay.style.display !== 'none') {\n          overlay.style.display = 'none';\n        }\n      });\n\n      setTimeout(() => {\n        const commSubmitBtn = document.getElementById('submit-btn');\n        const userName = document.getElementById('form-name');\n        const review = document.getElementById('form-review');\n        const itemId = IdMeal;\n        // const Reviewcontainer = document.querySelector('#reviews-list');\n        commSubmitBtn.addEventListener('click', (e) => {\n          e.preventDefault();\n          if (!(userName.value === '' || review.value === '')) {\n            (0,_postreview_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(itemId, userName.value, review.value);\n            userName.value = '';\n            review.value = '';\n          }\n        });\n      }, 5000);\n    });\n  // .catch((error) => {\n  //  console.warn(`warning error:${error}`);\n  // });\n};\nconst PopupWindowOn = (id) => {\n  if (overlay.style.display !== 'block') {\n    overlay.style.display = 'block';\n    getData(id);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWindowOn);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/postreview.js":
/*!***********************************!*\
  !*** ./src/modules/postreview.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RKHWm1KUzqGmx0UP3nkk/comments';\nconst PostCommentData = async (id, name, comm) => {\n  const body = JSON.stringify({ item_id: id, username: name, comment: comm });\n  const response = await fetch(url, { method: 'POST', body, headers: { 'Content-type': 'application/json; charset=UTF-8' } });\n  const data = await response.json();\n  const returnResponse = data.result;\n  return returnResponse;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCommentData);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/postreview.js?");

/***/ }),

/***/ "./src/images/chef.png":
/*!*****************************!*\
  !*** ./src/images/chef.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a80c552b96bdc400895c.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/chef.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  font-style: normal;\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\n.flexRow {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n}\\r\\n\\r\\n#navbar-container {\\r\\n  padding: 24px;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n#logo {\\r\\n  border-radius: 50%;\\r\\n  height: 80px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.navLinks {\\r\\n  gap: 10px;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.navLinks a {\\r\\n  text-decoration: none;\\r\\n  font-weight: 600;\\r\\n  font-size: 17px;\\r\\n  line-height: 20px;\\r\\n  color: #344563;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.navLinks a:nth-child(1) {\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.display {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto auto auto;\\r\\n  gap: 40px;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.food-box {\\r\\n  border: 1px solid grey;\\r\\n  padding-bottom: 10px;\\r\\n  border-top-left-radius: 10px;\\r\\n  border-top-right-radius: 10px;\\r\\n  overflow: hidden;\\r\\n  max-width: 310px;\\r\\n}\\r\\n\\r\\n.img {\\r\\n  width: 300px;\\r\\n  height: 30vh;\\r\\n  object-fit: fill;\\r\\n}\\r\\n\\r\\n.like-content {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  gap: 5px;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.card-body {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 0 15px;\\r\\n}\\r\\n\\r\\n.card-body p {\\r\\n  font-size: 20px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.card-content {\\r\\n  margin-top: 25px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 0 15px;\\r\\n}\\r\\n\\r\\n.review-btn {\\r\\n  font-size: 15px;\\r\\n  padding: 5px 10px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  padding: 15px;\\r\\n  margin-top: 50px;\\r\\n  border-top: 2px solid gray;\\r\\n}\\r\\n\\r\\n/* Popup styling */\\r\\n\\r\\n.popup-img {\\r\\n  width: 100%;\\r\\n  height: 80%;\\r\\n  object-fit: fill;\\r\\n}\\r\\n\\r\\n.PopupBg {\\r\\n  /* @ should be none when pg loaded */\\r\\n\\r\\n  /* display: none; */\\r\\n  background: rgba(189, 189, 190, 0.226);\\r\\n  backdrop-filter: blur(7px);\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  position: fixed;\\r\\n  z-index: 2;\\r\\n  box-sizing: content-box;\\r\\n  padding: 34px;\\r\\n  overflow: scroll;\\r\\n}\\r\\n\\r\\n.popup-detailCard {\\r\\n  margin: auto;\\r\\n  height: 90%;\\r\\n  width: 50%;\\r\\n  background-color: white;\\r\\n  padding: 25px;\\r\\n  border: 1px solid black;\\r\\n  box-sizing: border-box;\\r\\n  border-radius: 16px;\\r\\n  overflow-y: scroll;\\r\\n\\r\\n  /* margin: 20vh 30vh; */\\r\\n}\\r\\n\\r\\n.prj-popup-header {\\r\\n  justify-content: space-between;\\r\\n  margin: 10px;\\r\\n}\\r\\n\\r\\n.ProductPrice {\\r\\n  /* justify-content: center;\\r\\n  align-items: center; */\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr;\\r\\n\\r\\n  /* grid-row: 1fr 1fr; */\\r\\n  margin: auto;\\r\\n  font-weight: 500;\\r\\n  font-size: 17px;\\r\\n  line-height: 24px;\\r\\n}\\r\\n\\r\\n.reviewForm {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n  margin-top: 1rem;\\r\\n  padding: 1rem 1rem 1rem 0;\\r\\n  box-shadow: 12px 0 20px -12px;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  border: none;\\r\\n  border-bottom: 1px solid #c5b9b9;\\r\\n  padding: 0.25rem 0.5rem;\\r\\n}\\r\\n\\r\\n.button {\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  font-weight: 400;\\r\\n  font-size: 14px;\\r\\n  line-height: 14px;\\r\\n  height: 38px;\\r\\n  width: fit-content;\\r\\n  color: #ce4c5d;\\r\\n  background-color: white;\\r\\n  border: 1px solid #ce4c5d;\\r\\n  border-radius: 8px;\\r\\n  margin: 12px 0;\\r\\n  padding: 5px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.button:hover {\\r\\n  color: white;\\r\\n  background-color: #ce4c5d;\\r\\n  border: 1px solid #ce3e51;\\r\\n}\\r\\n\\r\\n#review-count,\\r\\n#give-review {\\r\\n  margin: 7px 35%;\\r\\n}\\r\\n\\r\\n#reviews-list {\\r\\n  padding: 8px 0;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style-type: none;\\r\\n  font-weight: 400;\\r\\n  font-size: 14px;\\r\\n  line-height: 14px;\\r\\n  height: 38px;\\r\\n  width: fit-content;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_chef_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/chef.png */ \"./src/images/chef.png\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n\r\n\r\n\r\n// import appId from './config1.js';\r\n\r\nconst projLogo = document.querySelector('#logo');\r\nprojLogo.setAttribute('src', _images_chef_png__WEBPACK_IMPORTED_MODULE_1__);\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/categoryCounter.js":
/*!****************************************!*\
  !*** ./src/modules/categoryCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getNumberOfCat = (category) => {\r\n  const count = category.length;\r\n  return count;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNumberOfCat);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/categoryCounter.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _categoryCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categoryCounter.js */ \"./src/modules/categoryCounter.js\");\n\r\n\r\n\r\n\r\nlet mealCatArray = [];\r\n\r\nconst newMealObj = (mealCatArray, likes = []) => {\r\n  if (mealCatArray.length) {\r\n    const newMeals = mealCatArray.map((mealCat) => {\r\n      const numOfLikes = likes.find((like) => {\r\n        if (like.item_id === mealCat.idMeal) {\r\n          return like;\r\n        }\r\n      });\r\n      return {\r\n        ...mealCat,\r\n        countLikes: numOfLikes ? numOfLikes.likes : 0,\r\n      };\r\n    });\r\n    newMeals.length && displayCards(newMeals);\r\n  }\r\n};\r\n\r\nconst mealApi = async () => {\r\n  const fetchResult = await fetch(\r\n    'https://www.themealdb.com/api/json/v1/1/search.php?f=e',\r\n  );\r\n  await fetchResult.json()\r\n    .then((data) => {\r\n    mealCatArray = data.meals;\r\n    return (0,_likes_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();\r\n  })\r\n  .then((res) => {\r\n    res.json()\r\n      .then((likeData) => {\r\n        newMealObj(mealCatArray, likeData);\r\n      })\r\n      .catch(() => {\r\n        newMealObj(mealCatArray, []);\r\n      });\r\n  });\r\n};\r\n\r\nconst foodCard = (item) => {\r\n  const div = `<div class='food-box'>\r\n  <img src='${item.strMealThumb}' class='img' alt='food-img' />\r\n  <div class='card-body'>\r\n    <p>${item.strMeal}</p>\r\n  </div>\r\n  <div class='card-content'>\r\n    <div class='card-action'>\r\n      <button class='review-btn' id=\"${item.idMeal}\">Review</button>\r\n    </div>\r\n    <div class='like-content' id=${item.idMeal}>\r\n      <i class='fa-regular fa-heart'></i>\r\n      <span>${item.countLikes}</span>\r\n    </div>\r\n  </div>\r\n  </div>`;\r\n  return div;\r\n};\r\n\r\nsetTimeout(() => {\r\n  const ReviewBtn = Array.from(document.querySelectorAll('.review-btn'));\r\n  ReviewBtn.forEach((btn) => {\r\n    btn.addEventListener('click', () => {\r\n      (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(btn.id);\r\n    });\r\n  });\r\n}, 2000);\r\n\r\n\r\n// Display Categories In Browser\r\nconst displayCards = async (items) => {\r\n  let allMealCat = '';\r\n  items?.forEach((item) => {\r\n    const list = foodCard(item);\r\n    allMealCat += list;\r\n  });\r\n  const cardWrapper = document.querySelector('.display');\r\n  cardWrapper.innerHTML = allMealCat;\r\n\r\n  // display number of categories\r\n  const counter = document.querySelector('#counter');\r\n  counter.textContent = (0,_categoryCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(cardWrapper.children);\r\n  \r\n  // Adding likes\r\n  const cards = document.querySelectorAll('.food-box');\r\n  cards.forEach((card) => {\r\n    card.addEventListener('click', (e) => {\r\n     if (e.target.classList.contains('fa-heart')) {\r\n      const catID = e.target.parentNode.getAttribute('id');\r\n      (0,_likes_js__WEBPACK_IMPORTED_MODULE_1__.addLike)(catID).then(() => {\r\n        const currLikeNo = Number(e.target.nextElementSibling.textContent);\r\n        e.target.nextElementSibling.textContent = String(currLikeNo + 1);\r\n      });\r\n     }\r\n    });\r\n  });\r\n};\r\n\r\ndocument.addEventListener('DOMContentLoaded', mealApi);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCards);\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes)\n/* harmony export */ });\nconst URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RKHWm1KUzqGmx0UP3nkk/likes';\r\nconst BASE = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\r\n\r\n// Get All Likes\r\nconst getLikes = async () => {\r\n  const response = await fetch(`${URL}`);\r\n  return response;\r\n};\r\n\r\n// Add Like\r\nconst addLike = async (id) => {\r\n  const response = await fetch(`${URL}`, {\r\n    method: 'POST',\r\n    headers: { 'Content-type': 'application/json' },\r\n    body: JSON.stringify({\r\n      item_id: id\r\n    })\r\n  });\r\n  return response.text();\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _postreview_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postreview.js */ \"./src/modules/postreview.js\");\n\r\n\r\n\r\nconst overlay = document.getElementById('overlay');\r\nconst getData = async (IdMeal) => {\r\n  // create html elements here\r\n  let mealData = [];\r\n  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${IdMeal}`)\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      data = data.meals;\r\n      mealData = data;\r\n      return fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RKHWm1KUzqGmx0UP3nkk/comments?item_id=${IdMeal}`);\r\n    })\r\n    .then((response) => response.json())\r\n    .then((commData) => {\r\n      const div = `<div class=\"PopupBg\" id=\"popup-1\">\r\n      <section class=\"popup-detailCard\">\r\n          <div class=\"prj-popup-header flexRow\">\r\n              <h2 class=\"PopupTitle\" id=\"popup-title\">\r\n              ${mealData[0].strMeal}\r\n              </h2>\r\n              <i class=\"fas fa-times x-icon\" id=\"x-icon-popup\"></i>\r\n          </div>\r\n              <!-- Image and Details -->\r\n          <img src=\"${mealData[0].strMealThumb}\" alt=\"Meal\" class=\"popup-img\" id=\"img-id\">\r\n              <!-- @ take img with id -->\r\n          <div class=\"ProductPrice\" id=\"product-price\"> \r\n              <p>${mealData[0].strTags}</p>\r\n              <p href=\"${mealData[0].strYoutube}\">Youtube</p>\r\n              <p>${mealData[0].strIngredient1}</p>\r\n              <p>${mealData[0].strIngredient2}</p>\r\n          </div>\r\n      \r\n          <div class=\"ReviewTxtarea\" id=\"review-txtarea\">\r\n          <h3 id=\"review-count\"></h3>    \r\n          <ul id=\"reviews-list\"></ul>\r\n          </div>\r\n          <div>\r\n              <h3 id=\"give-review\">Give Review</h3>\r\n              <form class=\"reviewForm\" id=\"\">\r\n                  <input id=\"form-name\" type=\"text\" placeholder=\"Your Name\" required>\r\n                  <input id=\"form-review\" type=\"text\" placeholder=\"Give Review\" required>\r\n                  <div class=\"style-popupbtn\">\r\n                      <button type=\"button\" class=\"button\" id=\"submit-btn\">\r\n                        Submit Review\r\n                      </button>\r\n                  </div>\r\n              </form>\r\n          </div>\r\n              <div id=\"counter\"></div>\r\n            <p class=\"proj-primarytxt\" id=\"proj-primarytxt-id\"></p>\r\n            <div id=\"popuplist\">\r\n              <ul class=\"no-bullets proj-list\" id=\"tech-list-id\">\r\n              </ul>\r\n              \r\n            </div>\r\n      </section>\r\n  </div>`;\r\n\r\n      overlay.innerHTML = div;\r\n      // Create DOM Elements for User Comments\r\n      // const displayComments = document.getElementById('review-txtarea');\r\n      const commentCount = document.getElementById('review-count');\r\n      let reviewCounts = commData.length;\r\n      if (!(reviewCounts > 0)) {\r\n        reviewCounts = 0;\r\n        commentCount.innerText = `Reviews (${reviewCounts})`;\r\n        // displayComments.append(commentCount);\r\n      } else {\r\n        commentCount.innerText = `Reviews  (${reviewCounts})`;\r\n        const Reviewul = document.getElementById('reviews-list');\r\n        commData.forEach((item) => {\r\n          const reviewDetail = document.createElement('li');\r\n          reviewDetail.innerText = `${item.creation_date} ${item.username}: ${item.comment}`;\r\n          reviewDetail.classList = 'review-detail';\r\n          Reviewul.append(reviewDetail);\r\n        });\r\n      }\r\n\r\n      // Close Button function for Popup\r\n      const closeButton = document.getElementById('x-icon-popup');\r\n      closeButton.addEventListener('click', () => {\r\n        if (overlay.style.display !== 'none') {\r\n          overlay.style.display = 'none';\r\n        }\r\n      });\r\n\r\n      setTimeout(() => {\r\n        const commSubmitBtn = document.getElementById('submit-btn');\r\n        const userName = document.getElementById('form-name');\r\n        const review = document.getElementById('form-review');\r\n        const itemId = IdMeal;\r\n        // const Reviewcontainer = document.querySelector('#reviews-list');\r\n        commSubmitBtn.addEventListener('click', (e) => {\r\n          e.preventDefault();\r\n          if (!(userName.value === '' || review.value === '')) {\r\n            (0,_postreview_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(itemId, userName.value, review.value);\r\n            userName.value = '';\r\n            review.value = '';\r\n          }\r\n        });\r\n      }, 5000);\r\n    });\r\n  // .catch((error) => {\r\n  //  console.warn(`warning error:${error}`);\r\n  // });\r\n};\r\nconst PopupWindowOn = (id) => {\r\n  if (overlay.style.display !== 'block') {\r\n    overlay.style.display = 'block';\r\n    getData(id);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWindowOn);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/postreview.js":
/*!***********************************!*\
  !*** ./src/modules/postreview.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RKHWm1KUzqGmx0UP3nkk/comments';\r\nconst PostCommentData = async (id, name, comm) => {\r\n  const body = JSON.stringify({ item_id: id, username: name, comment: comm });\r\n  const response = await fetch(url, { method: 'POST', body, headers: { 'Content-type': 'application/json; charset=UTF-8' } });\r\n  const data = await response.json();\r\n  const returnResponse = data.result;\r\n  return returnResponse;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCommentData);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/postreview.js?");

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
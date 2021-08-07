/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _scripts_scrolls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/scrolls */ \"./scripts/scrolls.js\");\n/* harmony import */ var _scripts_scrolls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_scrolls__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_navBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/navBar */ \"./scripts/navBar.js\");\n/* harmony import */ var _scripts_navBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_navBar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scripts_circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/circle */ \"./scripts/circle.js\");\n/* harmony import */ var _scripts_circle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_circle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scripts_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/slider */ \"./scripts/slider.js\");\n/* harmony import */ var _scripts_slider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_slider__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./scripts/circle.js":
/*!***************************!*\
  !*** ./scripts/circle.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.querySelectorAll(\".skills__circle\").forEach((circle) => {\r\n  circle.width = 140;\r\n  circle.height = 140;\r\n  const ctx = circle.getContext(\"2d\");\r\n  ctx.strokeStyle = \"#ff5252\";\r\n  ctx.lineWidth = 10;\r\n\r\n  ctx.arc(\r\n    70,\r\n    70,\r\n    60,\r\n    0,\r\n    (Math.PI * 2 * Number.parseInt(circle.dataset.fill)) / 100\r\n  );\r\n\r\n  ctx.stroke();\r\n});\r\n\n\n//# sourceURL=webpack:///./scripts/circle.js?");

/***/ }),

/***/ "./scripts/navBar.js":
/*!***************************!*\
  !*** ./scripts/navBar.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.querySelectorAll(\".nav__menu--item\").forEach((element) => {\r\n  element.addEventListener(\"click\", (event) => {\r\n    document.querySelectorAll(\".nav__menu--item\").forEach((item) => {\r\n      item.classList.remove(\"active\");\r\n    });\r\n    element.classList.add(\"active\");\r\n    document\r\n      .querySelector(`#${event.target.innerText.toLowerCase()}`)\r\n      .scrollIntoView({ block: \"start\", behavior: \"smooth\" });\r\n  });\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst heights = [0];\r\nconst res = [];\r\ndocument.querySelectorAll(\"section\").forEach((section, index) => {\r\n  res[index] = heights.reduce((acc, cur) => {\r\n    return acc + cur;\r\n  });\r\n\r\n  heights[index] = Number.parseInt(getComputedStyle(section).height);\r\n});\r\n\r\n\r\nfunction setColor(index) {\r\n  document.querySelectorAll(\".nav__menu--item\").forEach((item) => {\r\n    item.classList.remove(\"active\");\r\n  });\r\n  document.querySelectorAll(\".nav__menu--item\")[index].classList.add(\"active\");\r\n}\r\n\r\nwindow.addEventListener(\"scroll\", () => {\r\n  const scroll = res.filter(\r\n    (element) =>\r\n      element - window.pageYOffset + document.documentElement.clientHeight / 2 >\r\n      0\r\n  );\r\n  setColor(res.indexOf(scroll[0]));\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"scroll\", () => {\r\n  let scroll = (scrollTop =\r\n    window.pageYOffset || document.documentElement.scrollTop);\r\n  if (\r\n    scroll >\r\n    Number.parseInt(getComputedStyle(document.querySelector(\".banner\")).height)\r\n  ) {\r\n    document.querySelector(\".nav\").classList.add(\"fixed\");\r\n  } else {\r\n    document.querySelector(\".nav\").classList.remove(\"fixed\");\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./scripts/navBar.js?");

/***/ }),

/***/ "./scripts/scrolls.js":
/*!****************************!*\
  !*** ./scripts/scrolls.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.getElementById(\"banner-scroll\").addEventListener(\"click\", () => {\r\n  document\r\n    .querySelector(\".intro\")\r\n    .scrollIntoView({ block: \"center\", behavior: \"smooth\" });\r\n});\r\n\r\nwindow.addEventListener(\"scroll\", () => {\r\n  let scroll = (scrollTop =\r\n    window.pageYOffset || document.documentElement.scrollTop);\r\n\r\n  if (scroll > 150) {\r\n    document.getElementById(\"scroll-top\").classList.remove(\"none\");\r\n  } else {\r\n    document.getElementById(\"scroll-top\").classList.add(\"none\");\r\n  }\r\n});\r\n\r\ndocument.getElementById(\"scroll-top\").addEventListener(\"click\", () => {\r\n  document\r\n    .querySelector(\".banner\")\r\n    .scrollIntoView({ block: \"center\", behavior: \"smooth\" });\r\n});\r\n\n\n//# sourceURL=webpack:///./scripts/scrolls.js?");

/***/ }),

/***/ "./scripts/slider.js":
/*!***************************!*\
  !*** ./scripts/slider.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let width = 0,\r\n  index = 0;\r\n\r\ndocument\r\n  .querySelectorAll(\".testimonials__slider--item\")\r\n  .forEach((item, index) => {\r\n    if (index === 0) {\r\n    } else {\r\n      item.classList = \"testimonials__slider--item none\";\r\n    }\r\n  });\r\n\r\nsetInterval(() => {\r\n  width++;\r\n  document\r\n    .querySelector(\"html\")\r\n    .style.setProperty(\"--width\", `${(width * 2) / 10}%`);\r\n  if (width === 500) {\r\n    width = 0;\r\n    document\r\n      .querySelectorAll(\".testimonials__slider--item\")\r\n      [index].classList.add(\"none\");\r\n    index = document.querySelectorAll(\".testimonials__slider--item\")[index + 1]\r\n      ? index + 1\r\n      : 0;\r\n    document\r\n      .querySelectorAll(\".testimonials__slider--item\")\r\n      [index].classList.remove(\"none\");\r\n  }\r\n}, 10);\r\n\n\n//# sourceURL=webpack:///./scripts/slider.js?");

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/index.scss?");

/***/ })

/******/ });
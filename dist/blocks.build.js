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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_index__ = __webpack_require__(/*! ./image/index */ 4);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vaW1hZ2UvaW5kZXgnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/*!****************************!*\
  !*** ./src/image/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__save_jsx__ = __webpack_require__(/*! ./save.jsx */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_jsx__ = __webpack_require__(/*! ./edit.jsx */ 8);\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n\n\n\nregisterBlockType('lyntouch/wp-media', {\n    title: __('Lyntouch - Image Block'), // Block title.\n    icon: 'shield',\n    category: 'common',\n    attributes: {\n        image: {\n            type: 'object',\n            selector: 'js-book-details-image'\n        }\n    },\n    keywords: [__('lyntouch-blocks')],\n    edit: __WEBPACK_IMPORTED_MODULE_3__edit_jsx__[\"a\" /* default */],\n    save: __WEBPACK_IMPORTED_MODULE_2__save_jsx__[\"a\" /* default */]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbWFnZS9pbmRleC5qcz8zZTU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5cbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZS5qc3gnO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0LmpzeCc7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdseW50b3VjaC93cC1tZWRpYScsIHtcbiAgICB0aXRsZTogX18oJ0x5bnRvdWNoIC0gSW1hZ2UgQmxvY2snKSwgLy8gQmxvY2sgdGl0bGUuXG4gICAgaWNvbjogJ3NoaWVsZCcsXG4gICAgY2F0ZWdvcnk6ICdjb21tb24nLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICdqcy1ib29rLWRldGFpbHMtaW1hZ2UnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGtleXdvcmRzOiBbX18oJ2x5bnRvdWNoLWJsb2NrcycpXSxcbiAgICBlZGl0OiBlZGl0LFxuICAgIHNhdmU6IHNhdmVcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltYWdlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*******************************!*\
  !*** ./src/image/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbWFnZS9lZGl0b3Iuc2Nzcz82ZDBjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1hZ2UvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!******************************!*\
  !*** ./src/image/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbWFnZS9zdHlsZS5zY3NzP2Y5YTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWFnZS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!****************************!*\
  !*** ./src/image/save.jsx ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = (function (props) {\n    return wp.element.createElement(\n        \"div\",\n        null,\n        \"test\"\n    );\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbWFnZS9zYXZlLmpzeD82NWQwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBudWxsLFxuICAgICAgICBcInRlc3RcIlxuICAgICk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWFnZS9zYXZlLmpzeFxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!****************************!*\
  !*** ./src/image/edit.jsx ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var Button = wp.components.Button;\nvar _wp$blockEditor = wp.blockEditor,\n    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,\n    MediaUpload = _wp$blockEditor.MediaUpload;\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (function (props) {\n    var attributes = props.attributes,\n        className = props.className,\n        setAttributes = props.setAttributes;\n    var image = attributes.image;\n\n\n    return wp.element.createElement(\n        'div',\n        { className: className },\n        wp.element.createElement(\n            MediaUploadCheck,\n            null,\n            wp.element.createElement(MediaUpload, {\n                className: 'js-book-details-image wp-admin-book-details-image',\n                allowedTypes: ['image'],\n                multiple: false,\n                value: image ? image.id : '',\n                onSelect: function onSelect(image) {\n                    return setAttributes({ image: image });\n                },\n                render: function render(_ref) {\n                    var open = _ref.open;\n                    return image ? wp.element.createElement(\n                        'figure',\n                        null,\n                        wp.element.createElement('img', { src: image.url, width: image.width / 2 }),\n                        wp.element.createElement(\n                            Button,\n                            { onClick: function onClick() {\n                                    return setAttributes({ image: '' });\n                                }, className: 'button is-small' },\n                            'Remove'\n                        )\n                    ) : wp.element.createElement(\n                        Button,\n                        { onClick: open, className: 'button' },\n                        'Upload Image'\n                    );\n                }\n            })\n        )\n    );\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbWFnZS9lZGl0LmpzeD84ODNmIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBCdXR0b24gPSB3cC5jb21wb25lbnRzLkJ1dHRvbjtcbnZhciBfd3AkYmxvY2tFZGl0b3IgPSB3cC5ibG9ja0VkaXRvcixcbiAgICBNZWRpYVVwbG9hZENoZWNrID0gX3dwJGJsb2NrRWRpdG9yLk1lZGlhVXBsb2FkQ2hlY2ssXG4gICAgTWVkaWFVcGxvYWQgPSBfd3AkYmxvY2tFZGl0b3IuTWVkaWFVcGxvYWQ7XG5cblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcbiAgICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcztcbiAgICB2YXIgaW1hZ2UgPSBhdHRyaWJ1dGVzLmltYWdlO1xuXG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBNZWRpYVVwbG9hZENoZWNrLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChNZWRpYVVwbG9hZCwge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2pzLWJvb2stZGV0YWlscy1pbWFnZSB3cC1hZG1pbi1ib29rLWRldGFpbHMtaW1hZ2UnLFxuICAgICAgICAgICAgICAgIGFsbG93ZWRUeXBlczogWydpbWFnZSddLFxuICAgICAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogaW1hZ2UgPyBpbWFnZS5pZCA6ICcnLFxuICAgICAgICAgICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdChpbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7IGltYWdlOiBpbWFnZSB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wZW4gPSBfcmVmLm9wZW47XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWFnZSA/IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdmaWd1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6IGltYWdlLnVybCwgd2lkdGg6IGltYWdlLndpZHRoIC8gMiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBpbWFnZTogJycgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGNsYXNzTmFtZTogJ2J1dHRvbiBpcy1zbWFsbCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUmVtb3ZlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApIDogd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBvbkNsaWNrOiBvcGVuLCBjbGFzc05hbWU6ICdidXR0b24nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnVXBsb2FkIEltYWdlJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICApO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1hZ2UvZWRpdC5qc3hcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ })
/******/ ]);
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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_image_index__ = __webpack_require__(/*! ./blocks/image/index */ 9);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vYmxvY2tzL2ltYWdlL2luZGV4JztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/*!***********************************!*\
  !*** ./src/blocks/image/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__save_jsx__ = __webpack_require__(/*! ./save.jsx */ 12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_jsx__ = __webpack_require__(/*! ./edit.jsx */ 13);\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n\n\n\nregisterBlockType('lyntouch/wp-media', {\n    title: __('Lyntouch - Image Block'), // Block title.\n    icon: 'shield',\n    category: 'common',\n    attributes: {\n        image: {\n            type: 'object',\n            selector: 'responsive-image'\n        },\n        variations: {\n            type: 'string',\n            default: '[]'\n        }\n    },\n    keywords: [__('lyntouch-blocks')],\n    edit: __WEBPACK_IMPORTED_MODULE_3__edit_jsx__[\"a\" /* default */],\n    save: __WEBPACK_IMPORTED_MODULE_2__save_jsx__[\"a\" /* default */]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW1hZ2UvaW5kZXguanM/Zjc1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUuanN4JztcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdC5qc3gnO1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnbHludG91Y2gvd3AtbWVkaWEnLCB7XG4gICAgdGl0bGU6IF9fKCdMeW50b3VjaCAtIEltYWdlIEJsb2NrJyksIC8vIEJsb2NrIHRpdGxlLlxuICAgIGljb246ICdzaGllbGQnLFxuICAgIGNhdGVnb3J5OiAnY29tbW9uJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAncmVzcG9uc2l2ZS1pbWFnZSdcbiAgICAgICAgfSxcbiAgICAgICAgdmFyaWF0aW9uczoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBkZWZhdWx0OiAnW10nXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGtleXdvcmRzOiBbX18oJ2x5bnRvdWNoLWJsb2NrcycpXSxcbiAgICBlZGl0OiBlZGl0LFxuICAgIHNhdmU6IHNhdmVcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9pbWFnZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!**************************************!*\
  !*** ./src/blocks/image/editor.scss ***!
  \**************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ltYWdlL2VkaXRvci5zY3NzPzM2ODAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvaW1hZ2UvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*************************************!*\
  !*** ./src/blocks/image/style.scss ***!
  \*************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ltYWdlL3N0eWxlLnNjc3M/ZWJiNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9pbWFnZS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!***********************************!*\
  !*** ./src/blocks/image/save.jsx ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = (function (_ref) {\n    var attributes = _ref.attributes;\n    var image = attributes.image;\n\n\n    return wp.element.createElement(\n        \"figure\",\n        null,\n        wp.element.createElement(\"img\", { src: image.url, alt: image.alt ? image.alt : image.title })\n    );\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ltYWdlL3NhdmUuanN4P2VjMTkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXM7XG4gICAgdmFyIGltYWdlID0gYXR0cmlidXRlcy5pbWFnZTtcblxuXG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJmaWd1cmVcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBpbWFnZS51cmwsIGFsdDogaW1hZ2UuYWx0ID8gaW1hZ2UuYWx0IDogaW1hZ2UudGl0bGUgfSlcbiAgICApO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzL2ltYWdlL3NhdmUuanN4XG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!***********************************!*\
  !*** ./src/blocks/image/edit.jsx ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var Button = wp.components.Button;\nvar _wp$blockEditor = wp.blockEditor,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,\n    MediaUpload = _wp$blockEditor.MediaUpload;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    TextControl = _wp$components.TextControl;\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (function (props) {\n    var attributes = props.attributes,\n        className = props.className,\n        setAttributes = props.setAttributes;\n    var image = attributes.image,\n        variations = attributes.variations;\n\n\n    function addVariation(width, height, media) {\n        if (variations === \"[]\") {\n            var newVar = JSON.parse(variations);\n\n            if (!newVar.includes({ width: width, height: height, media: media })) {\n                newVar.push({ width: width, height: height, media: media });\n                setAttributes({ variations: JSON.stringify(newVar) });\n            }\n        }\n    }\n\n    return [wp.element.createElement(\n        InspectorControls,\n        null,\n        wp.element.createElement(\n            PanelBody,\n            { title: 'Image Size Variations' },\n            JSON.parse(variations).map(function (value) {\n                return wp.element.createElement(\n                    \"p\",\n                    null,\n                    value.width\n                );\n            }),\n            wp.element.createElement(\n                Button,\n                { onClick: addVariation(100, 200, 300), className: \"button\" },\n                \"Add Variation\"\n            )\n        )\n    ), wp.element.createElement(\n        \"div\",\n        { className: className },\n        wp.element.createElement(\n            MediaUploadCheck,\n            null,\n            wp.element.createElement(MediaUpload, {\n                className: \"js-book-details-image wp-admin-book-details-image\",\n                allowedTypes: ['image'],\n                multiple: false,\n                value: image ? image.id : '',\n                onSelect: function onSelect(image) {\n                    return setAttributes({ image: image });\n                },\n                render: function render(_ref) {\n                    var open = _ref.open;\n                    return image ? wp.element.createElement(\n                        \"figure\",\n                        null,\n                        wp.element.createElement(\"img\", { src: image.url, width: image.width / 2 }),\n                        wp.element.createElement(\n                            Button,\n                            { onClick: function onClick() {\n                                    return setAttributes({ image: '' });\n                                }, className: \"button is-small\" },\n                            \"Remove\"\n                        )\n                    ) : wp.element.createElement(\n                        Button,\n                        { onClick: open, className: \"button\" },\n                        \"Upload Image\"\n                    );\n                }\n            })\n        )\n    )];\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ltYWdlL2VkaXQuanN4P2Y4NmYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEJ1dHRvbiA9IHdwLmNvbXBvbmVudHMuQnV0dG9uO1xudmFyIF93cCRibG9ja0VkaXRvciA9IHdwLmJsb2NrRWRpdG9yLFxuICAgIEluc3BlY3RvckNvbnRyb2xzID0gX3dwJGJsb2NrRWRpdG9yLkluc3BlY3RvckNvbnRyb2xzLFxuICAgIE1lZGlhVXBsb2FkQ2hlY2sgPSBfd3AkYmxvY2tFZGl0b3IuTWVkaWFVcGxvYWRDaGVjayxcbiAgICBNZWRpYVVwbG9hZCA9IF93cCRibG9ja0VkaXRvci5NZWRpYVVwbG9hZDtcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFRleHRDb250cm9sID0gX3dwJGNvbXBvbmVudHMuVGV4dENvbnRyb2w7XG5cblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcbiAgICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcztcbiAgICB2YXIgaW1hZ2UgPSBhdHRyaWJ1dGVzLmltYWdlLFxuICAgICAgICB2YXJpYXRpb25zID0gYXR0cmlidXRlcy52YXJpYXRpb25zO1xuXG5cbiAgICBmdW5jdGlvbiBhZGRWYXJpYXRpb24od2lkdGgsIGhlaWdodCwgbWVkaWEpIHtcbiAgICAgICAgaWYgKHZhcmlhdGlvbnMgPT09IFwiW11cIikge1xuICAgICAgICAgICAgdmFyIG5ld1ZhciA9IEpTT04ucGFyc2UodmFyaWF0aW9ucyk7XG5cbiAgICAgICAgICAgIGlmICghbmV3VmFyLmluY2x1ZGVzKHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCwgbWVkaWE6IG1lZGlhIH0pKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFyLnB1c2goeyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0LCBtZWRpYTogbWVkaWEgfSk7XG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IHZhcmlhdGlvbnM6IEpTT04uc3RyaW5naWZ5KG5ld1ZhcikgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW3dwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFBhbmVsQm9keSxcbiAgICAgICAgICAgIHsgdGl0bGU6ICdJbWFnZSBTaXplIFZhcmlhdGlvbnMnIH0sXG4gICAgICAgICAgICBKU09OLnBhcnNlKHZhcmlhdGlvbnMpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUud2lkdGhcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgICAgIHsgb25DbGljazogYWRkVmFyaWF0aW9uKDEwMCwgMjAwLCAzMDApLCBjbGFzc05hbWU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICBcIkFkZCBWYXJpYXRpb25cIlxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgKSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIE1lZGlhVXBsb2FkQ2hlY2ssXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KE1lZGlhVXBsb2FkLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImpzLWJvb2stZGV0YWlscy1pbWFnZSB3cC1hZG1pbi1ib29rLWRldGFpbHMtaW1hZ2VcIixcbiAgICAgICAgICAgICAgICBhbGxvd2VkVHlwZXM6IFsnaW1hZ2UnXSxcbiAgICAgICAgICAgICAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGltYWdlID8gaW1hZ2UuaWQgOiAnJyxcbiAgICAgICAgICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24gb25TZWxlY3QoaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBpbWFnZTogaW1hZ2UgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcGVuID0gX3JlZi5vcGVuO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1hZ2UgPyB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZpZ3VyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogaW1hZ2UudXJsLCB3aWR0aDogaW1hZ2Uud2lkdGggLyAyIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7IGltYWdlOiAnJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgY2xhc3NOYW1lOiBcImJ1dHRvbiBpcy1zbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSZW1vdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApIDogd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBvbkNsaWNrOiBvcGVuLCBjbGFzc05hbWU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVXBsb2FkIEltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgKV07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvaW1hZ2UvZWRpdC5qc3hcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ })
/******/ ]);
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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_image_index__ = __webpack_require__(/*! ./blocks/image/index */ 1);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vYmxvY2tzL2ltYWdlL2luZGV4JztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************************!*\
  !*** ./src/blocks/image/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__save_jsx__ = __webpack_require__(/*! ./save.jsx */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_jsx__ = __webpack_require__(/*! ./edit.jsx */ 5);\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n\n\n\nregisterBlockType('lyntouch/wp-media', {\n    title: __('Lyntouch - Image Block'), // Block title.\n    icon: 'shield',\n    category: 'common',\n    attributes: {\n        image: {\n            type: 'object',\n            selector: 'responsive-image'\n        },\n        imageParams: {\n            type: 'object',\n            default: { width: null, height: null, mediaWidth: null }\n        },\n        variations: {\n            type: 'string',\n            default: '[]'\n        }\n    },\n    keywords: [__('lyntouch-blocks')],\n    edit: __WEBPACK_IMPORTED_MODULE_3__edit_jsx__[\"a\" /* default */],\n    save: __WEBPACK_IMPORTED_MODULE_2__save_jsx__[\"a\" /* default */]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW1hZ2UvaW5kZXguanM/Zjc1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUuanN4JztcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdC5qc3gnO1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnbHludG91Y2gvd3AtbWVkaWEnLCB7XG4gICAgdGl0bGU6IF9fKCdMeW50b3VjaCAtIEltYWdlIEJsb2NrJyksIC8vIEJsb2NrIHRpdGxlLlxuICAgIGljb246ICdzaGllbGQnLFxuICAgIGNhdGVnb3J5OiAnY29tbW9uJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAncmVzcG9uc2l2ZS1pbWFnZSdcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2VQYXJhbXM6IHtcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgZGVmYXVsdDogeyB3aWR0aDogbnVsbCwgaGVpZ2h0OiBudWxsLCBtZWRpYVdpZHRoOiBudWxsIH1cbiAgICAgICAgfSxcbiAgICAgICAgdmFyaWF0aW9uczoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBkZWZhdWx0OiAnW10nXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGtleXdvcmRzOiBbX18oJ2x5bnRvdWNoLWJsb2NrcycpXSxcbiAgICBlZGl0OiBlZGl0LFxuICAgIHNhdmU6IHNhdmVcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9pbWFnZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**************************************!*\
  !*** ./src/blocks/image/editor.scss ***!
  \**************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW1hZ2UvZWRpdG9yLnNjc3M/MzY4MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9pbWFnZS9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*************************************!*\
  !*** ./src/blocks/image/style.scss ***!
  \*************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW1hZ2Uvc3R5bGUuc2Nzcz9lYmI2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzL2ltYWdlL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***********************************!*\
  !*** ./src/blocks/image/save.jsx ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("function resizeImg(path, width, height) {\n    return {\n        width: width,\n        height: height,\n        src: lyntouchGlobal.siteUrl + '/media?image=' + path + '&args[w]=' + width + '&args[h]=' + height + '&args[crop]=crop',\n        srcSet: lyntouchGlobal.siteUrl + '/media?image=' + path + '&args[w]=' + width + '&args[h]=' + height + '&args[crop]=crop, ' + lyntouchGlobal.siteUrl + '/media?image=' + path + '&args[w]=' + width * 2 + '&args[h]=' + height * 2 + '&args[crop]=crop 2x'\n    };\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (function (_ref) {\n    var attributes = _ref.attributes;\n    var image = attributes.image,\n        variations = attributes.variations;\n\n\n    var imgVariations = JSON.parse(variations);\n    var imgPath = image.sizes.full.url.replace(lyntouchGlobal.siteUrl + '/wp-content/uploads/', '');\n    var img = imgVariations.length > 0 ? resizeImg(imgPath, imgVariations[0].width, imgVariations[0].height) : image.sizes.full.url;\n\n    return wp.element.createElement(\n        'picture',\n        null,\n        imgVariations.map(function (img) {\n            var imgObj = resizeImg(imgPath, img.width, img.height);\n            return wp.element.createElement('source', { srcSet: imgObj.srcSet, media: '(' + img.media + ')' });\n        }),\n        wp.element.createElement('img', {\n            src: img.src,\n            alt: image.alt ? image.alt : image.title,\n            width: img.width,\n            height: img.height\n        })\n    );\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW1hZ2Uvc2F2ZS5qc3g/ZWMxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiByZXNpemVJbWcocGF0aCwgd2lkdGgsIGhlaWdodCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgIHNyYzogbHludG91Y2hHbG9iYWwuc2l0ZVVybCArICcvbWVkaWE/aW1hZ2U9JyArIHBhdGggKyAnJmFyZ3Nbd109JyArIHdpZHRoICsgJyZhcmdzW2hdPScgKyBoZWlnaHQgKyAnJmFyZ3NbY3JvcF09Y3JvcCcsXG4gICAgICAgIHNyY1NldDogbHludG91Y2hHbG9iYWwuc2l0ZVVybCArICcvbWVkaWE/aW1hZ2U9JyArIHBhdGggKyAnJmFyZ3Nbd109JyArIHdpZHRoICsgJyZhcmdzW2hdPScgKyBoZWlnaHQgKyAnJmFyZ3NbY3JvcF09Y3JvcCwgJyArIGx5bnRvdWNoR2xvYmFsLnNpdGVVcmwgKyAnL21lZGlhP2ltYWdlPScgKyBwYXRoICsgJyZhcmdzW3ddPScgKyB3aWR0aCAqIDIgKyAnJmFyZ3NbaF09JyArIGhlaWdodCAqIDIgKyAnJmFyZ3NbY3JvcF09Y3JvcCAyeCdcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcztcbiAgICB2YXIgaW1hZ2UgPSBhdHRyaWJ1dGVzLmltYWdlLFxuICAgICAgICB2YXJpYXRpb25zID0gYXR0cmlidXRlcy52YXJpYXRpb25zO1xuXG5cbiAgICB2YXIgaW1nVmFyaWF0aW9ucyA9IEpTT04ucGFyc2UodmFyaWF0aW9ucyk7XG4gICAgdmFyIGltZ1BhdGggPSBpbWFnZS5zaXplcy5mdWxsLnVybC5yZXBsYWNlKGx5bnRvdWNoR2xvYmFsLnNpdGVVcmwgKyAnL3dwLWNvbnRlbnQvdXBsb2Fkcy8nLCAnJyk7XG4gICAgdmFyIGltZyA9IGltZ1ZhcmlhdGlvbnMubGVuZ3RoID4gMCA/IHJlc2l6ZUltZyhpbWdQYXRoLCBpbWdWYXJpYXRpb25zWzBdLndpZHRoLCBpbWdWYXJpYXRpb25zWzBdLmhlaWdodCkgOiBpbWFnZS5zaXplcy5mdWxsLnVybDtcblxuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdwaWN0dXJlJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgaW1nVmFyaWF0aW9ucy5tYXAoZnVuY3Rpb24gKGltZykge1xuICAgICAgICAgICAgdmFyIGltZ09iaiA9IHJlc2l6ZUltZyhpbWdQYXRoLCBpbWcud2lkdGgsIGltZy5oZWlnaHQpO1xuICAgICAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJywgeyBzcmNTZXQ6IGltZ09iai5zcmNTZXQsIG1lZGlhOiAnKCcgKyBpbWcubWVkaWEgKyAnKScgfSk7XG4gICAgICAgIH0pLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtcbiAgICAgICAgICAgIHNyYzogaW1nLnNyYyxcbiAgICAgICAgICAgIGFsdDogaW1hZ2UuYWx0ID8gaW1hZ2UuYWx0IDogaW1hZ2UudGl0bGUsXG4gICAgICAgICAgICB3aWR0aDogaW1nLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBpbWcuaGVpZ2h0XG4gICAgICAgIH0pXG4gICAgKTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9pbWFnZS9zYXZlLmpzeFxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!***********************************!*\
  !*** ./src/blocks/image/edit.jsx ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\nvar Button = wp.components.Button;\nvar _wp$blockEditor = wp.blockEditor,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,\n    MediaUpload = _wp$blockEditor.MediaUpload;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    TextControl = _wp$components.TextControl;\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (function (props) {\n    var attributes = props.attributes,\n        className = props.className,\n        setAttributes = props.setAttributes;\n    var image = attributes.image,\n        variations = attributes.variations;\n\n\n    function addVariation() {\n        var newVar = JSON.parse(variations);\n        var newSize = { width: null, height: null, media: null };\n        console.log(newVar);\n        if (!newVar.includes(newSize)) {\n            newVar.push(newSize);\n            setAttributes({ variations: JSON.stringify(newVar) });\n        }\n    }\n\n    var variationsArr = JSON.parse(variations);\n    return [wp.element.createElement(\n        InspectorControls,\n        null,\n        wp.element.createElement(\n            PanelBody,\n            { title: 'Image Size Variations' },\n            variationsArr.map(function (value, index) {\n                return wp.element.createElement(\n                    'div',\n                    { className: 'flex flex-wrap border' },\n                    wp.element.createElement(TextControl, {\n                        className: 'w-1/2',\n                        label: 'Width',\n                        type: 'number',\n                        value: value.width,\n                        onChange: function onChange(value) {\n                            variationsArr[index].width = value;\n                            setAttributes({ variations: JSON.stringify(variationsArr) });\n                        },\n                        min: 150,\n                        max: 3000\n                    }),\n                    wp.element.createElement(TextControl, {\n                        label: 'Height',\n                        type: 'number',\n                        className: 'w-1/2',\n                        value: value.height,\n                        onChange: function onChange(value) {\n                            variationsArr[index].height = value;\n                            setAttributes({ variations: JSON.stringify(variationsArr) });\n                        },\n                        min: 150,\n                        max: 2000\n                    }),\n                    wp.element.createElement(TextControl, {\n                        label: 'Media',\n                        type: 'string',\n                        className: 'w-full',\n                        value: value.media,\n                        onChange: function onChange(value) {\n                            variationsArr[index].media = value;\n                            setAttributes({ variations: JSON.stringify(variationsArr) });\n                        }\n                    })\n                );\n            }),\n            wp.element.createElement(\n                Button,\n                { onClick: addVariation, className: 'button' },\n                'Add Variation'\n            )\n        )\n    ), wp.element.createElement(\n        'div',\n        { className: className },\n        wp.element.createElement(\n            MediaUploadCheck,\n            null,\n            wp.element.createElement(MediaUpload, {\n                className: 'js-book-details-image wp-admin-book-details-image',\n                allowedTypes: ['image'],\n                multiple: false,\n                value: image ? image.id : '',\n                onSelect: function onSelect(image) {\n                    return setAttributes({ image: image });\n                },\n                render: function render(_ref) {\n                    var open = _ref.open;\n                    return image ? wp.element.createElement(\n                        'figure',\n                        null,\n                        wp.element.createElement('img', { src: image.url, width: image.width / 2 }),\n                        wp.element.createElement(\n                            Button,\n                            { onClick: function onClick() {\n                                    return setAttributes({ image: '' });\n                                }, className: 'button is-small' },\n                            'Remove'\n                        )\n                    ) : wp.element.createElement(\n                        Button,\n                        { onClick: open, className: 'button' },\n                        'Upload Image'\n                    );\n                }\n            })\n        )\n    )];\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW1hZ2UvZWRpdC5qc3g/Zjg2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQnV0dG9uID0gd3AuY29tcG9uZW50cy5CdXR0b247XG52YXIgX3dwJGJsb2NrRWRpdG9yID0gd3AuYmxvY2tFZGl0b3IsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSBfd3AkYmxvY2tFZGl0b3IuSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgTWVkaWFVcGxvYWRDaGVjayA9IF93cCRibG9ja0VkaXRvci5NZWRpYVVwbG9hZENoZWNrLFxuICAgIE1lZGlhVXBsb2FkID0gX3dwJGJsb2NrRWRpdG9yLk1lZGlhVXBsb2FkO1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBQYW5lbEJvZHkgPSBfd3AkY29tcG9uZW50cy5QYW5lbEJvZHksXG4gICAgVGV4dENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5UZXh0Q29udHJvbDtcblxuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzO1xuICAgIHZhciBpbWFnZSA9IGF0dHJpYnV0ZXMuaW1hZ2UsXG4gICAgICAgIHZhcmlhdGlvbnMgPSBhdHRyaWJ1dGVzLnZhcmlhdGlvbnM7XG5cblxuICAgIGZ1bmN0aW9uIGFkZFZhcmlhdGlvbigpIHtcbiAgICAgICAgdmFyIG5ld1ZhciA9IEpTT04ucGFyc2UodmFyaWF0aW9ucyk7XG4gICAgICAgIHZhciBuZXdTaXplID0geyB3aWR0aDogbnVsbCwgaGVpZ2h0OiBudWxsLCBtZWRpYTogbnVsbCB9O1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdWYXIpO1xuICAgICAgICBpZiAoIW5ld1Zhci5pbmNsdWRlcyhuZXdTaXplKSkge1xuICAgICAgICAgICAgbmV3VmFyLnB1c2gobmV3U2l6ZSk7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgdmFyaWF0aW9uczogSlNPTi5zdHJpbmdpZnkobmV3VmFyKSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciB2YXJpYXRpb25zQXJyID0gSlNPTi5wYXJzZSh2YXJpYXRpb25zKTtcbiAgICByZXR1cm4gW3dwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFBhbmVsQm9keSxcbiAgICAgICAgICAgIHsgdGl0bGU6ICdJbWFnZSBTaXplIFZhcmlhdGlvbnMnIH0sXG4gICAgICAgICAgICB2YXJpYXRpb25zQXJyLm1hcChmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnZmxleCBmbGV4LXdyYXAgYm9yZGVyJyB9LFxuICAgICAgICAgICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3ctMS8yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnV2lkdGgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25zQXJyW2luZGV4XS53aWR0aCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyB2YXJpYXRpb25zOiBKU09OLnN0cmluZ2lmeSh2YXJpYXRpb25zQXJyKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heDogMzAwMFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0hlaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3ctMS8yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25zQXJyW2luZGV4XS5oZWlnaHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgdmFyaWF0aW9uczogSlNPTi5zdHJpbmdpZnkodmFyaWF0aW9uc0FycikgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDIwMDBcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdNZWRpYScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3ctZnVsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUubWVkaWEsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25zQXJyW2luZGV4XS5tZWRpYSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyB2YXJpYXRpb25zOiBKU09OLnN0cmluZ2lmeSh2YXJpYXRpb25zQXJyKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgICAgIHsgb25DbGljazogYWRkVmFyaWF0aW9uLCBjbGFzc05hbWU6ICdidXR0b24nIH0sXG4gICAgICAgICAgICAgICAgJ0FkZCBWYXJpYXRpb24nXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICApLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIE1lZGlhVXBsb2FkQ2hlY2ssXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KE1lZGlhVXBsb2FkLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnanMtYm9vay1kZXRhaWxzLWltYWdlIHdwLWFkbWluLWJvb2stZGV0YWlscy1pbWFnZScsXG4gICAgICAgICAgICAgICAgYWxsb3dlZFR5cGVzOiBbJ2ltYWdlJ10sXG4gICAgICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBpbWFnZSA/IGltYWdlLmlkIDogJycsXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KGltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgaW1hZ2U6IGltYWdlIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoX3JlZikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3BlbiA9IF9yZWYub3BlbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGltYWdlID8gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZpZ3VyZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogaW1hZ2UudXJsLCB3aWR0aDogaW1hZ2Uud2lkdGggLyAyIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7IGltYWdlOiAnJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgY2xhc3NOYW1lOiAnYnV0dG9uIGlzLXNtYWxsJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdSZW1vdmUnXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICkgOiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG9uQ2xpY2s6IG9wZW4sIGNsYXNzTmFtZTogJ2J1dHRvbicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdVcGxvYWQgSW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICldO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzL2ltYWdlL2VkaXQuanN4XG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ })
/******/ ]);
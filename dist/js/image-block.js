/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Blocks/Image/edit.jsx":
/*!***********************************!*\
  !*** ./src/Blocks/Image/edit.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/Blocks/Image/editor.scss");

var Button = wp.components.Button;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    MediaUpload = _wp$blockEditor.MediaUpload;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (props) {
  var attributes = props.attributes,
      className = props.className,
      setAttributes = props.setAttributes;
  var image = attributes.image,
      variations = attributes.variations;

  function addVariation() {
    var newVar = JSON.parse(variations);
    var newSize = {
      width: null,
      height: null,
      media: null
    };
    console.log(newVar);

    if (!newVar.includes(newSize)) {
      newVar.push(newSize);
      setAttributes({
        variations: JSON.stringify(newVar)
      });
    }
  }

  var variationsArr = JSON.parse(variations);
  return [/*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
    title: 'Image Size Variations'
  }, variationsArr.map(function (value, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap border"
    }, /*#__PURE__*/React.createElement(TextControl, {
      className: "w-1/2",
      label: "Width",
      type: "number",
      value: value.width,
      onChange: function onChange(value) {
        variationsArr[index].width = value;
        setAttributes({
          variations: JSON.stringify(variationsArr)
        });
      },
      min: 150,
      max: 3000
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: "Height",
      type: "number",
      className: "w-1/2",
      value: value.height,
      onChange: function onChange(value) {
        variationsArr[index].height = value;
        setAttributes({
          variations: JSON.stringify(variationsArr)
        });
      },
      min: 150,
      max: 2000
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: "Media",
      type: "string",
      className: "w-full",
      value: value.media,
      onChange: function onChange(value) {
        variationsArr[index].media = value;
        setAttributes({
          variations: JSON.stringify(variationsArr)
        });
      }
    }));
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: addVariation,
    className: "button"
  }, "Add Variation"))), /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement(MediaUploadCheck, null, /*#__PURE__*/React.createElement(MediaUpload, {
    className: "js-book-details-image wp-admin-book-details-image",
    allowedTypes: ['image'],
    multiple: false,
    value: image ? image.id : '',
    onSelect: function onSelect(image) {
      return setAttributes({
        image: image
      });
    },
    render: function render(_ref) {
      var open = _ref.open;
      return image ? /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("img", {
        src: image.url,
        width: image.width / 2
      }), /*#__PURE__*/React.createElement(Button, {
        onClick: function onClick() {
          return setAttributes({
            image: ''
          });
        },
        className: "button is-small"
      }, "Remove")) : /*#__PURE__*/React.createElement(Button, {
        onClick: open,
        className: "button"
      }, "Upload Image");
    }
  })))];
});

/***/ }),

/***/ "./src/Blocks/Image/image-block.js":
/*!*****************************************!*\
  !*** ./src/Blocks/Image/image-block.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _save_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save.jsx */ "./src/Blocks/Image/save.jsx");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.jsx */ "./src/Blocks/Image/edit.jsx");
var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks



registerBlockType('lyntouch/wp-media', {
  title: __('Lyntouch - Image Block'),
  // Block title.
  icon: 'shield',
  category: 'common',
  attributes: {
    image: {
      type: 'object',
      selector: 'responsive-image'
    },
    imageParams: {
      type: 'object',
      "default": {
        width: null,
        height: null,
        mediaWidth: null
      }
    },
    variations: {
      type: 'string',
      "default": '[]'
    }
  },
  keywords: [__('lyntouch-blocks')],
  edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.default,
  save: _save_jsx__WEBPACK_IMPORTED_MODULE_0__.default
});

/***/ }),

/***/ "./src/Blocks/Image/save.jsx":
/*!***********************************!*\
  !*** ./src/Blocks/Image/save.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/Blocks/Image/style.scss");


function resizeImg(path, width, height) {
  return {
    width: width,
    height: height,
    src: "".concat(lyntouchGlobal.siteUrl, "/media?image=").concat(path, "&args[w]=").concat(width, "&args[h]=").concat(height, "&args[fit]=crop"),
    srcSet: "".concat(lyntouchGlobal.siteUrl, "/media?image=").concat(path, "&args[w]=").concat(width, "&args[h]=").concat(height, "&args[fit]=crop, ").concat(lyntouchGlobal.siteUrl, "/media?image=").concat(path, "&args[w]=").concat(width * 2, "&args[h]=").concat(height * 2, "&args[fit]=crop 2x")
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var attributes = _ref.attributes;
  var image = attributes.image,
      variations = attributes.variations;
  var imgVariations = JSON.parse(variations);
  var imgPath = image.sizes.full.url.replace("".concat(lyntouchGlobal.siteUrl, "/wp-content/uploads/"), '');
  var img = imgVariations.length > 0 ? resizeImg(imgPath, imgVariations[0].width, imgVariations[0].height) : image.sizes.full.url;
  return /*#__PURE__*/React.createElement("picture", null, imgVariations.map(function (img) {
    var imgObj = resizeImg(imgPath, img.width, img.height);
    return /*#__PURE__*/React.createElement("source", {
      srcSet: imgObj.srcSet,
      media: "(".concat(img.media, ")")
    });
  }), /*#__PURE__*/React.createElement("img", {
    src: img.src,
    alt: image.alt ? image.alt : image.title,
    width: img.width,
    height: img.height
  }));
});

/***/ }),

/***/ "./src/Blocks/Swiper/sass/swiper.scss":
/*!********************************************!*\
  !*** ./src/Blocks/Swiper/sass/swiper.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Blocks/Gallery/sass/photoswipe.scss":
/*!*************************************************!*\
  !*** ./src/Blocks/Gallery/sass/photoswipe.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Blocks/Image/editor.scss":
/*!**************************************!*\
  !*** ./src/Blocks/Image/editor.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Blocks/Image/style.scss":
/*!*************************************!*\
  !*** ./src/Blocks/Image/style.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/js/image-block": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/Blocks/Image/image-block.js"],
/******/ 			["./src/Blocks/Swiper/sass/swiper.scss"],
/******/ 			["./src/Blocks/Gallery/sass/photoswipe.scss"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklyntouch_wp_code"] = self["webpackChunklyntouch_wp_code"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
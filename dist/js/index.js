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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Blocks/Image/edit.jsx":
/*!***********************************!*\
  !*** ./src/Blocks/Image/edit.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/Blocks/Image/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
var Button = wp.components.Button;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    MediaUpload = _wp$blockEditor.MediaUpload;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl;

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
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

/***/ "./src/Blocks/Image/editor.scss":
/*!**************************************!*\
  !*** ./src/Blocks/Image/editor.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/Blocks/Image/index.js":
/*!***********************************!*\
  !*** ./src/Blocks/Image/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/Blocks/Image/save.jsx":
/*!***********************************!*\
  !*** ./src/Blocks/Image/save.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function resizeImg(path, width, height) {
  return {
    width: width,
    height: height,
    src: "".concat(lyntouchGlobal.siteUrl, "/media?image=").concat(path, "&args[w]=").concat(width, "&args[h]=").concat(height, "&args[fit]=crop"),
    srcSet: "".concat(lyntouchGlobal.siteUrl, "/media?image=").concat(path, "&args[w]=").concat(width, "&args[h]=").concat(height, "&args[fit]=crop, ").concat(lyntouchGlobal.siteUrl, "/media?image=").concat(path, "&args[w]=").concat(width * 2, "&args[h]=").concat(height * 2, "&args[fit]=crop 2x")
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
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

/***/ 1:
/*!*****************************************!*\
  !*** multi ./src/Blocks/Image/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/andrius/www/alisiagreen.test/wp-content/plugins/lyntouch-modules/src/Blocks/Image/index.js */"./src/Blocks/Image/index.js");


/***/ })

/******/ });
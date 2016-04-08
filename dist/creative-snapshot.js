(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["creative-snapshot"] = factory(require("react"));
	else
		root["creative-snapshot"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ContainerNode = exports.ContainerNode = __webpack_require__(1);
	var ImageNode = exports.ImageNode = __webpack_require__(3);
	var ShapeNode = exports.ShapeNode = __webpack_require__(4);
	var TextNode = exports.TextNode = __webpack_require__(5);
	exports.default = __webpack_require__(6);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import classes from './ContainerNode.scss'
	
	function ContainerNode(props) {
	  var style = {
	    borderWidth: props.node.borderSize.value,
	    borderColor: props.node.borderColor.value,
	    width: '100%',
	    height: '100%',
	    borderStyle: 'solid'
	  };
	
	  return _react2.default.createElement('div', { /* className={classes.container} */style: style });
	}
	
	ContainerNode.propTypes = {
	  node: _react2.default.PropTypes.object.isRequired
	};
	
	exports.default = ContainerNode;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// import classes from './ImageNode.scss'
	
	var ImageNode = function (_React$Component) {
	  _inherits(ImageNode, _React$Component);
	
	  function ImageNode() {
	    _classCallCheck(this, ImageNode);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ImageNode).apply(this, arguments));
	  }
	
	  _createClass(ImageNode, [{
	    key: 'safeGetData',
	    value: function safeGetData(prop) {
	      var source = this.props.data || [];
	      var datum = source[(this.props.node.src.rank || 1) - 1] || {};
	      return datum[prop] || '';
	    }
	  }, {
	    key: 'imageSource',
	    value: function imageSource() {
	      var type = this.props.node.src.type || 'static';
	      return type === 'static' ? this.props.node.src.value : this.safeGetData(this.props.node.src.field);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var style = {
	        borderWidth: this.props.node.borderSize.value,
	        borderColor: this.props.node.borderColor.value,
	        width: '100%',
	        height: '100%',
	        borderStyle: 'solid'
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { /* className={classes.image} */style: style },
	        _react2.default.createElement('img', { src: this.imageSource(),
	          style: {
	            width: '100%',
	            height: '100%'
	          }
	        })
	      );
	    }
	  }]);
	
	  return ImageNode;
	}(_react2.default.Component);
	
	ImageNode.propTypes = {
	  node: _react2.default.PropTypes.object.isRequired,
	  data: _react2.default.PropTypes.array
	};
	ImageNode.defaultProps = {
	  dataSource: 'newArrivals'
	};
	exports.default = ImageNode;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import classes from './ShapeNode.scss'
	
	function ShapeNode(props) {
	  var style = {
	    borderRadius: props.node.cornerRadius.value,
	    backgroundColor: props.node.fill.type === 'color' ? props.node.fill.value : 'auto',
	    backgroundImage: props.node.fill.type === 'image' ? 'url(' + props.node.fill.value + ')' : 'none',
	    borderWidth: props.node.borderSize.value,
	    borderColor: props.node.borderColor.value,
	    width: '100%',
	    height: '100%',
	    borderStyle: 'solid',
	    backgroundSize: 'cover',
	    backgroundPosition: 'center',
	    backgroundRepeat: 'no-repeat'
	  };
	
	  return _react2.default.createElement('div', { /* className={classes.shape} */style: style });
	}
	
	ShapeNode.propTypes = {
	  node: _react2.default.PropTypes.object.isRequired
	};
	
	exports.default = ShapeNode;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function TextNode(props) {
	  var style = {
	    fontFamily: props.node.font.value,
	    fontWeight: props.node.weight.value,
	    color: props.node.color.value,
	    fontSize: props.node.size.value
	  };
	
	  function safeGetData(prop) {
	    var source = props.data || [];
	    var datum = source[(props.node.text.rank || 1) - 1] || {};
	    return datum[prop] || '';
	  }
	
	  function textValue() {
	    var type = props.node.text.type || 'static';
	    return type === 'static' ? props.node.text.value : safeGetData(props.node.text.field);
	  }
	
	  return _react2.default.createElement(
	    'div',
	    { style: style },
	    textValue()
	  );
	}
	
	TextNode.propTypes = {
	  node: _react2.default.PropTypes.object.isRequired,
	  data: _react2.default.PropTypes.array
	};
	
	exports.default = TextNode;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ContainerNode = __webpack_require__(1);
	
	var _ContainerNode2 = _interopRequireDefault(_ContainerNode);
	
	var _ImageNode = __webpack_require__(3);
	
	var _ImageNode2 = _interopRequireDefault(_ImageNode);
	
	var _ShapeNode = __webpack_require__(4);
	
	var _ShapeNode2 = _interopRequireDefault(_ShapeNode);
	
	var _TextNode = __webpack_require__(5);
	
	var _TextNode2 = _interopRequireDefault(_TextNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// import classes from './CreativeSnapshot.scss'
	
	var CreativeSnapshot = function (_React$Component) {
	  _inherits(CreativeSnapshot, _React$Component);
	
	  function CreativeSnapshot() {
	    _classCallCheck(this, CreativeSnapshot);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CreativeSnapshot).apply(this, arguments));
	  }
	
	  _createClass(CreativeSnapshot, [{
	    key: 'getCanvasNode',
	    value: function getCanvasNode() {
	      var _props$doc = this.props.doc;
	      var canvases = _props$doc.canvases;
	      var nodes = _props$doc.nodes;
	
	      return nodes.find(function (n) {
	        return n.id === canvases[0];
	      });
	    }
	  }, {
	    key: 'buildTree',
	    value: function buildTree(id, nodes) {
	      var _this2 = this;
	
	      var node = nodes.find(function (n) {
	        return n.id === id;
	      });
	      return _extends({}, node, {
	        children: (node.children || []).map(function (c) {
	          return _this2.buildTree(c, nodes);
	        })
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var canvas = this.getCanvasNode();
	      var container = this.refs.container;
	      var parent = container.parentNode.getBoundingClientRect();
	
	      // do scaling
	      var scale = parent.width / canvas.width.value;
	      container.style.transformOrigin = 'top left';
	      container.style.transform = 'scale(' + scale + ')';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var id = this.props.doc.canvases[0];
	      var root = this.buildTree(id, this.props.doc.nodes);
	      var canvas = this.getCanvasNode();
	
	      return _react2.default.createElement(
	        'div',
	        { /* className={classes.creative} */
	          style: {
	            width: canvas.width.value + 'px',
	            height: canvas.height.value + 'px',
	            position: 'relative',
	            overflow: 'hidden'
	          },
	          ref: 'container'
	        },
	        root.children.map(function (c) {
	          return _react2.default.createElement(Node, {
	            key: c.id,
	            node: c,
	            data: _this3.props.data
	          });
	        })
	      );
	    }
	  }]);
	
	  return CreativeSnapshot;
	}(_react2.default.Component);
	
	CreativeSnapshot.propTypes = {
	  doc: _react2.default.PropTypes.object.isRequired,
	  data: _react2.default.PropTypes.array
	};
	
	
	function Node(props) {
	  var node = props.node;
	
	
	  var layoutCss = function layoutCss(prop) {
	    return prop.type === 'auto' ? 'auto' : '' + prop.value + prop.type;
	  };
	
	  function transforms(node) {
	    var ts = [];
	    if ((node.vAlign || {}).value === 'middle') {
	      ts.push('translateY(-50%)');
	    }
	    if ((node.hAlign || {}).value === 'center') {
	      ts.push('translateX(-50%)');
	    }
	    return ts.join(' ');
	  }
	
	  var style = {
	    width: layoutCss(node.width),
	    height: layoutCss(node.height),
	    top: layoutCss(node.top),
	    right: layoutCss(node.right),
	    bottom: layoutCss(node.bottom),
	    left: layoutCss(node.left),
	    transform: transforms(node),
	    opacity: node.opacity.value / 100,
	    overflow: node.mask.value ? 'hidden' : 'visible',
	    position: 'absolute'
	  };
	
	  return _react2.default.createElement(
	    'div',
	    {
	      /* className={classes.node} */
	      style: style
	    },
	    _react2.default.createElement(
	      'div',
	      { /* className={classes.content} */
	        style: {
	          width: '100%',
	          height: '100%'
	        } },
	      node.type === 'image' && _react2.default.createElement(_ImageNode2.default, { node: node, data: props.data }),
	      node.type === 'text' && _react2.default.createElement(_TextNode2.default, { node: node, data: props.data }),
	      node.type === 'shape' && _react2.default.createElement(_ShapeNode2.default, { node: node }),
	      node.type === 'container' && _react2.default.createElement(_ContainerNode2.default, { node: node })
	    ),
	    node.children.map(function (n) {
	      return _react2.default.createElement(Node, { key: n.id, node: n, data: props.data });
	    })
	  );
	}
	Node.propTypes = {
	  node: _react2.default.PropTypes.object.isRequired,
	  data: _react2.default.PropTypes.array
	};
	
	exports.default = CreativeSnapshot;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=creative-snapshot.js.map
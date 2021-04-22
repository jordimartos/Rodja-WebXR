(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WebXRBoilerPlate"] = factory();
	else
		root["WebXRBoilerPlate"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentWrapper = void 0;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// helpers
/***
 * @hidden
 */
var hasMethod = function (obj, name) {
    var desc = Object.getOwnPropertyDescriptor(obj, name);
    return !!desc && typeof desc.value === 'function';
};
/***
 * @hidden
 */
var getInstanceMethodNames = function (obj, stop) {
    var array = [];
    var proto = Object.getPrototypeOf(obj);
    while (proto && proto !== stop) {
        Object.getOwnPropertyNames(proto).forEach(function (name) {
            if (name !== 'constructor') {
                if (hasMethod(proto, name)) {
                    array.push(name);
                }
            }
        });
        proto = Object.getPrototypeOf(proto);
    }
    return array;
};
/**
 * Extend this class to create strongly typed A-Frame components.
 * Default implementations for component lifecycle methods such as init(), tick(), and others are provided,
 * and can be overridden for your component's specific behavior.
 */
var ComponentWrapper = /** @class */function () {
    function ComponentWrapper(name, schema) {
        this.name = name;
        this.schema = schema || {};
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // default aframe core function implementations
    /**
     * Wraps https://aframe.io/docs/0.8.0/core/component.html#definition_lifecycle_handler_methods_remove.
     */
    ComponentWrapper.prototype.remove = function () {};
    /**
     * Wraps https://aframe.io/docs/0.8.0/core/component.html#definition_lifecycle_handler_methods_update.
     */
    ComponentWrapper.prototype.update = function (oldData) {};
    /**
     * Wraps https://aframe.io/docs/0.8.0/core/component.html#definition_lifecycle_handler_methods_updateschema.
     */
    ComponentWrapper.prototype.extendSchema = function (update) {};
    ComponentWrapper.prototype.flushToDOM = function () {};
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // default aframe core function implementations
    /**
     * Wraps https://aframe.io/docs/0.8.0/core/component.html#definition_lifecycle_handler_methods_init.
     */
    ComponentWrapper.prototype.init = function () {};
    /**
     * Wraps https://aframe.io/docs/0.8.0/core/component.html#definition_lifecycle_handler_methods_pause.
     */
    ComponentWrapper.prototype.pause = function () {};
    /**
     * Wraps https://aframe.io/docs/0.8.0/core/component.html#definition_lifecycle_handler_methods_play.
     */
    ComponentWrapper.prototype.play = function () {};
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // special wrapper functions implementations
    /***
     * @hidden
     */
    ComponentWrapper.prototype.merge = function () {
        var _this = this;
        var funcs = getInstanceMethodNames(this, Object.prototype);
        funcs.forEach(function (k) {
            return _this[k] = _this[k];
        });
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // special wrapper functions implementations
    ComponentWrapper.prototype.destroy = function () {
        var parent = this.el.parentElement;
        if (parent) {
            parent.removeChild(this.el);
        }
    };
    ComponentWrapper.prototype.register = function () {
        // unregister any existing component
        if (AFRAME.components[this.name]) {
            console.log("WARNING -- unregistering already registered component with name \"" + this.name + "\".");
            delete AFRAME.components[this.name];
        }
        this.merge();
        console.log('registering...');
        AFRAME.registerComponent(this.name, this);
        return this;
    };
    ComponentWrapper.prototype.registerCallback = function (callbackName, fn) {
        console.log('registerCallback', callbackName);
        this.el.addEventListener(callbackName, fn.bind(this));
    };
    return ComponentWrapper;
}();
exports.ComponentWrapper = ComponentWrapper;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinComponent = void 0;
var aframe_wrapper_1 = __webpack_require__(0);
var coinIndex = 1;
var CoinComponent = /** @class */function (_super) {
    __extends(CoinComponent, _super);
    function CoinComponent() {
        return _super.call(this, 'coin-component', {
            canStart: {
                type: 'boolean',
                default: false
            }
        }) || this;
    }
    CoinComponent.prototype.init = function () {
        var el = this.el;
        var data = this.data;
        var npc = document.getElementById('npc');
        //console.log(nextCoin)
        el.addEventListener('mousedown', function () {
            if (data.canStart) {
                console.log('mouseDown');
                moveToNextCoin(npc, el);
                data.canStart = false;
            }
        });
    };
    CoinComponent.prototype.update = function () {};
    CoinComponent.prototype.start = function () {
        console.log('start called');
    };
    CoinComponent.prototype.play = function () {};
    CoinComponent.prototype.pause = function () {};
    CoinComponent.prototype.tick = function () {};
    CoinComponent.prototype.remove = function () {};
    CoinComponent.prototype.destroy = function () {};
    return CoinComponent;
}(aframe_wrapper_1.ComponentWrapper);
exports.CoinComponent = CoinComponent;
function moveToNextCoin(npc_el, coin_el) {
    console.log("npc :" + npc_el + " coin :" + coin_el);
    console.log("coin index");
    console.log("window track" + window.track);
    console.log("track" + coinIndex + window.track);
    coin_el.setAttribute('material', 'color', 'black');
    coin_el.setAttribute('coin-component', 'canStart', 'false');
    npc_el.setAttribute('alongpath', 'curve', '#track' + coinIndex.toString() + window.track);
    npc_el.setAttribute('alongpath', 'dur', '5000');
    var nextCoin_el;
    coinIndex++;
    nextCoin_el = document.getElementById(coinIndex.toString() + window.track);
    if (coinIndex < 9) {
        nextCoin_el.setAttribute('coin-component', 'canStart:true');
        nextCoin_el.setAttribute('material', 'color:blue');
    }
}
new CoinComponent().register();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManagerComponent = void 0;
var aframe_wrapper_1 = __webpack_require__(0);
var nextCoinIndex = 2;
var coinMaxNumber = 3;
window.track = window.track || {};
var gameManagerComponent = /** @class */function (_super) {
    __extends(gameManagerComponent, _super);
    function gameManagerComponent() {
        return _super.call(this, 'game-manager', {
            canStart: {
                type: 'boolean',
                default: false
            }
        }) || this;
    }
    gameManagerComponent.prototype.init = function () {
        console.log('game manager');
        window.track = "5";
    };
    gameManagerComponent.prototype.update = function () {};
    gameManagerComponent.prototype.play = function () {};
    gameManagerComponent.prototype.pause = function () {};
    gameManagerComponent.prototype.tick = function () {};
    gameManagerComponent.prototype.remove = function () {};
    gameManagerComponent.prototype.destroy = function () {};
    return gameManagerComponent;
}(aframe_wrapper_1.ComponentWrapper);
exports.gameManagerComponent = gameManagerComponent;
new gameManagerComponent().register();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NPCComponent = void 0;
var aframe_wrapper_1 = __webpack_require__(0);
var nextCoinIndex = 2;
var coinMaxNumber = 3;
var NPCComponent = /** @class */function (_super) {
    __extends(NPCComponent, _super);
    function NPCComponent() {
        return _super.call(this, 'npc-component', {
            canStart: {
                type: 'boolean',
                default: false
            }
        }) || this;
    }
    NPCComponent.prototype.init = function () {
        var el = this.el;
        var data = this.data;
        var nextCoin = document.getElementById(nextCoinIndex.toString());
        console.log('next coin ' + nextCoinIndex);
        el.addEventListener('movingended', function () {
            /*
            if(nextCoinIndex <= coinMaxNumber)
            {
              let nextCoin = document.getElementById(nextCoinIndex.toString());
            OnArriving(nextCoin);
            }*/
        });
    };
    NPCComponent.prototype.update = function () {};
    NPCComponent.prototype.play = function () {};
    NPCComponent.prototype.pause = function () {};
    NPCComponent.prototype.tick = function () {};
    NPCComponent.prototype.remove = function () {};
    NPCComponent.prototype.destroy = function () {};
    return NPCComponent;
}(aframe_wrapper_1.ComponentWrapper);
exports.NPCComponent = NPCComponent;
function OnArriving(nextCoin_el) {
    console.log("npc arrived");
    /*
      nextCoin_el.setAttribute('coin-component','canStart','true');
          nextCoin_el.setAttribute('material','color','blue');
      nextCoinIndex ++;
      console.log("next coin ="+nextCoinIndex);
      */
}
new NPCComponent().register();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManagerComponent = exports.CoinComponent = exports.NPCComponent = void 0;
var npc_component_1 = __webpack_require__(3);
Object.defineProperty(exports, "NPCComponent", { enumerable: true, get: function () {
    return npc_component_1.NPCComponent;
  } });
var coin_component_1 = __webpack_require__(1);
Object.defineProperty(exports, "CoinComponent", { enumerable: true, get: function () {
    return coin_component_1.CoinComponent;
  } });
var game_manager_1 = __webpack_require__(2);
Object.defineProperty(exports, "gameManagerComponent", { enumerable: true, get: function () {
    return game_manager_1.gameManagerComponent;
  } });

/***/ })
/******/ ]);
});
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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
exports.ASSComponent = void 0;
var aframe_wrapper_1 = __webpack_require__(0);
var ASSComponent = /** @class */function (_super) {
    __extends(ASSComponent, _super);
    function ASSComponent() {
        return _super.call(this, 'aas-component', {
            canStart: {
                type: 'boolean',
                default: false
            },
            canCalculate: {
                type: 'boolean',
                default: false
            }
        }) || this;
    }
    ASSComponent.prototype.init = function () {
        var el = this.el;
        var data = this.data;
        window.timeTaken = 0;
        var timer;
        window.AAS = 0;
        timer = setInterval(function () {
            if (data.canStart && data.canCalculate) {
                window.AAS++;
                //  console.log('AAS'+window.AAS);
            }
        }, 1000);
        el.addEventListener('stop', function () {
            clearInterval(timer);
        });
    };
    ASSComponent.prototype.update = function () {};
    ASSComponent.prototype.play = function () {};
    ASSComponent.prototype.pause = function () {};
    ASSComponent.prototype.tick = function () {};
    ASSComponent.prototype.remove = function () {};
    ASSComponent.prototype.destroy = function () {};
    return ASSComponent;
}(aframe_wrapper_1.ComponentWrapper);
exports.ASSComponent = ASSComponent;
new ASSComponent().register();

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
exports.CameraComponent = void 0;
var aframe_wrapper_1 = __webpack_require__(0);
var CameraComponent = /** @class */function (_super) {
    __extends(CameraComponent, _super);
    function CameraComponent() {
        return _super.call(this, 'camera-component', {
            canSee: {
                type: 'boolean',
                default: false
            }
        }) || this;
    }
    CameraComponent.prototype.init = function () {
        var el = this.el;
        var data = this.data;
        var AAS = document.getElementById('AAS');
        var limitedInteruption = document.getElementById('limitedInteruption');
        el.addEventListener('mouseenter', function () {
            // console.log('I can see npc ');
            AAS.setAttribute('aas-component', 'canCalculate:true');
            limitedInteruption.setAttribute('limited-interuption', 'canCalculate:false');
        });
        el.addEventListener('mouseleave', function () {
            // console.log('No longer can see npc ');
            AAS.setAttribute('aas-component', 'canCalculate:false');
            limitedInteruption.setAttribute('limited-interuption', 'canCalculate:true');
        });
    };
    CameraComponent.prototype.update = function () {};
    CameraComponent.prototype.play = function () {};
    CameraComponent.prototype.pause = function () {};
    CameraComponent.prototype.tick = function () {};
    CameraComponent.prototype.remove = function () {};
    CameraComponent.prototype.destroy = function () {};
    return CameraComponent;
}(aframe_wrapper_1.ComponentWrapper);
exports.CameraComponent = CameraComponent;
new CameraComponent().register();

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
        var timeResponse = document.getElementById('timeResponse');
        var AAS = document.getElementById('AAS');
        var limitedInteruption = document.getElementById('limitedInteruption');
        //console.log(nextCoin)
        el.addEventListener('mousedown', function () {
            if (data.canStart) {
                timeResponse.setAttribute('response-component', 'canStart:false');
                AAS.setAttribute('aas-component', 'canStart:true');
                limitedInteruption.setAttribute('limited-interuption', 'canStart:true');
                ////console.log('mouseDown');
                // console.log('coin index ='+coinIndex);
                // console.log('track' +window.track);
                moveToNextCoin(npc, el);
                data.canStart = false;
            }
        });
    };
    CoinComponent.prototype.update = function () {};
    CoinComponent.prototype.play = function () {};
    CoinComponent.prototype.pause = function () {};
    CoinComponent.prototype.tick = function () {};
    CoinComponent.prototype.remove = function () {};
    CoinComponent.prototype.destroy = function () {};
    return CoinComponent;
}(aframe_wrapper_1.ComponentWrapper);
exports.CoinComponent = CoinComponent;
function moveToNextCoin(npc_el, coin_el) {
    ////console.log("npc :"+npc_el+" coin :"+coin_el);
    // console.log("track"+coinIndex+window.track);
    coin_el.setAttribute('material', 'color', 'black');
    coin_el.setAttribute('coin-component', 'canStart', 'false');
    npc_el.setAttribute('alongpath', 'curve', '#track' + coinIndex.toString() + window.track);
    npc_el.setAttribute('alongpath', 'dur', '8000');
    var nextCoin_el;
    coinIndex++;
    nextCoin_el = document.getElementById(coinIndex.toString() + window.track);
    if (coinIndex < 9) {
        nextCoin_el.setAttribute('material', 'color:blue');
    }
}
new CoinComponent().register();

/***/ }),
/* 4 */
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
exports.CoinDistractorComponent = void 0;
var aframe_wrapper_1 = __webpack_require__(0);
var CoinDistractorComponent = /** @class */function (_super) {
    __extends(CoinDistractorComponent, _super);
    function CoinDistractorComponent() {
        return _super.call(this, 'coin-distractor', {
            canStart: {
                type: 'boolean',
                default: true
            },
            myNumber: {
                type: 'number',
                default: 1
            },
            myTrack: {
                type: 'number',
                default: 1
            }
        }) || this;
    }
    CoinDistractorComponent.prototype.init = function () {
        //console.log('distractor exist');
        var newpos;
        var random = 0;
        var data = this.data;
        var targets = document.querySelectorAll(".target" + data.myNumber.toString() + window.track.toString());
        //console.log(targets);
        var el = this.el;
        if (sessionStorage.getItem('level') == '3') {
            el.setAttribute('data', 'canStart', 'true');
        }
        var startDsMovement = function cycle(index) {
            setTimeout(function () {
                //console.log('called')
                newpos = targets[random].getAttribute("position");
                el.setAttribute("animation", "property:position; to:" + newpos.x + " 0.2 " + newpos.z + " dur:2000");
                if (random == 0) {
                    random = 1;
                } else {
                    random = 0;
                }
                cycle(random);
            }, 2000);
        };
        if (data.myTrack == window.track && sessionStorage.getItem('level') == '3') {
            startDsMovement(targets.length);
        }
    };
    CoinDistractorComponent.prototype.update = function () {};
    CoinDistractorComponent.prototype.play = function () {};
    CoinDistractorComponent.prototype.pause = function () {};
    CoinDistractorComponent.prototype.tick = function () {};
    CoinDistractorComponent.prototype.remove = function () {};
    CoinDistractorComponent.prototype.destroy = function () {};
    return CoinDistractorComponent;
}(aframe_wrapper_1.ComponentWrapper);
exports.CoinDistractorComponent = CoinDistractorComponent;
new CoinDistractorComponent().register();

/***/ }),
/* 5 */
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
exports.Distractor1Component = void 0;
var aframe_wrapper_1 = __webpack_require__(0);
var Distractor1Component = /** @class */function (_super) {
    __extends(Distractor1Component, _super);
    function Distractor1Component() {
        return _super.call(this, 'distrctor1-component', {
            canStart: {
                type: 'boolean',
                default: true
            }
        }) || this;
    }
    Distractor1Component.prototype.init = function () {
        //console.log('distractor exist');
        var newpos;
        var random = 0;
        var track = sessionStorage.getItem('road');
        var target = ".bTarget" + track;
        //alert(track);
        var box = document.querySelectorAll(target); //Array of targets
        var el = this.el;
        if (sessionStorage.getItem('level') == '2' || sessionStorage.getItem('level') == '3') {
            el.setAttribute('visible', 'true');
        }
        var startDsMovement = function cycle(index) {
            setTimeout(function () {
                random++;
                if (random >= box.length) {
                    random = 0;
                }
                newpos = box[random].getAttribute("position"); // restor next target for distractor
                el.setAttribute("animation", "property:position; to:" + newpos.x + " 1 " + newpos.z + " dur:15000");
                // console.log("i'm here 2")
                cycle(random);
                //cycle(++index % 3);
            }, 3000);
        };
        startDsMovement(box.length);
    };
    Distractor1Component.prototype.update = function () {};
    Distractor1Component.prototype.play = function () {};
    Distractor1Component.prototype.pause = function () {};
    Distractor1Component.prototype.tick = function () {};
    Distractor1Component.prototype.remove = function () {};
    Distractor1Component.prototype.destroy = function () {};
    return Distractor1Component;
}(aframe_wrapper_1.ComponentWrapper);
exports.Distractor1Component = Distractor1Component;
new Distractor1Component().register();

/***/ }),
/* 6 */
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
        var enviroment = sessionStorage.getItem('enviroment');
        var enviroment_el;
        var road_el;
        var camera_el = document.getElementById('cam');
        var camera_pos;
        var firstCoin;
        try {
            enviroment_el = document.getElementById(enviroment + '-el');
            enviroment_el.setAttribute('visible', 'true');
        } catch (_a) {
            alert("enviroment not selected");
        }
        window.track = sessionStorage.getItem('road');
        console.log('track selected =' + window.track);
        try {
            road_el = document.getElementById('road' + window.track + '-el');
            road_el.setAttribute('visible', 'true');
        } catch (_b) {
            alert('road not selected');
        }
        camera_pos = document.getElementById("camera" + window.track);
        /*
        let yPos = camera_pos.object3D.position.y ;
        console.log("y pos"+yPos );
        let zPos = camera_pos.object3D.position.z ;
        console.log("z pos"+yPos );*/
        camera_el.setAttribute('position', camera_pos.getAttribute('position'));
        console.log(camera_pos.getAttribute('position'));
        firstCoin = document.getElementById('1' + window.track);
        firstCoin.setAttribute('visible', 'true');
        camera_el.setAttribute('look-controls', 'enabled', true);
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
/* 7 */
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
exports.LimitedInteruption = void 0;
var aframe_wrapper_1 = __webpack_require__(0);
var LimitedInteruption = /** @class */function (_super) {
    __extends(LimitedInteruption, _super);
    function LimitedInteruption() {
        return _super.call(this, 'limited-interuption', {
            taskInterupt: {
                type: 'number',
                default: 0
            }, canCalculate: {
                type: 'boolean',
                default: false
            }, canStart: {
                type: 'boolean',
                default: false
            }
        }) || this;
    }
    LimitedInteruption.prototype.init = function () {
        var el = this.el;
        var data = this.data;
        var interuptionTimer = 0;
        var timer;
        window.tasksLimitedInterupt = 0;
        timer = setInterval(function () {
            if (data.canCalculate && data.canStart) {
                interuptionTimer++;
                if (interuptionTimer = 2) {
                    interuptionTimer = 0;
                    data.taskInterupt++;
                    data.canCalculate = false;
                    console.log('task interrupt');
                    if (data.taskInterupt == 3) {
                        window.tasksLimitedInterupt++;
                        data.canStart = false;
                        data.taskInterupt = 0;
                        console.log('tasks limited interupt=' + window.tasksLimitedInterupt);
                    }
                }
            }
        }, 1000);
    };
    LimitedInteruption.prototype.update = function () {};
    LimitedInteruption.prototype.play = function () {};
    LimitedInteruption.prototype.pause = function () {};
    LimitedInteruption.prototype.tick = function () {};
    LimitedInteruption.prototype.remove = function () {};
    LimitedInteruption.prototype.destroy = function () {};
    return LimitedInteruption;
}(aframe_wrapper_1.ComponentWrapper);
exports.LimitedInteruption = LimitedInteruption;
new LimitedInteruption().register();

/***/ }),
/* 8 */
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
var currentCoinIndex = 1;
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
        var startPos = document.getElementById('start' + window.track);
        var nextCoin = document.getElementById(nextCoinIndex.toString() + window.track);
        var timeResponse = document.getElementById('timeResponse');
        var isStartVoicePlayed = false;
        var AAS = document.getElementById('AAS');
        var limitedInteruption = document.getElementById('limitedInteruption');
        console.log('next coin ' + nextCoinIndex);
        el.setAttribute('sound', 'src', '#welcome-sound');
        el.setAttribute('sound', 'playSound');
        el.setAttribute('position', startPos.getAttribute('position'));
        console.log(startPos.getAttribute('position'));
        console.log(el.getAttribute('position'));
        el.addEventListener('movingended', function () {
            nextCoin = document.getElementById(nextCoinIndex.toString() + window.track);
            showNextCoin(nextCoin);
            timeResponse.setAttribute('response-component', 'canStart:true');
            AAS.setAttribute('aas-component', 'canStart:false');
            limitedInteruption.setAttribute('limited-interuption', 'canStart:false');
            limitedInteruption.setAttribute('limited-interuption', 'taskInterupt:0');
        });
        el.addEventListener('sound-ended', function () {
            if (!isStartVoicePlayed) {
                console.log('yalla');
                el.setAttribute('sound', 'src', '#ready-sound');
                el.setAttribute('sound', 'playSound');
                isStartVoicePlayed = true;
            }
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
function showNextCoin(nextCoin_el) {
    console.log("npc arrived");
    if (nextCoinIndex < 9) {
        var coin = document.getElementById(currentCoinIndex.toString() + window.track);
        coin.setAttribute('visible', 'false');
        nextCoin_el.setAttribute('visible', 'true');
        nextCoin_el.setAttribute('coin-component', 'canStart:true');
        nextCoinIndex++;
        currentCoinIndex++;
    } else {
        var statictics_el_1 = document.getElementById('statistics');
        setTimeout(function () {
            statictics_el_1.setAttribute('statistics-component', '');
        }, 5000);
    }
}
new NPCComponent().register();

/***/ }),
/* 9 */
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
var __assign = this && this.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsComponent = void 0;
var aframe_wrapper_1 = __webpack_require__(0);
var StatisticsComponent = /** @class */function (_super) {
    __extends(StatisticsComponent, _super);
    function StatisticsComponent() {
        return _super.call(this, 'statistics-component', {
            canStart: {
                type: 'boolean',
                default: false
            }
        }) || this;
    }
    StatisticsComponent.prototype.init = function () {
        var _totalNumberOfTasks = 8;
        var _TAS = 8; //Attention time attained by typical child during a task (look at the npc while moving)
        var _TypicalTime = 82; //the time taken by a typical child to finish the game
        var _TaR; //target ratio
        var _TiR; // time ratio
        var statistics;
        var _avgResponseTime;
        var allStats = {
            myStats: ''
        };
        if (sessionStorage.getItem("allStats") != null) {
            allStats = JSON.parse(sessionStorage.getItem("allStats"));
            console.log("all stats is" + allStats);
        }
        _avgResponseTime = window.TimeResponse / 8;
        _TaR = window.tasksLimitedInterupt / _totalNumberOfTasks;
        _TiR = window.timeTaken / _TypicalTime;
        window.impulsivityScore = 1 / (-_TaR * (Math.log10(_TiR) - 1 + Math.E));
        window.omissionScore = _TAS / (window.AAS + Math.E);
        statistics = {
            omissionScore: window.omissionScore,
            ImpulsivityScore: window.impulsivityScore,
            AAS: window.AAS,
            avgResponseTime: _avgResponseTime,
            TaR: _TaR,
            TiR: _TiR
        };
        console.log(statistics);
        var date = new Date();
        allStats[date.toString()] = __assign(__assign({}, allStats[date.toString()]), { statistics: statistics });
        sessionStorage.setItem('allStats', JSON.stringify(allStats));
        window.open('../../finalPage.html', "_self");
    };
    StatisticsComponent.prototype.update = function () {};
    StatisticsComponent.prototype.play = function () {};
    StatisticsComponent.prototype.pause = function () {};
    StatisticsComponent.prototype.tick = function () {};
    StatisticsComponent.prototype.remove = function () {};
    StatisticsComponent.prototype.destroy = function () {};
    return StatisticsComponent;
}(aframe_wrapper_1.ComponentWrapper);
exports.StatisticsComponent = StatisticsComponent;
new StatisticsComponent().register();

/***/ }),
/* 10 */
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
exports.timeTakenComponent = void 0;
var aframe_wrapper_1 = __webpack_require__(0);
var timeTakenComponent = /** @class */function (_super) {
    __extends(timeTakenComponent, _super);
    function timeTakenComponent() {
        return _super.call(this, 'time-taken', {
            canStart: {
                type: 'boolean',
                default: false
            }
        }) || this;
    }
    timeTakenComponent.prototype.init = function () {
        var el = this.el;
        var data = this.data;
        window.timeTaken = 0;
        var timer;
        var current = new Date();
        window.startTime = current.toLocaleString();
        timer = setInterval(function () {
            window.timeTaken++;
            // console.log('timeTaken'+ window.timeTaken)
        }, 1000);
        el.addEventListener('stop', function () {
            clearInterval(timer);
        });
    };
    timeTakenComponent.prototype.update = function () {};
    timeTakenComponent.prototype.play = function () {};
    timeTakenComponent.prototype.pause = function () {};
    timeTakenComponent.prototype.tick = function () {};
    timeTakenComponent.prototype.remove = function () {};
    timeTakenComponent.prototype.destroy = function () {};
    return timeTakenComponent;
}(aframe_wrapper_1.ComponentWrapper);
exports.timeTakenComponent = timeTakenComponent;
new timeTakenComponent().register();

/***/ }),
/* 11 */
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
exports.TimeResponseComponent = void 0;
var aframe_wrapper_1 = __webpack_require__(0);
var TimeResponseComponent = /** @class */function (_super) {
    __extends(TimeResponseComponent, _super);
    function TimeResponseComponent() {
        return _super.call(this, 'response-component', {
            canStart: {
                type: 'boolean',
                default: false
            }
        }) || this;
    }
    TimeResponseComponent.prototype.init = function () {
        var el = this.el;
        var data = this.data;
        window.timeTaken = 0;
        var timer;
        window.TimeResponse = 0;
        timer = setInterval(function () {
            if (data.canStart) {
                window.TimeResponse++;
                //  console.log('timeResponse'+window.TimeResponse);
            }
        }, 1000);
        el.addEventListener('stop', function () {
            clearInterval(timer);
        });
    };
    TimeResponseComponent.prototype.update = function () {};
    TimeResponseComponent.prototype.play = function () {};
    TimeResponseComponent.prototype.pause = function () {};
    TimeResponseComponent.prototype.tick = function () {};
    TimeResponseComponent.prototype.remove = function () {};
    TimeResponseComponent.prototype.destroy = function () {};
    return TimeResponseComponent;
}(aframe_wrapper_1.ComponentWrapper);
exports.TimeResponseComponent = TimeResponseComponent;
new TimeResponseComponent().register();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsComponent = exports.LimitedInteruption = exports.CameraComponent = exports.TimeResponseComponent = exports.ASSComponent = exports.timeTakenComponent = exports.CoinDistractorComponent = exports.Distractor1Component = exports.gameManagerComponent = exports.CoinComponent = exports.NPCComponent = void 0;
var npc_component_1 = __webpack_require__(8);
Object.defineProperty(exports, "NPCComponent", { enumerable: true, get: function () {
    return npc_component_1.NPCComponent;
  } });
var coin_component_1 = __webpack_require__(3);
Object.defineProperty(exports, "CoinComponent", { enumerable: true, get: function () {
    return coin_component_1.CoinComponent;
  } });
var game_manager_1 = __webpack_require__(6);
Object.defineProperty(exports, "gameManagerComponent", { enumerable: true, get: function () {
    return game_manager_1.gameManagerComponent;
  } });
var distractor1_1 = __webpack_require__(5);
Object.defineProperty(exports, "Distractor1Component", { enumerable: true, get: function () {
    return distractor1_1.Distractor1Component;
  } });
var coin_distractor_1 = __webpack_require__(4);
Object.defineProperty(exports, "CoinDistractorComponent", { enumerable: true, get: function () {
    return coin_distractor_1.CoinDistractorComponent;
  } });
var time_taken_1 = __webpack_require__(10);
Object.defineProperty(exports, "timeTakenComponent", { enumerable: true, get: function () {
    return time_taken_1.timeTakenComponent;
  } });
var AAS_component_1 = __webpack_require__(1);
Object.defineProperty(exports, "ASSComponent", { enumerable: true, get: function () {
    return AAS_component_1.ASSComponent;
  } });
var timeResponseComponent_1 = __webpack_require__(11);
Object.defineProperty(exports, "TimeResponseComponent", { enumerable: true, get: function () {
    return timeResponseComponent_1.TimeResponseComponent;
  } });
var camera_looking_1 = __webpack_require__(2);
Object.defineProperty(exports, "CameraComponent", { enumerable: true, get: function () {
    return camera_looking_1.CameraComponent;
  } });
var limited_interuption_1 = __webpack_require__(7);
Object.defineProperty(exports, "LimitedInteruption", { enumerable: true, get: function () {
    return limited_interuption_1.LimitedInteruption;
  } });
var statistics_component_1 = __webpack_require__(9);
Object.defineProperty(exports, "StatisticsComponent", { enumerable: true, get: function () {
    return statistics_component_1.StatisticsComponent;
  } });

/***/ })
/******/ ]);
});
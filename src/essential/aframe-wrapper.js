"use strict";
exports.__esModule = true;
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
var ComponentWrapper = /** @class */ (function () {
    function ComponentWrapper(name, schema) {
        this.name = name;
        this.schema = schema || {};
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // default aframe core function implementations
    /**
     * Wraps https://aframe.io/docs/0.8.0/core/component.html#definition_lifecycle_handler_methods_remove.
     */
    ComponentWrapper.prototype.remove = function () { };
    /**
     * Wraps https://aframe.io/docs/0.8.0/core/component.html#definition_lifecycle_handler_methods_update.
     */
    ComponentWrapper.prototype.update = function (oldData) { };
    /**
     * Wraps https://aframe.io/docs/0.8.0/core/component.html#definition_lifecycle_handler_methods_updateschema.
     */
    ComponentWrapper.prototype.extendSchema = function (update) { };
    ComponentWrapper.prototype.flushToDOM = function () { };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // default aframe core function implementations
    /**
     * Wraps https://aframe.io/docs/0.8.0/core/component.html#definition_lifecycle_handler_methods_init.
     */
    ComponentWrapper.prototype.init = function () { };
    /**
     * Wraps https://aframe.io/docs/0.8.0/core/component.html#definition_lifecycle_handler_methods_pause.
     */
    ComponentWrapper.prototype.pause = function () { };
    /**
     * Wraps https://aframe.io/docs/0.8.0/core/component.html#definition_lifecycle_handler_methods_play.
     */
    ComponentWrapper.prototype.play = function () { };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // special wrapper functions implementations
    /***
     * @hidden
     */
    ComponentWrapper.prototype.merge = function () {
        var _this = this;
        var funcs = getInstanceMethodNames(this, Object.prototype);
        funcs.forEach(function (k) { return (_this[k] = _this[k]); });
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
}());
exports.ComponentWrapper = ComponentWrapper;

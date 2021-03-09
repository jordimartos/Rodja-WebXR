"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ColorComponent = void 0;
var aframe_wrapper_1 = require("../essential/aframe-wrapper");
var entity_builder_1 = require("../essential/entity-builder");
var ColorComponent = /** @class */ (function (_super) {
    __extends(ColorComponent, _super);
    function ColorComponent() {
        return _super.call(this, 'color-component', {
            color: {
                type: 'string',
                "default": 'colorless'
            }
        }) || this;
    }
    ColorComponent.prototype.init = function () {
        alert('hiii');
        var entityColor = this.el.getAttribute('color');
        entity_builder_1.EntityBuilder.create('a-text', {
            id: 'color-text',
            value: entityColor || this.data.color,
            color: entityColor || 'black',
            position: '-1 1.25 0'
        }).attachTo(this.el);
    };
    ColorComponent.prototype.update = function () { };
    ColorComponent.prototype.play = function () { };
    ColorComponent.prototype.pause = function () { };
    ColorComponent.prototype.tick = function () { };
    ColorComponent.prototype.remove = function () { };
    ColorComponent.prototype.destroy = function () { };
    return ColorComponent;
}(aframe_wrapper_1.ComponentWrapper));
exports.ColorComponent = ColorComponent;
new ColorComponent().register();

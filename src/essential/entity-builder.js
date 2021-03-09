"use strict";
exports.__esModule = true;
exports.EntityBuilder = void 0;
var EntityBuilder = /** @class */ (function () {
    function EntityBuilder(type, attributes) {
        this.entity = document.createElement(type);
        if (attributes) {
            this.setAttributes(attributes);
        }
    }
    EntityBuilder.create = function (type, attributes, children) {
        var builder = new EntityBuilder(type, attributes);
        if (children) {
            children.forEach(function (c) {
                c.attachTo(builder.entity);
            });
        }
        return builder;
    };
    EntityBuilder.prototype.set = function (a, b, c) {
        if (!!b && !!c) {
            this.entity.setAttribute(a, b, c);
        }
        else if (b) {
            this.entity.setAttribute(a, b || '');
        }
        else {
            this.entity.setAttribute(a, '');
        }
        return this;
    };
    EntityBuilder.prototype.setAttributes = function (attributes) {
        var _this = this;
        Object.keys(attributes).forEach(function (k) {
            _this.set(k, attributes[k]);
        });
        return this;
    };
    EntityBuilder.prototype.toEntity = function () {
        return this.entity;
    };
    EntityBuilder.prototype.attachTo = function (parent) {
        if (!parent) {
            // attach to the scene by default
            document.querySelector('a-scene').appendChild(this.entity);
            return this;
        }
        // a parent was specified
        if ('el' in parent) {
            // there's an element in this parent; attach the entity
            // being created there
            parent.el.appendChild(this.entity);
        }
        else {
            // there isn't; attach directly
            if ('appendChild' in parent) {
                parent.appendChild(this.entity);
            }
            else {
                // parent.attach(this.entity)
            }
        }
        return this;
    };
    return EntityBuilder;
}());
exports.EntityBuilder = EntityBuilder;

"use strict";
class Class {
    constructor(name = "", parent = [], attributes = [], classAttributes = [], methods = [], classMethod = [], namespace = []) {
        this._name = name;
        this._parent = parent;
        this._attributes = attributes;
        this._classAttributes = classAttributes;
        this._methods = methods;
        this._classMethod = classMethod;
        this._namespace = namespace;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get classAttributes() {
        return this._classAttributes;
    }
    set classAttributes(value) {
        this._classAttributes = value;
    }
    get namespace() {
        return this._namespace;
    }
    set namespace(value) {
        this._namespace = value;
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get attributes() {
        return this._attributes;
    }
    set attributes(value) {
        this._attributes = value;
    }
    get methods() {
        return this._methods;
    }
    set methods(value) {
        this._methods = value;
    }
    get classMethod() {
        return this._classMethod;
    }
    set classMethod(value) {
        this._classMethod = value;
    }
}
exports.Class = Class;

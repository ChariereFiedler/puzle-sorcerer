"use strict";
class Property {
    constructor(name = "", dft = {}, dftFn = "", description = [], id = true, index = true, required = true, type = "") {
        this._name = name;
        this._dft = dft;
        this._dftFn = dftFn;
        this._description = description;
        this._id = id;
        this._index = index;
        this._required = required;
        this._type = type;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get dft() {
        return this._dft;
    }
    set dft(value) {
        this._dft = value;
    }
    get dftFn() {
        return this._dftFn;
    }
    set dftFn(value) {
        this._dftFn = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get index() {
        return this._index;
    }
    set index(value) {
        this._index = value;
    }
    get required() {
        return this._required;
    }
    set required(value) {
        this._required = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
}
exports.Property = Property;

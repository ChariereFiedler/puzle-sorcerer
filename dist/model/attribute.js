"use strict";
const index_1 = require('./index');
class Attribute extends index_1.Type {
    constructor(type = "", name = "", required = false) {
        super(type);
        this._name = name;
        this._required = required;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get required() {
        return this._required;
    }
    set required(value) {
        this._required = value;
    }
}
exports.Attribute = Attribute;

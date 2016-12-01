"use strict";
class Type {
    constructor(name) {
        this._type = name;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
}
exports.Type = Type;

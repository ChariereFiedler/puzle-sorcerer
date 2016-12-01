"use strict";
class Function {
    constructor(returnedType, name, args) {
        this._returnedType = returnedType;
        this._name = name;
        this._arguments = args;
    }
    get returnedType() {
        return this._returnedType;
    }
    set returnedType(value) {
        this._returnedType = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get arguments() {
        return this._arguments;
    }
    set arguments(value) {
        this._arguments = value;
    }
}
exports.Function = Function;

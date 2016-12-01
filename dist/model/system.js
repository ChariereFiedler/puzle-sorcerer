"use strict";
class System {
    constructor(classes = [], functions = []) {
        this._classes = classes;
        this._functions = functions;
    }
    get classes() {
        return this._classes;
    }
    set classes(value) {
        this._classes = value;
    }
    addClass(...items) {
        items.forEach((item) => {
            this._classes.push(item);
        });
    }
    get functions() {
        return this._functions;
    }
    set functions(value) {
        this._functions = value;
    }
    addFunction(...items) {
        items.forEach((item) => {
            this._functions.push(item);
        });
    }
}
exports.System = System;

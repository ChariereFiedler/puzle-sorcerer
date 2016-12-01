"use strict";
class System {
    constructor() {
        this._classes = [];
    }
    addClasses(...items) {
        items.forEach((item) => {
            this._classes.push(item);
        });
    }
    get classes() {
        return this._classes;
    }
    set classes(value) {
        this._classes = value;
    }
}
exports.System = System;

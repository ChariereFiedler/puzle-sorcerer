"use strict";
const hbs = require('handlebars');
const fs = require('fs');
const path = require('path');
const index_1 = require("../helpers/index");
require.extensions['.hbs'] = (module, filename) => {
    module.exports = fs.readFileSync(filename, 'utf8');
};
class TypescriptWriter {
    constructor() {
        this._templates = {};
        this._hbs = index_1.config(hbs);
        this._templates["class"] = hbs.compile(require('./templates/class.hbs'));
    }
    write(clazz, destination) {
        let data = this._templates["class"](clazz);
        fs.writeFileSync(path.join(destination, clazz.name + '.ts'), data);
        return data;
    }
}
exports.TypescriptWriter = TypescriptWriter;

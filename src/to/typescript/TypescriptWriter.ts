import * as hbs from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';

import {IWriter} from "../IWriter";
import {config} from "../helpers/index";
import {Class} from "../../model/class";

require.extensions['.hbs'] = (module, filename)=>{
    module.exports = fs.readFileSync(filename, 'utf8');
};

export class TypescriptWriter implements IWriter {

    protected _hbs: any;

    protected _templates: Object = {};

    constructor() {
        this._hbs = config(hbs);
        this._templates["class"] = hbs.compile(require('./templates/class.hbs'));
    }

    write(clazz: Class, destination: string): string {
        let data = this._templates["class"](clazz);
        fs.writeFileSync(path.join(destination, clazz.name + '.ts'), data);
        return data;
    }
}
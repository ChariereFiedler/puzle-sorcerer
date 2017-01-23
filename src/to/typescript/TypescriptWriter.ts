import * as hbs from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';

import {IWriter} from "../IWriter";
import {config} from "../helpers/index";
import {Class} from "../../model/class";
import {Attribute} from "../../model/attribute";
import {StringUtils} from "../../utils/string-utils";

require.extensions['.hbs'] = (module, filename)=>{
    let file =  fs.readFileSync(filename, 'utf8');
    module.exports = file;
};

export class TypescriptWriter implements IWriter {

    protected _hbs: any;

    protected _templates: Object = {};

    constructor() {
        this._hbs = config(hbs);
        this._templates["class"] = hbs.compile(require('./templates/class.hbs'));
    }

    static format(clazz: Class): Class {
        clazz.attributes.map((attrib:Attribute)=> {
           switch(attrib.type) {
               case('date'):
                    attrib.type = StringUtils.upperFirstLetter(attrib.type);
                   break;
               default:
                   break;
           }
        });

        return clazz;
    }

    write(clazz: Class, destination: string): string {

        clazz = TypescriptWriter.format(clazz);

        let data = this._templates["class"](clazz);
        fs.writeFileSync(path.join(destination, clazz.name + '.ts'), data);
        //console.log(data);
        return data;
    }
}
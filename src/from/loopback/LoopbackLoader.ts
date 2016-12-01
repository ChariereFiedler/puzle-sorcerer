import * as fs from 'fs';

import {System as CoreSystem} from "../../model/system";
import {Class as CoreClass} from "../../model/class";
import {Attribute as CoreAttribute} from "../../model/attribute";
import {System as LoopbackSystem} from './model/index';
import {Class as LoopbackClass} from './model/index';
import {Property as LoopbackProperty} from './model/index';
import {ILoader} from "../ILoader";


export class LoopbackLoader implements ILoader{

    constructor() {}

    async load(filename: string): Promise<CoreSystem> {
        let system: LoopbackSystem = new LoopbackSystem();

        return new Promise<any>((resolve, reject)=> {
            fs.readFile(filename, "utf8", (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(JSON.parse(data));
                }
            } )
        }).then((data)=> {
            return this.createFromJson(data);
        }).then((clazz: LoopbackClass) => {
            system.classes.push(clazz);
            return system;
        }).then((lsystem: LoopbackSystem) => {
            return this.transform(lsystem);
        })
    }

    async createFromJson(data: any): Promise<LoopbackClass> {
        return new Promise<LoopbackClass>((resolve, reject) => {
            let clazz: LoopbackClass = new LoopbackClass();
            let toTransform = data;

            clazz.name = toTransform.name;
            clazz.plural= toTransform.plural as string;
            clazz.base = toTransform.base as string;
            clazz.idInjection = toTransform.options  || {};
            clazz.description = toTransform.description|| [];
            for(let property in toTransform.properties) {
                let prop = new LoopbackProperty();
                let orig = toTransform.properties[property];
                prop.name = property;
                prop.type = orig.type;

                clazz.properties.push(prop);
            }
            resolve(clazz);
        });
    }

    async transform(orig: LoopbackSystem): Promise<CoreSystem> {
        return new Promise<CoreSystem>((resolve, reject)=> {
            let result: CoreSystem = new CoreSystem();
            orig.classes.forEach((item: LoopbackClass)=> {
                let clazz: CoreClass = new CoreClass();
                clazz.name = item.name;
                clazz.parent = [new CoreClass(item.base)];

                item.properties.forEach((property: LoopbackProperty) => {
                    let attrib: CoreAttribute = new CoreAttribute();
                    attrib.name = property.name;
                    attrib.type = property.type;

                    clazz.attributes.push(attrib);
                });

                result.classes.push(clazz);
            });
            resolve(result);
        })

    }
}


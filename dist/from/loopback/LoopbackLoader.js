"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const fs = require('fs');
const system_1 = require("../../model/system");
const class_1 = require("../../model/class");
const attribute_1 = require("../../model/attribute");
const index_1 = require('./model/index');
const index_2 = require('./model/index');
const index_3 = require('./model/index');
class LoopbackLoader {
    constructor() {
    }
    load(filename) {
        return __awaiter(this, void 0, void 0, function* () {
            let system = new index_1.System();
            return new Promise((resolve, reject) => {
                fs.readFile(filename, "utf8", (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(JSON.parse(data));
                    }
                });
            }).then((data) => {
                return this.createFromJson(data);
            }).then((clazz) => {
                system.classes.push(clazz);
                return system;
            }).then((lsystem) => {
                return this.transform(lsystem);
            });
        });
    }
    createFromJson(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let clazz = new index_2.Class();
                let toTransform = data;
                clazz.name = toTransform.name;
                clazz.plural = toTransform.plural;
                clazz.base = toTransform.base;
                clazz.idInjection = toTransform.options || {};
                clazz.description = toTransform.description || [];
                for (let property in toTransform.properties) {
                    let prop = new index_3.Property();
                    let orig = toTransform.properties[property];
                    prop.name = property;
                    prop.type = orig.type;
                    clazz.properties.push(prop);
                }
                resolve(clazz);
            });
        });
    }
    transform(orig) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let result = new system_1.System();
                orig.classes.forEach((item) => {
                    let clazz = new class_1.Class();
                    clazz.name = item.name;
                    clazz.parent = [new class_1.Class(item.base)];
                    item.properties.forEach((property) => {
                        let attrib = new attribute_1.Attribute();
                        attrib.name = property.name;
                        attrib.type = property.type;
                        clazz.attributes.push(attrib);
                    });
                    result.classes.push(clazz);
                });
                resolve(result);
            });
        });
    }
}
exports.LoopbackLoader = LoopbackLoader;

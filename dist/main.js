#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const TypescriptWriter_1 = require("./to/typescript/TypescriptWriter");
const LoopbackLoader_1 = require("./from/loopback/LoopbackLoader");
let commander = require('commander');
const fs = require('fs');
let config = require('../package.json');
commander
    .version(config.version)
    .option('-m, --model <item>', 'The model location used for the generation')
    .option('-d, --destination <item>', 'The generation destination')
    .option('-l, --loader <item>', 'The loader used to extract the data', /^(loopback)$/i, 'loopback')
    .option('-f, --format <item>', 'The generation format', /^(typescript)$/i, 'typescript')
    .parse(process.argv);
function getLoader(loader) {
    let result;
    switch (loader) {
        case "loopback":
            result = new LoopbackLoader_1.LoopbackLoader();
            break;
        default:
            throw "Invalid loader";
    }
    return result;
}
function getWriter(writer) {
    let result;
    switch (writer) {
        case "typescript":
            result = new TypescriptWriter_1.TypescriptWriter();
            break;
        default:
            throw "Invalid writer";
    }
    return result;
}
function action(model, destination, loader, writer) {
    return __awaiter(this, void 0, void 0, function* () {
        let _loader = getLoader(loader);
        let _writer = getWriter(writer);
        return _loader.load(model)
            .then((system) => {
            let result = "";
            system.classes.forEach((clazz) => {
                result += _writer.write(clazz, destination);
                console.log("Success: The class %s has been generated at %s.", clazz.name, destination);
            });
            return result;
        });
    });
}
function exists(model) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (!model) {
                reject("Model is undefined");
            }
            fs.stat(model, (err, stat) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(stat);
                }
            });
        });
    });
}
commander.destination = commander.destination || '.';
exists(commander.model)
    .then(() => {
    return exists(commander.destination)
        .then(() => { console.log('Destination exists'); }, () => {
        return new Promise((resolve, reject) => {
            console.log('Destination does not exist. The application is trying to create the folder :%s', commander.destination);
            fs.mkdir(commander.destination, "0o777", (err) => {
                if (err) {
                    console.log("Error: Unable to create the destination folder : ", err);
                    reject(err);
                }
                else {
                    console.log("Success: The destination folder has been created at : %s", commander.destination);
                    resolve();
                }
            });
        });
    });
}, () => {
    console.log("Error : The application require an existing model.");
})
    .then(() => {
    return action(commander.model, commander.destination || '.', commander.loader, commander.format);
});

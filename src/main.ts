import {TypescriptWriter} from "./to/typescript/TypescriptWriter";
import {LoopbackLoader} from "./from/loopback/LoopbackLoader";
import {System} from "./model/system";

let commander = require('commander');
import * as fs from 'fs';

import {ILoader} from "./from/ILoader";
import {IWriter} from "./to/IWriter";

let config = require('../package.json');

commander
    .version(config.version)
    .option('-m, --model <item>', 'The model location used for the generation')
    .option('-d, --destination <item>', 'The generation destination')
    .option('-l, --loader <item>', 'The loader used to extract the data', /^(loopback)$/i, 'loopback')
    .option('-f, --format <item>', 'The generation format',/^(typescript)$/i, 'typescript')
    .parse(process.argv);

function getLoader(loader:string):ILoader {
    let result: ILoader;
    switch (loader){
        case "loopback":
            result= new LoopbackLoader();
            break;
        default:
            throw "Invalid loader"
    }
    return result;
}

function getWriter(writer:string):IWriter {
    let result: IWriter;
    switch (writer){
        case "typescript":
            result = new TypescriptWriter();
            break;
        default:
            throw "Invalid writer"
    }
    return result;
}

async function action(model, destination, loader, writer):Promise<string> {
    let _loader: ILoader = getLoader(loader);
    let _writer: IWriter = getWriter(writer);
    return _loader.load(model)
        .then((system: System):string => {
            let result: string = "";
            system.classes.forEach((clazz)=> {
                result += _writer.write(clazz, destination);
                console.log("Success: The class %s has been generated at %s.", clazz.name, destination);
            });
            return result;
        });
}

async function exists(model:string):Promise<any> {
    return new Promise<any>((resolve, reject) => {
        if(!model) {
            reject("Model is undefined");
        }
       fs.stat(model, (err, stat)=> {
           if (err) {
               reject(err);
           } else {
               resolve(stat);
           }
       })
    });
}

commander.destination = commander.destination || '.';

exists(commander.model)
    .then(
        () => {
            return exists(commander.destination)
                .then(
                    ()=>{console.log('Destination exists')},
                    ()=>{return new Promise((resolve, reject)=> {
                        console.log('Destination does not exist. The application is trying to create the folder :%s', commander.destination);
                        fs.mkdir(commander.destination, "0o777", (err)=> {
                            if (err) {
                                console.log("Error: Unable to create the destination folder : ", err);
                                reject(err);
                            } else {
                                console.log("Success: The destination folder has been created at : %s", commander.destination);
                                resolve();
                            }
                        });
                    })}
                );
        },
        () => {
            console.log("Error : The application require an existing model.");
        })
    .then(() => {
        return action(
            commander.model,
            commander.destination || '.',
            commander.loader,
            commander.format
        );
    });






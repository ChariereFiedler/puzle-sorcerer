import {TypescriptWriter} from "./to/typescript/TypescriptWriter";
import {LoopbackLoader} from "./from/loopback/LoopbackLoader";
import {System} from "./model/system";

let loader: LoopbackLoader = new LoopbackLoader();

loader.load('./models/event.json')
    .then((result: System) => {
        let writer: TypescriptWriter = new TypescriptWriter();
        result.classes.forEach((clazz)=> {
            writer.write(clazz, "./models/");
        });
        console.log(result.classes);
});





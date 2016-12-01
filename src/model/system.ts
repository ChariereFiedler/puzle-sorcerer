import {Class} from "./class";
export class System {
    protected _classes: Array<Class>;
    protected _functions: Array<Function>;


    constructor(classes: Array<Class> = [], functions: Array<Function> = []) {
        this._classes = classes;
        this._functions = functions;
    }


    get classes(): Array<Class> {
        return this._classes;
    }

    set classes(value: Array<Class>) {
        this._classes = value;
    }

    addClass(...items: Class[]): void {
        items.forEach((item)=> {
            this._classes.push(item);
        });
    }

    get functions(): Array<Function> {
        return this._functions;
    }

    set functions(value: Array<Function>) {
        this._functions = value;
    }

    addFunction(...items: Function[]): void {
        items.forEach((item)=> {
            this._functions.push(item);
        });
    }
}
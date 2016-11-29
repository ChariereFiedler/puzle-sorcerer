import {Class} from "./class";

namespace model {
    export class System {
        protected _classes: Array<Class>;
        protected _functions: Array<Function>;


        constructor(classes: Array<model.Class>, functions: Array<Function>) {
            this._classes = classes;
            this._functions = functions;
        }


        get classes(): Array<model.Class> {
            return this._classes;
        }

        set classes(value: Array<model.Class>) {
            this._classes = value;
        }

        addClass(...items: model.Class[]): void {
            this._classes.push(items);
        }

        get functions(): Array<Function> {
            return this._functions;
        }

        set functions(value: Array<Function>) {
            this._functions = value;
        }

        addFunction(...items: model.Function[]): void {
            this._functions.push(items);
        }
    }
}
import {Class} from "./loopback.class";
export class System {

    private _classes: Array<Class>;

    constructor() {
        this._classes = [];
    }


    addClasses(... items:Class[]):void {
        items.forEach((item) => {
            this._classes.push(item);
        });
    }

    get classes(): Array<Class> {
        return this._classes;
    }

    set classes(value: Array<Class>) {
        this._classes = value;
    }
}
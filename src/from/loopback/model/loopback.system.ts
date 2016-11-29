import {Class} from 'loopback.class';

namespace model.loopback {
    export class System{
        private _classes: Array<Class>;

        constructor(classes: Array<model.loopback.Class>) {
            this._classes = classes;
        }


        addClasses(... items:model.loopback.Class[]):void {
            this._classes.push(items);
        }

        get classes(): Array<model.loopback.Class> {
            return this._classes;
        }

        set classes(value: Array<model.loopback.Class>) {
            this._classes = value;
        }
    }
}
import {Type} from "./type";

namespace model {
    export class Attribute extends Type {

        private _required: boolean;


        constructor(name: string, required: boolean = false) {
            super(name);
            this._required = required;
        }


        get required(): boolean {
            return this._required;
        }

        set required(value: boolean) {
            this._required = value;
        }
    }
}
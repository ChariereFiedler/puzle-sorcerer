import {Type} from './index'

export class Attribute extends Type {

    private _required: boolean;
    private _name: string;

    constructor(type: string = "", name: string = "", required: boolean = false) {
        super(type);
        this._name = name
        this._required = required;
    }

    get name():string {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
    }

    get required(): boolean {
        return this._required;
    }

    set required(value: boolean) {
        this._required = value;
    }
}

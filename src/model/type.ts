export abstract class Type {
    protected _type: string;

    constructor(name: string) {
        this._type = name;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

}
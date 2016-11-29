namespace model.loopback {
    export class Property {
        private _name: string;
        private _dft: any;
        private _dftFn: string;
        private _description: Array<string>;
        private _id: boolean;
        private _index: boolean;
        private _required: boolean;
        private _type: string;

        constructor(name: string, dft: any, dftFn: string, description: Array<string>, id: boolean, index: boolean, required: boolean, type: string) {
            this._name = name;
            this._dft = dft;
            this._dftFn = dftFn;
            this._description = description;
            this._id = id;
            this._index = index;
            this._required = required;
            this._type = type;
        }


        get name(): string {
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }

        get dft(): any {
            return this._dft;
        }

        set dft(value: any) {
            this._dft = value;
        }

        get dftFn(): string {
            return this._dftFn;
        }

        set dftFn(value: string) {
            this._dftFn = value;
        }

        get description(): Array<string> {
            return this._description;
        }

        set description(value: Array<string>) {
            this._description = value;
        }

        get id(): boolean {
            return this._id;
        }

        set id(value: boolean) {
            this._id = value;
        }

        get index(): boolean {
            return this._index;
        }

        set index(value: boolean) {
            this._index = value;
        }

        get required(): boolean {
            return this._required;
        }

        set required(value: boolean) {
            this._required = value;
        }

        get type(): string {
            return this._type;
        }

        set type(value: string) {
            this._type = value;
        }
    }
}
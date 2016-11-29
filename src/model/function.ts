import {Type} from "./type";
namespace model {
    export class Function {
        private _returnedType: Type;
        private _name: string;
        private _arguments: Array<Type>;


        constructor(returnedType: Type, name: string, arguments: Array<Type>) {
            this._returnedType = returnedType;
            this._name = name;
            this._arguments = arguments;
        }

        get returnedType(): Type {
            return this._returnedType;
        }

        set returnedType(value: Type) {
            this._returnedType = value;
        }

        get name(): string {
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }

        get arguments(): Array<Type> {
            return this._arguments;
        }

        set arguments(value: Array<Type>) {
            this._arguments = value;
        }
    }
}
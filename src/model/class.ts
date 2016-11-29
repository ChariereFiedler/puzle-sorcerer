import {Type} from "./type";
import {Namespace} from "./namespace";

namespace model {


    // TODO: add interfaces
    export class Class extends Type{

        protected _parent: Array<Class>;
        protected _attributes: Array<Attribute>;
        protected _classAttributes: Array<Type>;
        protected _methods: Array<Function>;
        protected _classMethod: Array<Function>;
        protected _namespace: Array<Namespace>;

        constructor(name: string, parent: Array<Class>, attributes: Array<Type>, classAttributes: Array<Type>, methods: Array<Function>, classMethod: Array<Function>, namespace: Array<Namespace>) {
            super(name);
            this._parent = parent;
            this._attributes = attributes;
            this._classAttributes = classAttributes;
            this._methods = methods;
            this._classMethod = classMethod;
            this._namespace = namespace;
        }


        get classAttributes(): Array<Attribute> {
            return this._classAttributes;
        }

        set classAttributes(value: Array<Attribute>) {
            this._classAttributes = value;
        }

        get namespace(): Array<Namespace> {
            return this._namespace;
        }

        set namespace(value: Array<Namespace>) {
            this._namespace = value;
        }

        get parent(): Array<Class> {
            return this._parent;
        }

        set parent(value: Array<Class>) {
            this._parent = value;
        }

        get attributes(): Array<Type> {
            return this._attributes;
        }

        set attributes(value: Array<Type>) {
            this._attributes = value;
        }

        get methods(): Array<Function> {
            return this._methods;
        }

        set methods(value: Array<Function>) {
            this._methods = value;
        }

        get classMethod(): Array<Function> {
            return this._classMethod;
        }

        set classMethod(value: Array<Function>) {
            this._classMethod = value;
        }
    }
}
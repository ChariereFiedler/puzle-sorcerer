import {Type,  Attribute, Function, Namespace} from '.'
export class Class {

    protected _name: string;
    protected _parent: Array<Class>;
    protected _attributes: Array<Attribute>;
    protected _classAttributes: Array<Type>;
    protected _methods: Array<Function>;
    protected _classMethod: Array<Function>;
    protected _namespace: Array<Namespace>;


    constructor(name: string = "", parent: Array<Class> = [], attributes: Array<Attribute> = [], classAttributes: Array<Type> = [], methods: Array<Function> = [], classMethod: Array<Function> = [], namespace: Array<Namespace> = []) {
        this._name = name;
        this._parent = parent;
        this._attributes = attributes;
        this._classAttributes = classAttributes;
        this._methods = methods;
        this._classMethod = classMethod;
        this._namespace = namespace;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get classAttributes(): Array<Type> {
        return this._classAttributes;
    }

    set classAttributes(value: Array<Type>) {
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

    get attributes(): Array<Attribute> {
        return this._attributes;
    }

    set attributes(value: Array<Attribute>) {
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
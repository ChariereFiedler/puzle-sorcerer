
import {Property} from "./loopback.property";
export class Class {
    protected   _name: string;
    protected   _plural: string;
    protected   _description: Array<string>;
    protected   _base: string;
    protected   _idInjection: boolean;
    protected   _forceId: boolean;
    protected   _httpPath: string;
    protected   _strict: boolean;
    protected   _options: Object;
    protected   _properties: Array<Property>;
    protected   _relations: Object;
    protected   _acls: Array<any>;
    protected   _scopes: Object;

    constructor(
        name: string ="",
        plural: string ="",
        description: Array<string> = [],
        base: string = "",
        idInjection: boolean = true,
        forceId: boolean = true,
        httpPath: string = "",
        strict: boolean = true,
        options: Object = {},
        properties: Array<Property> = [],
        relations: Object = {},
        acls: Array<any> = [],
        scopes: Object = {}) {
        this._name = name;
        this._plural = plural;
        this._description = description;
        this._base = base;
        this._idInjection = idInjection;
        this._forceId = forceId;
        this._httpPath = httpPath;
        this._strict = strict;
        this._options = options;
        this._properties = properties;
        this._relations = relations;
        this._acls = acls;
        this._scopes = scopes;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get plural(): string {
        return this._plural;
    }

    set plural(value: string) {
        this._plural = value;
    }

    get description(): Array<string> {
        return this._description;
    }

    set description(value: Array<string>) {
        this._description = value;
    }

    get base(): string {
        return this._base;
    }

    set base(value: string) {
        this._base = value;
    }

    get idInjection(): boolean {
        return this._idInjection;
    }

    set idInjection(value: boolean) {
        this._idInjection = value;
    }

    get forceId(): boolean {
        return this._forceId;
    }

    set forceId(value: boolean) {
        this._forceId = value;
    }

    get httpPath(): string {
        return this._httpPath;
    }

    set httpPath(value: string) {
        this._httpPath = value;
    }

    get strict(): boolean {
        return this._strict;
    }

    set strict(value: boolean) {
        this._strict = value;
    }

    get options(): Object {
        return this._options;
    }

    set options(value: Object) {
        this._options = value;
    }

    get properties(): Array<Property> {
        return this._properties;
    }

    set properties(value: Array<Property>) {
        this._properties = value;
    }

    get relations(): Object {
        return this._relations;
    }

    set relations(value: Object) {
        this._relations = value;
    }

    get acls(): Array<any> {
        return this._acls;
    }

    set acls(value: Array<any>) {
        this._acls = value;
    }

    get scopes(): Object {
        return this._scopes;
    }

    set scopes(value: Object) {
        this._scopes = value;
    }
}

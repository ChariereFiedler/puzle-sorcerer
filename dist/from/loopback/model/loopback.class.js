"use strict";
class Class {
    constructor(name = "", plural = "", description = [], base = "", idInjection = true, forceId = true, httpPath = "", strict = true, options = {}, properties = [], relations = {}, acls = [], scopes = {}) {
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
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get plural() {
        return this._plural;
    }
    set plural(value) {
        this._plural = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get base() {
        return this._base;
    }
    set base(value) {
        this._base = value;
    }
    get idInjection() {
        return this._idInjection;
    }
    set idInjection(value) {
        this._idInjection = value;
    }
    get forceId() {
        return this._forceId;
    }
    set forceId(value) {
        this._forceId = value;
    }
    get httpPath() {
        return this._httpPath;
    }
    set httpPath(value) {
        this._httpPath = value;
    }
    get strict() {
        return this._strict;
    }
    set strict(value) {
        this._strict = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    get properties() {
        return this._properties;
    }
    set properties(value) {
        this._properties = value;
    }
    get relations() {
        return this._relations;
    }
    set relations(value) {
        this._relations = value;
    }
    get acls() {
        return this._acls;
    }
    set acls(value) {
        this._acls = value;
    }
    get scopes() {
        return this._scopes;
    }
    set scopes(value) {
        this._scopes = value;
    }
}
exports.Class = Class;

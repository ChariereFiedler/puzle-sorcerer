"use strict";
const UpperFirstLetter_1 = require("./UpperFirstLetter");
function config(hbs) {
    hbs.registerHelper('upperFirstLetter', UpperFirstLetter_1.UpperFirstLetter);
    return hbs;
}
exports.config = config;

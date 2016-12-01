import {UpperFirstLetter} from "./UpperFirstLetter";

export function config(hbs) {
    hbs.registerHelper('upperFirstLetter', UpperFirstLetter);
    return hbs;
}
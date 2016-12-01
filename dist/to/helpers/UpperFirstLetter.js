"use strict";
function UpperFirstLetter(item) {
    if (item.length > 0) {
        item = item.charAt(0).toUpperCase() + item.slice(1);
    }
    return item;
}
exports.UpperFirstLetter = UpperFirstLetter;

export function UpperFirstLetter(item:string) {
    if(item.length > 0) {
        item =  item.charAt(0).toUpperCase() + item.slice(1);
    }
    return item;
}
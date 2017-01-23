export namespace StringUtils {
    export function upperFirstLetter(string:string):string {
        let result:string = '';
        if(string.length > 0) {
            result = string.charAt(0).toUpperCase() + string.slice(1);
        }
        return result;
    }
}
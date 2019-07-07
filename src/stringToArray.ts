const stringToArray = function(str: string): string[] {
    let i = 0;
    let arr: string[] = [];
    for(i; i < str.length; i++) {
        arr[i] = str[i];
    }
    return arr;
}

export default stringToArray;
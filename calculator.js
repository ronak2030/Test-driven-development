const splitByDelimiters = (str, delimiters) => {
    let result = [str];
    delimiters.forEach((delimiter) => {
        let temp = [];
        result.forEach((innerStr) => {
            
            temp = temp.concat(innerStr.split(delimiter))
        })
        result = temp;
    })
    return result;
}

const calculator = (str) => {
    if(str === "") return 0;
    if(str.length === 1) return parseInt(str);

    let delimiters = [",", "\n"];
    let isStrHasDelimiter = delimiters.some(delimiter => str.includes(delimiter));

    if(str.startsWith("//")){
        const delimiterEndIndex = str.indexOf("\n");
        const customDelimiter = str.substring(2, delimiterEndIndex);
        delimiters = [customDelimiter];
        str = str.substring(delimiterEndIndex + 1);
        isStrHasDelimiter = true
    }

    if(isStrHasDelimiter){
        const splitedNums = splitByDelimiters(str, delimiters);
        return splitedNums.reduce((acc, numStr) => acc += parseInt(numStr), 0)
    }
}

module.exports = calculator;
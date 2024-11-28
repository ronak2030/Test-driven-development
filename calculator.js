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
        let customDelimiter = str.substring(2, delimiterEndIndex);
        if(customDelimiter.includes("[")){
            customDelimiter = customDelimiter.slice(customDelimiter.indexOf("[")+1, customDelimiter.indexOf("]"));
        }
        delimiters = [customDelimiter];
        str = str.substring(delimiterEndIndex + 1);
        isStrHasDelimiter = true;
    }

    if(isStrHasDelimiter){
        const splitedNums = splitByDelimiters(str, delimiters);
        const negativeNum = splitedNums.find(num => parseInt(num) < 0);

        if(negativeNum) return `negative numbers not allowed ${negativeNum}`
        return splitedNums.reduce((acc, numStr) => {
            const num = parseInt(numStr);
            acc += (num > 1000? 0 : num);
            return acc;
        }, 0)
    }
}

module.exports = calculator;
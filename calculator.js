const calculator = (str) => {
    if(str === "") return 0;
    if(str.length === 1) return parseInt(str);
    if(str.includes(",")){
        return str.split(",").reduce((acc, numStr) => acc += parseInt(numStr), 0)
    }
}

module.exports = calculator;
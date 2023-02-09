const sumAll = function(firstNumber, secondNumber) {
    
    if (firstNumber >= secondNumber) {
        highNum = firstNumber;
        lowNum = secondNumber;

    } 
        else {
        highNum = secondNumber;
        lowNum = firstNumber;
        
    }
   if (firstNumber < 0 || secondNumber < 0) {
        return 'ERROR'
   }
   else if (typeof firstNumber != 'number' || typeof secondNumber != 'number') {
        return 'ERROR'
   }
   else{
   let sum = 0;
    for (let i = lowNum; i <= highNum; i++) {
        let number = i;
        sum = sum + number;
    }
    return sum;}

};

// Do not edit below this line
module.exports = sumAll;

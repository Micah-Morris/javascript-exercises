const removeFromArray = function(array, ...removeNum) 
{
   for (let i = 0; i < removeNum.length; i++) {
    let number = removeNum[i];
    let index = array.indexOf(number);
    if (index >= 0) {
         array.splice(index, 1);
    }
   
   }
    return array;   

};

// Do not edit below this line
module.exports = removeFromArray;

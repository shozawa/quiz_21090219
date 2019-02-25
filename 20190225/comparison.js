function bigger(a, b){
    if(a > b){
        return a;
    }else if(a < b){
        return b;
    }else{
        return a;
    };
}

console.log("bigger");
console.log("------------------------------");
console.log(bigger(1,4));
console.log("------------------------------");


const numbers = [1, 2, 4, 6, 13, 23, 54, 65];

function max(numbers){
    
    let maxValue = null;

    for(let number of numbers){
        if(!maxValue){
            maxValue = number;
        }else{
            if(number > maxValue){
                maxValue = number;
            };
        };
    };
    return maxValue;
}

console.log("max");
console.log("------------------------------");
console.log(max(numbers));
console.log("------------------------------");

module.exports = { bigger:bigger, max:max}
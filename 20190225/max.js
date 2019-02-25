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

console.log(max(numbers));
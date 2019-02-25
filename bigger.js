// ふたつの値を受け取り、大きい方を返す（２つの値が同値であれば第一引数を返す） bigger 関数を定義してください。

// function bigger(a,b){
//     if(a > b){
//         return a;
//     }else if(a < b){
//         return b;
//     }else{
//         return a;
//     };
// }
// console.log(bigger(4,1))

// 2019.02.21

function bigger(a,b){
    if(a > b){
        return a;
    }else if(a < b){
        return b;
    }else{
        return a;
    };
}

function smaller(a, b){
    if(a < b){
        return a;
    }else if(a > b){
        return b;
    }else{
        return a;
    };
}

console.log(bigger(5,5))
console.log(smaller(4,1))

module.exports = { bigger : bigger,  smaller : smaller} 
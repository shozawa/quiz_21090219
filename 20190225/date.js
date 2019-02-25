// let now = new Date();
// let year =  2000;

// function returnEraName(year){
//     if(year >= 1989){
//         eraname = ("元号は平成です");
//     }else if(year >= 1926){
//         eraname = ("元号は昭和です");
//     }else{
//         throw Error("明治以前なのでエラー")
//     }
//     return eraname;
// }

// console.log(returnEraName(year));
// console.log(now)

let year;

function returnEraNmae(year){
    if(year >= 1989){
        eraname = ('元号は平成です');
    }else if(year >= 1926){
        eraname = ('元号は昭和です');
    }else{
        throw Error("明治以前なのでエラー");
    }
    return eraname;
}


console.log(returnEraNmae(1987))
console.log(returnEraNmae(2019))
console.log(returnEraNmae(1970))
console.log(returnEraNmae(1965))


// Date を受け取り元号を文字列で返す関数を作ってください。明治より前は例外を発生させてください。

// 年の取得
let now = new Date();
let year = 1600;

function returnEraName(year){
    if(year >= 1989){
        eraname = ("元号は平成です");
    }else if(year >= 1926){
        eraname = ("元号は昭和です");
    }else{
        throw Error("明治以前なのでエラー");
    };
    return eraname;
}

console.log(returnEraName(year))
console.log(year)

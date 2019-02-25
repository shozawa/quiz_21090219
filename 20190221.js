// ふたつの値を受け取り、大きい方を返す（２つの値が同値であれば第一引数を返す） 
// bigger 関数を定義してください。

function bigger(a,b){
    if(a > b){
        return a;
    }else if(a < b){
        return b;
    }else{
        return a;
    };
}

console.log("------------------------------");
console.log(bigger(1,9));
console.log("------------------------------");


// 値の配列を受け取り、配列の最大値を返す max 関数を定義してください。
const numbers = [1, 10, 100, 15, 20, 300];

function max(numbers) {

    let maxValue = null;

    for (let number of numbers) {
            if (!maxValue) {
                maxValue = number;
            } else {
                if (number > maxValue) {
                    maxValue = number;
                };
            };
        };
    return maxValue;
}

console.log("------------------------------");
console.log(max(numbers));
console.log("------------------------------");


// assert を使って bigger と max の動作をテストしてください。
module.exports = { bigger: bigger }

// Date を受け取り元号を文字列で返す関数を作ってください。明治より前は例外を発生させてください。
let year = 1965;

function returnEraName(year){
    if(year >= 1989){
        eraname = (year + "年の元号は平成です");
    }else if(year >= 1926){
        eraname = (year + "年の元号は昭和です");
    }else{
        throw Error(year + "年は明治以前なのでエラー");
    };
    return eraname;
}
console.log("------------------------------");
console.log(returnEraName(year))
console.log("------------------------------");


// オブジェクトと配列
// 数字の配列を受け取って合計を返す sum 関数を定義してください。
// 喫煙可否フラグを残席数をプロパティに持つ Seat オブジェクトがあります。
// Seat オブジェクトの配列を引数にとり、禁煙席の残席数合計を算出する関数を作ってください。

const seats = [
    {isSmoking:1, availableSeats:3},
    {isSmoking:0, availableSeats:4},
    {isSmoking:0, availableSeats:5},
    {isSmoking:1, availableSeats:2},
    {isSmoking:1, availableSeats:2},
    {isSmoking:0, availableSeats:1},
    {isSmoking:1, availableSeats:2},
]

// sum関数を定義
function sum(notSmokingSeats){
    let total = 0;
    for(let notSmokingSeat of notSmokingSeats){
        total += notSmokingSeat;
    }
    return total;
}

function totalAvalableSeats(seatList){
    const numberOfSeats = seatList
    .filter(seat => seat.isSmoking === 0)
    .map(seat => seat.availableSeats);

    return sum(numberOfSeats);
}

console.log("------------------------------");
console.log(totalAvalableSeats(seats));
console.log("------------------------------");

// 配列と関数を引数にとって、
// 配列のすべての要素に関数を適用した値を返す map 関数を自分で定義してください。
const test = point => point >= 60;
const result = [1,3,70,80,40].map(test);

console.log("------------------------------");
console.log(result);
console.log("------------------------------");

// 配列と関数を引数にとって、
// 関数を適用した結果が真の値だけからなる配列を返す
// filter 関数を自分で定義してください。
const two = onlyTrue => onlyTrue * 2 == 4;
const output = [1,2,3].filter(two);
console.log("------------------------------");
console.log(output);
console.log("------------------------------");

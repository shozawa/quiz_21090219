// forEach
var fooor = [2, 5, 9].forEach(function(element, index) {
    console.log(index + ":" + element);
});

var five = ["--",5,6,6,65,5,"--"].forEach(function(element){
    console.log(element);
})

const six = [6,6,6,6,6]
var s = six.forEach(function(element){
    console.log(element);
})

// filter 条件にあうものだけを抽出
var filtered = [12, 5, 8, 130, 44].filter(function(element) {
    return (element >= 10);
});
console.log(filtered); // [ 12, 130, 44 ]

var block = [1,23,43,22,11,2].filter(function(element){
    return (element > 10);
})

var filter = [3,2,1].filter(number => number > 2);
console.log(filter);

var filter = [445,234,12,121,13].filter(number => number > 100);
console.log(filter)

// map 処理をして新しい配列を作る
var square = [1, 2, 3, 4, 5].map(function(element, index, array) {
    return element * element;
});

console.log(square); // [ 1, 4, 9, 16, 25 ]

const list = [10,20,30,40].map( number => number / 10);
console.log(list);

// reduce 処理をして1つの値を取得
var total = [0, 1, 2, 3].reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;
});
console.log(total); // 6

const value = [1, 3, 5].reduce(number => number * 2); // 4??
console.log(value);

// every, some
// everyは条件を全ての値が満たすか、someは条件を満たすものがあるかの判定。
// 結果はboolean
var passed = [12, 54, 18, 130, 44].every(function(element) {
    return (element >= 10);
});

console.log(passed); // true

// const code = [234112,412314,124132,312213].every(function(number){
//     return (number > 100000);
// })
// console.log(code);

const code = [13, 21, 43, 64, 34].every(number => number > 10);
console.log(code); // true

passed = [2, 5, 10, 1, 4].some(function(element) {
    return (element >= 10);
});

console.log(passed); // true



// 二つの値のうち大きい方を返す
function bigger(x, y){
    if(x > y){
        return x;
    }else if(x < y){
        return y;
    }else{
        return x;
    }
}
console.log(bigger(1,10));

// 値の配列を受け取り、配列の最大値を返す max 関数
const numbers = [1, 111, 100, 15, 20];
function max() {

    let maxValue = null;

    for (let number of numbers) {
            if (!maxValue) {
                maxValue = number;
            } else {
                if (number > maxValue) {
                    maxValue = number;
                }
            }
        }
    return maxValue;
}
console.log(max());

// let numberlist = [1, 10, 100, 15, 20];
// const maxNumber =  numberlist => Math.max(...numberlist);
// console.log(maxNumber());  //NaN

// Date を受け取り元号を文字列で返す関数を作ってください。
// 明治より前は例外を発生させてください。

class returnEraName {

    constructor(year,eraname){
        this.year = year;
        this.eraname = eraname;
    }

    get eraName(){
        if(this.year >= 1989){
            this.eraname = ("元号は平成です");
        }else if(this.year >= 1926){
            this.eraname = ("元号は昭和です");
        }else{
            throw Error("明治以前なのでエラー");
        };
        return this.eraname;
    }
}

let test = new returnEraName(1992)
console.log(test.eraName)

// this について
this.sample = 'こんにちは';
console.log( this.sample )

// function sample() {
//     console.log( this );
// }
// sample();

// var myObj = {
//     name: this,
// }
// console.log( myObj.name );


// ある席在庫に対して指定した人数で予約ができるかどうかを判定してください。
// 席在庫には、残席数（物理的なテーブルの数）
// 利用可能な人数の最小・最大値、複数のテーブルを繋げることができるかの接続可能フラグが設定されています。
// 例えば「残席数 2、最小人数 2, 最大人数 4, 接続可能」な席を考えると
// 1人で予約 NG （最少人数以下のため）
// 2人で予約 OK
// 5人で予約 OK （ふたつの席を繋げる）
// 8人で予約 OK
// 9人で予約 NG （残席数は2なので3つ以上の席を繋げることはできない）

const Seat = {table:2, avairableSeatMin:2, avairableSeatMax:4, isConnect:1 }

function isReservation(numberOfPeople){
    if(numberOfPeople < Seat.avairableSeatMin){
        return "NG";
    }else if(Seat.isConnect == 1 && Seat.avairableSeatMax * Seat.table < numberOfPeople){
        return "NG"
    }else{
        return "OK"
    }
}
console.log(isReservation(1));
console.log(isReservation(2));
console.log(isReservation(6));
console.log(isReservation(8));
console.log(isReservation(9));

const plan = { planName:"乾杯ドリンク付", price:5000, numberOfInventory:3 };
console.log(plan.planName);
console.log(plan["price"]);

// 消費税を計算する

// function tax(price) {
//     return Math.floor(price * 0.08);
// }

// tax(100); // => 8

// // 関数は代入可能

// const tax = function(price) {
// return Math.floor(price * 0.08);
// }

var price = 5000;
const tax = price => Math.floor(price * 0.08);
console.log(tax(price))

const totalPrice = (price,tax) => price + tax; 
console.log(totalPrice(price,tax(price)));


// 配列を定義

const prices = [1000, 1250, 1980];

// 何番目かを指定して配列から値を取り出す(0から始まるので注意）

prices[0]; //=> 1000
prices[1]; // => 1250

// すべての配列に対して〜する
// 例: 税込価格の計算

prices.map(price => price + tax(price)) // => [ 1080, 1350, 2138 ]

// 配列の中から～な要素を探す

// 配列の要素のうち～を満たすものだけを取り出す
// 例: 1500円以上のものだけを取り出す

prices.filter(p => p >= 1500); // => [1980]

//////
const listprice = [1000, 2500, 3500];
console.log(listprice[0]);
console.log(listprice[2]);

console.log(listprice.filter(s => s > 1000));


module.exports = { 
    tax:tax,
    totalPrice:totalPrice,
    isReservation
};

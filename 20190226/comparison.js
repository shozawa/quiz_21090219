// 関数・制御構文・例外・モジュール
// ふたつの値を受け取り、大きい方を返す（２つの値が同値であれば第一引数を返す）
// bigger 関数を定義してください。

function bigger(a, b){
    if(a > b){
        return a;
    }else if(a < b){
        return b;
    }else{
        return a;
    };
}

console.log(bigger(4,10))


// 値の配列を受け取り、配列の最大値を返す max 関数を定義してください。
console.log(Math.max(1,2,3,4,12,21));

let numbers = [1,2,3,4,12,21]
console.log(Math.max(...numbers));

let list = [23,22,30,45] 

function max(list){
    return Math.max(...list);
}
console.log(max(list));

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

let test = new returnEraName(1965)
console.log(test.eraName)


// オブジェクトと配列
// 数字の配列を受け取って合計を返す sum 関数を定義してください。
// 喫煙可否フラグを残席数をプロパティに持つ Seat オブジェクトがあります。 
// Seat オブジェクトの配列を引数にとり、禁煙席の残席数合計を算出する関数を作ってください。

    let seats = [
        { isSmoking:1, availableSeat:2 },
        { isSmoking:1, availableSeat:2 },
        { isSmoking:1, availableSeat:2 },
        { isSmoking:0, availableSeat:2 },
        { isSmoking:0, availableSeat:4 },
        { isSmoking:0, availableSeat:4 },
        { isSmoking:0, availableSeat:0 }
    ]

    function sum(isNotSmokingSeats){
        let total = 0;
        for(let isNotSmokingSeat of isNotSmokingSeats){
            total += isNotSmokingSeat
        }
        return total;
    
    }

    function onlyNotSmokingSeat(seats){
        const isNotSmokingSeats = seats
        .filter(seat => seat.isSmoking === 0)
        .map(seat => seat.availableSeat)
    
        return sum(isNotSmokingSeats)
    }

console.log('----')
console.log(onlyNotSmokingSeat(seats));
console.log('----')

// 関数型スタイル（map と filter）
// 配列と関数を引数にとって、配列のすべての要素に関数を適用した値を返す
// map 関数を自分で定義してください。
// 配列と関数を引数にとって、関数を適用した結果が真の値だけからなる配列を返す
// filter 関数を自分で定義してください。


// ある席在庫に対して指定した人数で予約ができるかどうかを判定してください。
// 席在庫には、残席数（物理的なテーブルの数）、
// 利用可能な人数の最小・最大値、複数のテーブルを繋げることができるかの
// 接続可能フラグが設定されています。
// 例えば「残席数 2、最小人数 2, 最大人数 4, 接続可能」な席を考えると
// 1人で予約 NG （最少人数以下のため）
// 2人で予約 OK
// 5人で予約 OK （ふたつの席を繋げる）
// 8人で予約 OK
// 9人で予約 NG （残席数は2なので3つ以上の席を繋げることはできない）
const Stock = {table:2, availableSeatMin:2, availableSeatMax:4, isConnect:1};

function isReservation(numberOfPeople){
    if(numberOfPeople < Stock.availableSeatMin){
        return "予約NG";
    }else if(Stock.isConnect == 1 && Stock.availableSeatMax * Stock.table < numberOfPeople){
        return "予約NG";
    }else{
        return "予約OK";
    };
}

console.log(isReservation(1));
console.log(isReservation(2));
console.log(isReservation(5));
console.log(isReservation(8));
console.log(isReservation(9));
// クラス化する方法


// 組込みのクラス String Array Date Math
console.log(Math.PI);
console.log(Math.abs(-3.3));
console.log(Math.trunc(4.32));
console.log(Math.floor(2,5,6));
console.log(Math.max(2,4,3,6));
console.log(Math.random());
console.log(Math.round(4.221));
console.log(new Date(2013, 11, 31));// カンマ区切りだとdate indexが-1になる
console.log(new Date("2013/11/31"));

var day = new Date();
console.log( day );  //今日の日付
day.setDate( day.getDate() + 50 );
console.log( day );  //50日後の日付

// var today = new Date();
// today.setMonth( today.getMonth() - 3 )
// console.log( today ); 
// console.log( today.getFullYear(),today.getMonth() + 1 );

var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1;
var day = today.getDate();
console.log( year + '年' + month + '月' + day + '日');

const plan = { name: '素敵なプラン', price: 5000, numberOfInventory: 3 };
const plan2 = { name: '飲み放題プラン', price: 2500, numberOfInventory: 4 };

console.log(plan.name)
console.log(plan2["name"])

// クラス
class Plan {

    constructor(name, price, listPrice) {
        this.name = name;
        this.price = price;
        this.listPrice = listPrice; // 元値
    }

    isDiscounted() {
        return (this.listPrice - this.price) > 0;
    }
}
    const specialPlan = new Plan('特別割引プラン', 2000, 3000);

    
    specialPlan.isDiscounted(); // => true

    // オブジェクト・リテラルでも似たようなことができるけど、
    // クラスとして定義したほうが使いまわしやすい
    const p = { name: 'プラン名', price: 1000, listPrice: 1500 };

    // 関数をプロパティに突っ込めばメソッドになる
    p.isDiscounted = function() {
    return (this.listPrice - this.price) > 0;
    }

    p.isDiscounted(); // => true


// // モジュール

// // ライブラリの読み込み?
// const lodash = require('lodash');

// // 自分で定義した関数の読み込み
// const tax = require('./tax.js'); // 相対パスで指定

// Export
// tax.js
// module.exports = tax; // これで他のファイルから呼べる

/////////////////////////////////////////////////////
// 元値と売値を持つプランのリストから最大割引率を計算

// プランの配列
const plans = [
    { listPrice: 3000, price: 2500 },
    { listPrice: 5000, price: 2000 },
    { listPrice: 4000, price: 1200 }
];
// プランの割引率を計算する関数
function disocuntRate(plan){
    const rate = (plan.listPrice - plan.price) / plan.price * 100;
    return Math.floor(rate);
}
// 最大割引率を計算する関数
function maxDiscountRate(plans){
    return Math.floor(...plans.map(disocuntRate));
}

console.log(maxDiscountRate(plans));

//エクスポート
module.exports = { 
    bigger:bigger,
    max:max,
    maxDiscountRate:maxDiscountRate,
    isReservation
}


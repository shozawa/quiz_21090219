////////////////////////////////////////////////////////////////////////////
// 次回からは一日単位でPRを出すようにしてください。
// で、PRは本番アプリに Merge するつもりで出すように頑張ってみてください。

// * 適切にファイルを分割する
// * ファイルの命名にも頭を使う
// * テストを書く
// * 余計な `console` は消す
// * インデントを揃えて、適切にスペースをいれる
////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////
// 次は練習として `Math.max` を使わずに自前で `max` 関数を書いてみよう。
// あと `Math.max` の引数に配列を渡して展開している（スプレッド構文）はややこしいところなので、ちゃんと理解して使えているか今後口頭で説明してみてください。
////////////////////////////////////////////////////////////////////////////
// function bigger(a,b){
//     if(a > b){
//         return a;
//     }else if(a < b){
//         return b;
//     }else{
//         return a;
//     }
// }
// 三項演算子とアロー関数ver
const bigger = (a, b) => a >= b ? a : b;
console.log(bigger(1,2))
const smaller = (a, b) => a <= b ? a : b;
console.log(smaller(3,1))

// max関数を作る
const numbers = [1, 2, 4, 6, 13, 23, 54, 32];

function max(numbers){

    let maxValue = null;

    for(let number of numbers){
        if(!maxValue){
            maxValue = number;
        }else{
            if(number > maxValue){
                maxValue = number;
            }
        }
    }return maxValue;
}
console.log(max(numbers));


// スプレッド構文について
// [...]はスプレッド演算子
// 例
const data = [15, -3, 78, 1];
console.log(Math.max(...data));    // 78

// もう以下のように書く必要はありません(ECMSScript2015から？)
console.log(Math.max.apply(null, data));


////////////////////////////////////////////////////////////////////////////
// クラスを使ったんですね。
// 細かい話だけど、俺だったらクラスを使うのならクラス名を `Era` 
// にして年号 `Era.name` をメソッドかプロパティにするかな。
// クラスは意味のあるデータや、データの処理の塊に名前をつけてまとめたものなので、 
// `return` という名前がクラス名なのはちょっと違和感がある。
////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////
// `eraName` は "平成" "昭和" などの元号だけ返すのがベターです。
// そうすると他の場所で再利用しやすくなります。
// ref. PDS（Presentation Domain Separation = 表示とドメインロジックの分離）
// ```js
// console.log('元号は' + test.eraName + 'です');
// // あるいはテンプレートリテラルをつかって
// console.log(`元号は${test.eraName}です`);
// ```
////////////////////////////////////////////////////////////////////////////

class Era {

    constructor(year,name){
        this.year = year;
        this.name = name;
    }

    get eraName(){
        if(this.year >= 1989){
            this.name = ("平成");
        }else if(this.year >= 1926){
            this.name = ("昭和");
        }else{
            throw Error("明治以前なのでエラー");
        };
        return this.name;
    }
}

let year = new Era(1940);
console.log("元号は" + year.eraName + "です");


////////////////////////////////////////////////////////////////////////////
// getter 使えているのいいね！
// ちなみにメソッド、プロパティ、ゲッター（get構文）の違いを説明できる？
// ちょっとややこしいけどこのあたりはちゃんと理解しておこう。
////////////////////////////////////////////////////////////////////////////
// - プロパティ
// あらかじめ設定しておいた特定の情報（値）に、名前（プロパティ名）をつけたもの。
// そのプロパティのなかでも、関数を特に「メソッド」という。

// - オブジェクト -
// プロパティを複数集めたもの集合のこと。変数配列もオブジェクトの一種。
// とりあえず簡単にオブジェクトっていう、変数や関数を格納しておける小さなプログラムの単位って考えるといい
// ex)
var traffic_light = {
    blue: "go", //プロパティ -----------|
    yellow: "slow down", //プロパティ---|--オブジェクト
    red: "stop" //プロパティ------------|
}
// これもオブジェクト
function hello() {
    console.log("hello");
}
hello();

// newを使用した配列オブジェクト
// const family = new Array(); // 変数familyに、空のArrayオブジェクトを代入
const family = new Array("Taro", "Jiro", "Saburo"); // こんなかんじで追加できる


// - メソッド
// オブジェクトのプロパティに代入された関数
// ex) ここではあえてvar
var traffic_light = {
    blue: "go",
    yellow: "slow down",
    red: "stop",
    current: " ",
    change_light:function() {     // メソッド
        switch(traffic_light.current){
        case traffic_light.blue:
            traffic_light.current = traffic_light.yellow;
            break;
        case traffic_light.yellow:
            traffic_light.current = traffic_light.red;
            break;
        case traffic_light.red:
            traffic_light.current = traffic_light.blue;
            break;
        default:
            traffic_light.current = traffic_light.blue;
            break
        }
    }
}
traffic_light.change_light();
console.log(traffic_light.current);
traffic_light.change_light();
console.log(traffic_light.current);
traffic_light.change_light();
console.log(traffic_light.current);
traffic_light.change_light();
console.log(traffic_light.current);

// - ゲッター（get構文）
// クラスの特定のプロパティを取得できる
// ex)
class User {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    //ゲッターメソッド
    get myName() {
        return this.name;
    }
}

// インスタンスの生成
const taro = new User('太郎', 32);

console.log( taro.myName );

////////////////////////////////////////////////////////////////////////////
// `var` や `let` ではなく、可能な限り `const` を使おう。
// `const` を使ったほうがいい理由については、自分で考えて説明してみてください。
////////////////////////////////////////////////////////////////////////////

// varは再呼び出し、再宣言か可能となりグローバル変数になってしまうため
// 上書きされたりする可能性があり好ましくない
// letも再代入ができてしまうので好ましくない
// constは再宣言も再呼び出しもできないので安全?

////////////////////////////////////////////////////////////////////////////
// 今回のケースだと `setter` にする必要はないです。
// これ読んでみてわからなかったら聞いてください。
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/set
////////////////////////////////////////////////////////////////////////////

// 聞きます

////////////////////////////////////////////////////////////////////////////
// 引数の命名はこれが本当にベスト？ もっといい名前がないか考えてみよう。
//  function sum(isNotSmokingSeats)
// => bool値で返るわけではないのでisはつけないほうがよい
////////////////////////////////////////////////////////////////////////////

const seats_data = [
    { isSmoking:1, availableSeat:2 },
    { isSmoking:1, availableSeat:2 },
    { isSmoking:1, availableSeat:2 },
    { isSmoking:0, availableSeat:2 },
    { isSmoking:0, availableSeat:4 },
    { isSmoking:0, availableSeat:4 },
    { isSmoking:0, availableSeat:0 }
]

function sum(noSmokingSeats){
    let total = 0;
    for(let noSmokingSeat of noSmokingSeats){
        total += noSmokingSeat;
    }
    return total;
}

function onlyNotSmokingSeat(seats_data){
    const noSmokingSeats = seats_data
    .filter(seat => seat.isSmoking === 0)
    .map(seat => seat.availableSeat)

    return sum(noSmokingSeats)
}

console.log(onlyNotSmokingSeat(seats_data));

////////////////////////////////////////////////////////////////////////////
// module.exports = { 
//     tax:tax,
//     totalPrice:totalPrice,
//     isReservation
// }
// オブジェクト初期化子の略記法の意味はちゃんと理解できてる？
// たしかに `{ isReservation: isReservation }` と `{ isReservation }` 
// は同じなんだけど、理解が曖昧だったらちゃんと分かるようになっておこう！
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#Property_definitions
////////////////////////////////////////////////////////////////////////////

// ミスですが結果的に略記法使っていました.

////////////////////////////////////////////////////////////////////////////
// オブジェクトリテラル使えるようになった？ 👍
////////////////////////////////////////////////////////////////////////////

// オブジェクトリテラル
// 数値の値を数値リテラルと呼びこともあるように、オブジェクトの値はオブジェクトリテラルという

// 使うことはできますが簡単なロジックを組む練習がまだ足りない気がします




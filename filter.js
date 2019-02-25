// 配列と関数を引数にとって、関数を適用した結果が真の値だけからなる配列を返す filter 関数を自分で定義してください。


// パターン1
const two = onlytrue => onlytrue * 2 === 4 && onlytrue * 2 === 6;
const output = [1, 2, 3, 2, 2, 5, 6].filter(two);

// // 3以上6未満だったらtrue それ以外はfalse
// const judge = number => number >= 3 && number < 6;

// console.log(judge(6));


// 10か100だったらtrue それ以外false
const judge = number => number === 10 || number === 100;

console.log(judge(100));



// console.log(output);

// // パターン2
// const sum = ar => ar + 5 === 10;
// const test = [1, 4, 5, 6, 7, 5, 5, 5].filter(sum);

// console.log(test);

// const [ファンクション名] = [引数] => [returnする処理]
// const double = v => v * 2;
// const out = [1, 2, 3, 4].map(double);

// [dobule(1), double(2), double(3), double(4)];
// console.log(out); // => 2,4,6,8

// function map(ary, f) {
//     let values = [];
//     for (let n of ary) {
//     }
// }
// 配列と関数を引数にとって、配列のすべての要素に関数を適用した値を返す map 関数を自分で定義してください。

// const [ファンクション名] = [引数] => [returnする処理]
const double = v => v * 2;
const out = [1, 2, 3, 4].map(double);

// [dobule(1), double(2), double(3), double(4)];
console.log(out); // => 2,4,6,8

function map(ary, f) {
  let values = [];
  for (let n of ary) {
  }
}

const array = [1,2,3] 
const newArray = array.map(function(value){
  return 2 * value
})

console.log(array);
console.log(newArray);

const w = array.map(value => 2*value)

console.log(w)
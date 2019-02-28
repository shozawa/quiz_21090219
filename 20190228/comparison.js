////////////////////////////////////////////////////////////////////////////
// 次回からは一日単位でPRを出すようにしてください。
// で、PRは本番アプリに Merge するつもりで出すように頑張ってみてください。

// * 適切にファイルを分割する
// * ファイルの命名にも頭を使う
// * テストを書く
// * 余計な `console` は消す
// * インデントを揃えて、適切にスペースをいれる
////////////////////////////////////////////////////////////////////////////

// ふたつの値を受け取り、大きい方を返す（２つの値が同値であれば第一引数を返す） bigger 関数を定義してください。

const bigger = (a ,b) => a >= b ? a : b;
console.log(bigger(1,4));

// 値の配列を受け取り、配列の最大値を返す max 関数を定義してください。

const numbers = [1,32,34,56,32,2];

function max(numbers){
    
    let maxNumber = null;
    
    for(let number of numbers){
        if(!maxNumber){
            maxNumber = number; 
        }else{
            if(maxNumber < number){
                maxNumber = number;
            }
        }
    }
    return maxNumber;
}

console.log(max(numbers))

// assert を使って bigger と max の動作をテストしてください。
// bigger と max は comparison.js に、テストは comparison.test.js に定義してください
module.exports = {
    bigger,
    max
}




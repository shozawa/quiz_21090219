// 消費税を計算する

function tax(price) {
    return Math.floor(price * 0.08);
}

tax(100); // => 8

// 関数は代入可能

const tax = function(price) {
return Math.floor(price * 0.08);
}

/ アロー関数という
const tax = price => Math.floor(price * 0.08);


function tax(price){
    return Math.floor(price * 0.08):
}
tax(100);

const tax = price => Math.floor(price * 0.08);

// オブジェクト（ハッシュ、連想配列）key,valueをひとかたまりとして保存する
const plan = {name:"素敵なプラン",price: 5000,numberOfInvestry: 3);
console.log()plan.name
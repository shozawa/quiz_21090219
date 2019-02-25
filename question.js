// ある席在庫に対して指定した人数で予約ができるかどうかを判定してください。
// 席在庫には、残席数（物理的なテーブルの数）、利用可能な人数の最小・最大値、複数のテーブルを繋げることができるかの接続可能フラグが設定されています。
// 例えば「残席数 2、最小人数 2, 最大人数 4, 接続可能」な席を考えると
// 1人で予約 NG （最少人数以下のため）
// 2人で予約 OK
// 5人で予約 OK （ふたつの席を繋げる）
// 8人で予約 OK
// 9人で予約 NG （残席数は2なので3つ以上の席を繋げることはできない）


// 席在庫オブジェクト
const Stock.isConnect == 1Stock = {table:2, avairableSeatMin:2, avairableSeatMax:4, isConnect:1};

// 指定した人数で予約できるか判定
function isAvairable(numberOfPeople){
    if(numberOfPeople < Stock.avairableSeatMin){
        return "予約NG";
    }else if(Stock.avairableSeatMax * Stock.tabele < numberOfPeople && Stock.isConnect == 1){
        return "予約NG";
    }else{
        return "予約OK";
    };
}

console.log(isAvairable(1));
console.log(isAvairable(2));
console.log(isAvairable(5));
console.log(isAvairable(8));
console.log(isAvairable(9));

// なんぱたーんかできるように
// クラスを使う
// か
// isAvairable(Stock,numberOfPeople)
// オブジェクトで１セットにする
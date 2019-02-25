// ある席在庫に対して指定した人数で予約ができるかどうかを判定してください。
// 席在庫には、残席数（物理的なテーブルの数）、利用可能な人数の最小・最大値、複数のテーブルを繋げることができるかの接続可能フラグが設定されています。
// 例えば「残席数 2、最小人数 2, 最大人数 4, 接続可能」な席を考えると
// 1人で予約 NG （最少人数以下のため）
// 2人で予約 OK
// 5人で予約 OK （ふたつの席を繋げる）
// 8人で予約 OK
// 9人で予約 NG （残席数は2なので3つ以上の席を繋げることはできない）

const Stock = {table:2, availavleSeatMin:2, avairableSeatMax:4, isConnect:1}

function isReservton(numberOfPeople){
    if(numberOfPeople < Stock.availavleSeatMin){
        return "予約NG";
    }else if(Stock.isConnect == 1 && Stock.avairableSeatMax * Stock.table < numberOfPeople){
        return "予約NG";
    }else{
        return "予約OK"
    };
}

console.log(isReservton(1));
console.log(isReservton(2));
console.log(isReservton(5));
console.log(isReservton(8));
console.log(isReservton(9));

date = new Date(2013,12,1);
console.log(date);
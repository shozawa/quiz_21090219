// オブジェクトと配列
// オブジェクトの配列を引数にとり、禁煙席の残席数合計を算出する関数を作ってください。

// 席情報
// isSmoking 0:禁煙 1:喫煙
// avairableSeat 残席数

const seats_data = [
    { isSmoking:1, avairableSeat:2 },
    { isSmoking:0, avairableSeat:5 },
    { isSmoking:1, avairableSeat:2 },
    { isSmoking:0, avairableSeat:5 },
    { isSmoking:1, avairableSeat:2 },
    { isSmoking:0, avairableSeat:4 },
    { isSmoking:1, avairableSeat:2 },
]

// 数字の配列を受け取って合計を返す sum 関数を定義してください。
function sum(noSmokingSeats){
    let total = 0;
    for(let noSmokingSeat of noSmokingSeats){
        total += noSmokingSeat;
    }
    return total; 
}

// 禁煙席のみ抽出して計算
function onlyNoSmokingSeat(seats_data){
    const noSmokingSeats = seats_data
    .filter(seat => seat.isSmoking === 0)
    .map(seat => seat.avairableSeat)

    return sum(noSmokingSeats)
}

console.log(onlyNoSmokingSeat(seats_data));

module.exports = {
    sum,
    onlyNoSmokingSeat
}
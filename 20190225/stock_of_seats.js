

// 数字の配列を受け取って合計を返す sum 関数を定義してください。
// 喫煙可否フラグを残席数をプロパティに持つ Seat オブジェクトがあります。
// Seat オブジェクトの配列を引数にとり、禁煙席の残席数合計を算出する関数を作ってください。

const Seats = [
    {isSmoking:1, stockOfSeats:2},
    {isSmoking:0, stockOfSeats:3}
]


function sum(notSmokingSeats){
    let total = 0; //初期値大事　NaNに何たしてもNaNになる
    for(let notSmokingSeat of notSmokingSeats){
        total += notSmokingSeat;
    }
    return total;
}


function totalAvailableSeats(seatList){
    const numberOfSeats = seatList
    .filter(seat => seat.isSmoking === 0)
    .map(seat => seat.stockOfSeats)

    return sum(numberOfSeats)
}

console.log(totalAvailableSeats(Seats))

module.exports = { totalAvailableSeats : totalAvailableSeats }
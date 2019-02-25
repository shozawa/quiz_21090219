
// 喫煙可否フラグと残席数をプロパティに持つ Seat オブジェクトがあります。(seatオブジェクト)
const seats = [
    { isSmoking: 1, availableSeats: 2 },
    { isSmoking: 0, availableSeats: 5 },
    { isSmoking: 0, availableSeats: 5 },
    { isSmoking: 0, availableSeats: 2 },
    { isSmoking: 1, availableSeats: 3 },
    { isSmoking: 1, availableSeats: 4 },
    { isSmoking: 1, availableSeats: 6 }
];

// const [ファンクション名] = [引数] => [returnする処理]
const isSmoking = seat => seat.isSmoking === 0;

// array の中身を合計して返す関数
// sum([1, 2, 3, 4]); // => 10
function sum(array) {
    let v = 0;
        for (let n of array) {
            v = v + n;
        }
    return v;
}

// Seat オブジェクトの配列を引数にとり、禁煙席の残席数合計を算出する関数を作ってください。
function totalAvailableSeats(seatList) {
    const numberOfSeats = seatList
    .filter(seat => seat.isSmoking === 0) // なんでseatsではなくseatが有効？
    .map(seat => seat.availableSeats);

// numberOfSeats => [5, 5, 2]
return sum(numberOfSeats);
}

console.log(totalAvailableSeats(seats));
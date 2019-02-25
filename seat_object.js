// 喫煙可否フラグと残席数をプロパティに持つ Seat オブジェクトがあります。
// 数字の配列を受け取って合計を返す sum 関数を定義してください。
// Seat オブジェクトの配列を引数にとり、禁煙席の残席数合計を算出する関数を作ってください。

// seatオブジェクト
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
// const isSmoking = seat => seat.isSmoking === 0;

  // array の中身を合計して返す関数
  // sum([1, 2, 3, 4]); // => 10
 function total(array) {
    let v = 0;
    for (let n of array) {
      v = v + n;
    }
    return v;
  } 
  
  function totalAvailableSeats(seatList) {
    const numberOfSeats = seatList
      .filter(seat => seat.isSmoking === 0)
      .map(seat => seat.availableSeats);
  
    // numberOfSeats => [5, 5, 2]
    return total(numberOfSeats);
  }
  
  console.log(totalAvailableSeats(seats));


  const seat = seats.map(s => s.availableSeats);
  function total_availableSeats(seats) {
    if (seats.isSmoking === 1) {
      return seats.availableSeats;
    }
  }

  


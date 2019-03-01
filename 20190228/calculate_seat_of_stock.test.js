const assert = require('assert');
const calculate_seat_of_stock = require('./calculate_seat_of_stock');

// sum関数に渡された配列の合計が正しく計算できるかテスト
const test_noSmokingSeats = [2, 5, 10]; 
assert.equal(calculate_seat_of_stock.sum(test_noSmokingSeats),17);

// 残席数計算できているかテスト
const test_seats_data = [
    { isSmoking:1, avairableSeat:2 },
    { isSmoking:0, avairableSeat:5 },
    { isSmoking:0, avairableSeat:6 }
]

assert.equal(calculate_seat_of_stock.onlyNoSmokingSeat(test_seats_data),11);
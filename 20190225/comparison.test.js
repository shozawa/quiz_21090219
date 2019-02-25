const assert = require("assert");
const comparison = require("./comparison");
const stock_of_seats = require("./stock_of_seats")

// 大きい方を返すかテスト
assert.equal(comparison.bigger(1,2),2);

// 配列
assert.equal(comparison.max([12,24,23]),24);

// 禁煙席の合計が正しく計算できてるかテスト
assert.equal(stock_of_seats.totalAvailableSeats([{isSmoking:1, stockOfSeats:2},{isSmoking:0, stockOfSeats:3}]),3)

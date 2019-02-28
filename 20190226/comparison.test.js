const assert = require('assert');
const comparison = require('./comparison')

// 2つのあたいのうち大きい方が返るかテスト
assert.equal(comparison.bigger(1,3), 3);
assert.equal(comparison.bigger(5,3), 5);

// 配列の中で一番大きい数字が返るかテスト
assert.equal(comparison.max([1,23,45]),45)

// 指定した条件で予約可能かテスト
// {table:2, availableSeatMin:2, availableSeatMax:4, isConnect:1};
assert.equal(comparison.isReservation(10),"予約NG")
assert.equal(comparison.isReservation(6),"予約OK")
assert.equal(comparison.isReservation(1),"予約NG")


// 最大割引率が正しく返るかテスト
const plans = [
    { listPrice: 3000, price: 2500 },
    { listPrice: 5000, price: 2000 },
    { listPrice: 4000, price: 1200 }
];
assert.equal(comparison.maxDiscountRate(plans),20)


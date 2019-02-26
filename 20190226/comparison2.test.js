const assert = require('assert');
const comparison = require('./comparison2')

// 税金の計算が正しいかテスト
assert.equal(comparison.tax(8000),640);

// 税込金額が正しいかテスト
assert.equal(comparison.totalPrice(6000,comparison.tax(6000)),6480);

// 予約可否判定が正しくできているかテスト
assert.equal(comparison.isReservation(3),"OK");
assert.equal(comparison.isReservation(12),"NG");
assert.equal(comparison.isReservation(1),"NG");




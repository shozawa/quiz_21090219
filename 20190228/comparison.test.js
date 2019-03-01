// require を使って comparison.test.jsから comparison.js を参照してください
const assert = require('assert');
const comparison = require('./comparison');

// bigger関数
// 2つの値のうち大きい方が返るかテスト
assert.equal(comparison.bigger(1,2),2);

// max関数
// 配列の中で最大値が返るかテスト
const number = [12,24,32,10];
assert.equal(comparison.max(number),32);
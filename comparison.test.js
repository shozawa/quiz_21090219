const assert = require('assert');
const comparison = require('./comparison');

// 配列の中で一番大きい数字が返るか
assert.equal(comparison.max(), 100);

// 配列の中で一番小さい数が返るか
assert.equal(comparison.min(), 1)

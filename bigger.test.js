const assert = require("assert").strict;
const comparison = require('./bigger');

// 2つの値のうち大きい方を返す
assert.equoal(comparison.bigger(1,2),2);

// 値が同じなら最初の第一引数を返す　検証わかりづらい？
assert.equoal(comparison.bigger(2,2),2);

// 2つの値のうち小さい方を返す
assert.equoal(comparison.smaller(4,1),1);

// 値が同じなら最初の第一引数を返す　検証わかりづらい？
assert.equoal(comparison.smaller(2,2),2);

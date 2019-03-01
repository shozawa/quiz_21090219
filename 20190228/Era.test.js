const assert = require('assert');
const Era = require('./Era.js');


// 元号が正しく返るかテスト
let year = new Era(1992);
assert.equal(year.eraName,"平成")
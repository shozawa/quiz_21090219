const assert = require('assert');
const check_era = require('./check_era');

// 元号が正しく返るかテスト


const era = new check_era.Era(2019);
console.log(era.eraName());
// assert.equal(check_era.name(2019),"昭和")


const assert = require('assert');
const Reservation = require('./Reservation');

// 以下が正しく動作するかテスト
// 1人で予約 NG （最少人数以下のため）
// 2人で予約 OK
// 5人で予約 OK （ふたつの席を繋げる）
// 8人で予約 OK
// 9人で予約 NG （残席数は2なので3つ以上の席を繋げることはできない）

assert.equal(Reservation.judgeReservation(1),"NG");
assert.equal(Reservation.judgeReservation(2),"OK");
assert.equal(Reservation.judgeReservation(5),"OK");
assert.equal(Reservation.judgeReservation(8),"OK");
assert.equal(Reservation.judgeReservation(9),"NG");
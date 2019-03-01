// 複合問題
// ある席在庫に対して指定した人数で予約ができるかどうかを判定してください。
// 席在庫には、残席数（物理的なテーブルの数）、利用可能な人数の最小・最大値、複数のテーブルを繋げることができるかの接続可能フラグが設定されています。
// 例えば「残席数 2、最小人数 2, 最大人数 4, 接続可能」な席を考えると

// 残席数   : avairableSeat
// 最小人数 : minNumberOfPeople
// 最大人数 : maxNumberOfPeople
// 接続可否 : isConnect(0:不可 1:可)

const seatOfStock = { 
    avairableSeat:2,
    minNumberOfPeople:2,
    maxNumberOfPeople:4,
    isConnect:1 
}

function judgeReservation(numberOfPeople){
    if(numberOfPeople < seatOfStock.minNumberOfPeople){
        return "NG"
    }else if(seatOfStock.isConnect === 1 && seatOfStock.maxNumberOfPeople * seatOfStock.avairableSeat < numberOfPeople){
        return "NG"
    }else{
        return "OK"
    }
}

module.exports = {
    judgeReservation
}


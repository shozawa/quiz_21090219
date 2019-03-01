// Date を受け取り元号を文字列で返す関数を作ってください。明治より前は例外を発生させてください。

class Era {

    constructor(year){
        this.year = year;
    }

    get eraName(){
        
        let name;

        if(this.year >= 1989){
            name = ("平成");
        }else if(this.year >= 1926){
            name = ("昭和");
        }else{
            throw Error("明治以前なのでエラー");
        };
        return name;
    }
}

let year = new Era(1992);
console.log("元号は" + year.eraName + "です");

module.exports = Era;
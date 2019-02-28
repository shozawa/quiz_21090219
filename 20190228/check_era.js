// Date を受け取り元号を文字列で返す関数を作ってください。明治より前は例外を発生させてください。

class Era {

    constructor(year,name){
        this.year = year;
        this.name = name;
    }

    get eraName(){
        if(this.year >= 1989){
            this.name = ("平成");
        }else if(this.year >= 1926){
            this.name = ("昭和");
        }else{
            throw Error("明治以前なのでエラー");
        };
        return this.name;
    }
}

let year = new Era(1940);
console.log("元号は" + year.eraName + "です");

// ?? クラスのget構文のエクスポートの仕方

module.exports.Era = Era;
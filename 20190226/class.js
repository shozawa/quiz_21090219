class User {
    // このように記述することで、インスタンスを生成する際に引数として文字列や数値を受け取れる
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // メソッドを定義
    getName() {
        return this.name;
    }
    // getterメソッドを作る
    get getAge() {
        return this.age;
    }
    // setterメソッドを作る（プロパティに任意の値を設定する）??
    set myName( value ) {
        return this.name = value;
    }

    // 静的メソッドを作る　特徴はインスタンスを生成しなくても利用できる
    static speak() {
        return '一休.com';
    }

}

//インスタンスを生成する
var taro = new User('太郎', 32);
console.log(taro.getName(),taro.getAge);

// 値のセット
taro.myName = '花子';
console.log( taro.myName );

// 静的メソッドはインスタンス不要
console.log( User.speak() );
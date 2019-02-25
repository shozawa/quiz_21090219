const numbers =  [1, 10, 15];

function max(numbers) {
    let maxValue;
    for (let number of numbers) {
            if (!maxValue) { 
                maxValue = number;
            } else {
                if (number > maxValue) {
                    maxValue = number;
                }
            }
        }
    return maxValue;
}

console.log(max(numbers));
console.log(max([2, 20, 30]));
console.log(max([2, 20, 30]));
console.log(max([2, 20, 30]));

// 処理の流れ
// - 配列から 1 を取り出す
// - maxValueがNULLでない時、maxValueに1が入る　上の処理
// - 配列から 10 を取り出す
// - maxValueがNULL以外のとき number > maxValue なら maxValueの値を更新
// - 10 > 1 maxValue に 10 が入る
// - 10 が返る
// - 配列から 5 を取り出す
// - maxValue

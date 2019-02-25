// 2.値の配列を受け取り、配列の最大値を返す max 関数を定義してください。
const numbers = [1, 10, 100, 15, 20];

function max() {

    let maxValue = null;

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

function min() {
    let minValue = null;

    for (let number of numbers) {
        if(!minValue) {
            minValue = number;
        } else {
            if (number < minValue) {
                minValue = number;
            }
        }
    }
    return minValue;
}

console.log(max())
console.log(min())

module.exports = { max : max , min : min} 
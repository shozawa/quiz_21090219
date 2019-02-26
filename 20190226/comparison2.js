// forEach
[2, 5, 9].forEach(function(element, index) {
    console.log(index + ":" + element);
});

// filter 条件にあうものだけを抽出
var filtered = [12, 5, 8, 130, 44].filter(function(element) {
    return (element >= 10);
});
console.log(filtered); // [ 12, 130, 44 ]

const filter = [3,2,1].filter(number => number > 2);
console.log(filter);

// map 処理をして新しい配列を作る
var square = [1, 2, 3, 4, 5].map(function(element, index, array) {
    return element * element;
});

console.log(square); // [ 1, 4, 9, 16, 25 ]

const list = [10,20,30,40].map( number => number / 10);
console.log(list);

// reduce 処理をして1つの値を取得
var total = [0, 1, 2, 3].reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;
});
console.log(total); // 6

const value = [1, 3, 5].reduce(number => number + number); // ??
console.log(value);
// Задание 1
const nums1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] === 10) {
        break;
    }
    console.log(nums1[i]);
}

// Задание 2
const nums2 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] == 4) {
        console.log(i);
    }
}

// Задание 3
const nums3 = [1, 3, 5, 10, 20];

numbs3New = nums3.join(' ');

console.log(nums3New);

// Задание 4
const result = [];
for (let i = 0; i < 3; i++) {
    const arr = [];
    for (let j = 0; j < 3; j++) {
        arr.push(1);
    }
    result.push(arr);
}
console.log(result);

// Задание 5
const nums5 = [1, 1, 1];

let nums5New = nums5.push(2, 2, 2);

console.log(nums5New);

// Задание 6
const nums6 = [9, 8, 7, 'a', 6, 5];

let nums6Sorted = nums6.sort((a, b) => a - b);
let nums6Filtered = nums6Sorted.filter(item => item !== 'a');

console.log(nums6Filtered)

// Задание 7
const nums7 = [9, 8, 7, 6, 5];
let numUser = prompt("Угадай число от 1 до 10");

const userNumber = parseInt(numUser);

if (nums7.includes(userNumber)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// Задание 8
const nums8 = 'abcdef';

const arr8 = nums8.split('');
const arr8New = arr8.reverse();
const nums8New = arr8New.join('');

console.log(nums8New);


// Задание 9
const arr = [[1, 2, 3], [4, 5, 6]];

const arrNew = arr.flat();

console.log(arrNew);

// Задание 10
const nums10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < nums10.length; i++) {
    // Проверяем, существует ли следующий элемент
    if (i + 1 < nums10.length) {
        const sum = nums10[i] + nums10[i + 1];
        console.log(sum);
    }
}

// Задание 11
function getSquares(nums11) {
    return nums11.map(num => num * num);
}

// Задание 12
function getStringLengths(str12) {
    return str12.map(str => str.length);
}

// Задание 13
function getNegative(nums13) {
    return nums13.filter(item => item < 0);
}

// Задание 14
const arr14 = [];
for (let i = 0; i < 10; i++) {
    const num14 = Math.floor(Math.random() * 11);
    arr14.push(num14);
}

const arr14New = arr14.filter(num => num % 2 === 0);

console.log("Исходный массив:", arr14); 
console.log("Массив с четными значениями:", arr14New);

// Задание 15
const arr15 = [];
for (let i = 0; i < 6; i++) {
    const num15 = Math.floor(Math.random() * 11);
    arr15.push(num15);
}

const average = arr15.reduce((sum, current) => sum + current, 0) / arr15.length;

console.log(average)
// задание 1
function multiply(a, b) {
    if (a > b) {
        console.log(a);
    }
    else {
        console.log(b);
    }
} 

// задание 2
function multiply(a) {
    if (a % 2 == 0) {
        console.log('Число четное');
    }
    else {
        console.log('Число нечетное');
    }
} 

// задание 3
function multiply(a) {
    let c = a ** 2;
    return a;
}

// задание 4
let age = parseInt(prompt("Сколько вам лет?"));
function multiply(age) {
    if (age < 0) {
        console.log('Вы ввели неправильное значение');
    }
    else if (age >= 0 && age <= 12) {
        console.log('Привет, друг!');
    }
    else {
        console.log('Добро пожаловать!');
    }
}

// задание 5
function multiply(a, b) {
    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(numA) || isNaN(numB)) {
        return 'Одно или оба значения не являются числом';
    } 
    else {
        return numA * numB;
    }
}
// задание 6
let num = prompt('Введите число')
function multiply(num) {
    const number = Number(num);
    
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } 
    else {
        const cube = number ** 3;
        return `${number} в кубе равняется ${cube}`;
    }
}

// задание 7
function circle(radius) {
    this.radius = radius;

    this.getArea = function() {
        return Math.PI * this.radius * this.radius;
    }
    
    this.getPerimeter = function() {
        return 2 * Math.PI * this.radius;
    }
}
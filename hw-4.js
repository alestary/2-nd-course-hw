// 1 задание 
for (let i = 0; i < 2; i++) {
    console.log("Привет")
}

// 2 задание
for (let i = 1; i < 6; i++) {
    console.log(i)
}

// 3 задание
for (let i = 7; i <= 22; i++) {
    console.log(i)
}

// 4 задание
const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}
for (let key in obj) {
    console.log(`${key}-${obj[key]}$`)
}

// 5 задание
let a = 0;
let n = 1000;
while (n > 50) {
    n /= 2;
    a++;
}
console.log(`Результат: ${n}, количество итераций: ${a}`)

// 6 задание
let friday = Number(prompt("Какого числа первая пятница этого месяца?"))
for (friday; friday <= 31; friday +=7) {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`)
}
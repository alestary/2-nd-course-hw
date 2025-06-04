// 1 задание
let password = 'пароль';
let askPassword = prompt("Введите пароль")
if (askPassword == password) {
    alert("Пароль введен верно")
} else {
    alert("Пароль введен неправильно")
}

// 2 задание
let c = 2;
if (c > 0 && c < 10) {
    alert("Верно")
} else {
    alert("Неверно")
}

// 3 задание
let d = 48;
let e = 120;
if (d > 100 || e > 100) {
    alert("Верно")
} else {
    alert("Неверно")
}

// 4 задание
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// 5 задание
let monthNumber = prompt("Введите номер месяца")
switch (monthNumber) {
    case '1':
        console.log('Январь');
        break;
    case '2':
        console.log('Февраль');
        break;
    case '3':
        console.log('Март');
        break;
    case '4':
        console.log('Апрель');
        break;
    case '5':
        console.log('Май');
        break;
    case '6':
        console.log('Июнь');
        break;
    case '7':
        console.log('Июль');
        break;
    case '8':
        console.log('Август');
        break;
    case '9':
        console.log('Сентябрь');
        break;
    case '10':
        console.log('Октябрь');
        break;
    case '11':
        console.log('Ноябрь');
        break;
    case '12':
        console.log('Декабрь');
        break;
    default:
        console.log('Ввели что-то не то');
}
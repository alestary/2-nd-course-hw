// Задание 1
const str = 'js';
console.log(str.toUpperCase());

// Задание 2
function filterStrings(arr, str) {
    return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
}
console.log(filterStrings(['Кошка', 'кот', 'Собака', 'кит'], 'ко'));

// Задание 3
const num = 32.58884;

console.log(Math.floor(num)); 
console.log(Math.ceil(num));  
console.log(Math.round(num)); 

// Задание 4
const numbers = [52, 53, 49, 77, 21, 32];

console.log('Минимальное значение:', Math.min(...numbers));
console.log('Максимальное значение:', Math.max(...numbers));

// Задание 5
function getRandomNumber() {
    console.log(Math.floor(Math.random() * 10) + 1);
}
getRandomNumber();

// Задание 6
function generateRandomArray(n) {
    const length = Math.floor(n / 2);
    return Array.from({ length }, () => Math.floor(Math.random() * (n + 1)));
}
console.log(generateRandomArray(10));

// Задание 7
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInRange(5, 15));

// Задание 8
console.log(new Date());

// Задание 9
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Задание 10
function formatDate(date) {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня','июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда','четверг', 'пятница', 'суббота'];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = days[date.getDay()];

    const time = date.toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit', second: '2-digit'});

    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${time}`;
}
console.log(formatDate(new Date()));
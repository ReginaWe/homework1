// Задание 1
let strJs = "js";
console.log(strJs.toUpperCase());

// Задание 2
function searchStart(arr, str) {
  return arr.filter((el) => el.toLowerCase(str).startsWith(str));
}
console.log(searchStart(["Кошка", "Кит", "Комар", "Носорог"], "ко"));
console.log(searchStart(["яблоко", "груша", "гриб", "огурец"], "гру"));
console.log(searchStart(["Дом", "Банк", "Больница", "Театр"], "Кино"));

// Задание 3
let nambr = 32.58884;
let num1 = Math.floor(nambr);
let num2 = Math.ceil(nambr);
let num = Math.round(nambr);
console.log(num1);
console.log(num2);
console.log(num);

// Задание 4
const numbers = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

// Задание 5
function numRand() {
  return Math.floor(Math.random(numRand) * 10);
}
console.log(numRand());

// Задание 6
function getRandom(n) {
  const arr = [];
  let i = n / 2;
  i = Math.floor(i);
  for (let index = 0; index < i; index++) {
    alert = arr.push(Math.round(Math.random() * n));
  }
  console.log(arr);
}
getRandom(7);
getRandom(12);

// Задание 7
function getRandomInt(minValue, maxValue) {
  return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(getRandomInt(5, 10));

// Задание 8
let currentDate1 = new Date();
console.log(currentDate1);

// Задание 9
let currentDate2 = new Date();
currentDate2.setDate(currentDate2.getDate() + 73);
console.log(currentDate2);

// Задание 10
const days = [
  "Воскресенье",
  "Понедельние",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
let myDate = new Date();
let hour = myDate.getHours();
let minute = myDate.getMinutes();
let second = myDate.getSeconds();
if (minute < 10) {
  minute = "0" + minute;
}
if (second < 10) {
  second = "0" + second;
}
let fullDate =
  "Сегодня: " +
  myDate.getDate() +
  " " +
  months[myDate.getMonth()] +
  " " +
  myDate.getFullYear() +
  ", " +
  days[myDate.getDay()] +
  " Время: " +
  hour +
  ":" +
  minute +
  ":" +
  second;
console.log(fullDate);

// Игра 2
function fruits() {
  let fruitsArr = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];
  fruitsArr = fruitsArr.sort(() => Math.random() - 0.5);
  alert(fruitsArr);

  let answer1 = prompt(`Какой фрукт был первым?`);
  let answer2 = prompt(`Какой фрукт был последним?`);

  if (answer1 === fruitsArr.indexOf[0] && answer2 === fruitsArr.indexOf[6]) {
    alert(`Поздравляю! Вы угадали`);
  } else if (
    answer1 !== fruitsArr.indexOf[0] ||
    answer2 !== fruitsArr.indexOf[6]
  ) {
    alert(`Вы не угадали`);
  } else {
    alert(`Вы были близки к победе!`);
  }
}
// Игра 1
function month() {
  let monthNumber = Number(prompt("Введите номер месяца"));
  if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
    alert(`Зима`);
  } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
    alert(`Весна`);
  } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
    alert(`Лето`);
  } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
    alert(`Осень`);
  } else if (monthNumber >= 13) {
    alert(`Такого месяца нет `);
  }
}

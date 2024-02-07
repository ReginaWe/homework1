// Задание 1
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
  if (numbs[i] == 0) break;
  console.log(numbs[i]);
}
// Задание 2
const num = [1, 5, 4, 10, 0, 3];
num.forEach((el, index) => {
  console.log(`${index} : ${el}`);
});
// Задание 3
let numbers = [1, 3, 5, 10, 20];
numbers = numbers.join(" ");
console.log(numbers);

// Задание 4
const arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    arr[i][j] = 1;
  }
}
console.log(arr);

// Задание 5
let numb = [1, 1, 1];
numb.push(2, 2, 2);
console.log(numb);

// Задание 6
let a = [9, 8, 7, "a", 6, 5];
a = a.sort();
a.pop();
console.log(a);

// Задание 7
const b = [9, 8, 7, 6, 5];
if (b.includes(Number(prompt(`Угадайте число`)))) {
  alert(`Угадал`);
} else {
  alert(`Не угадал`);
}

// Задание 8
const stroke = "abcdef";
const revStroke = stroke.split("").reverse().join("");
console.log(revStroke);

// Задание 9
const c = [
  [1, 2, 3],
  [4, 5, 6],
];
const flat = c.flat();
console.log(flat);

// Задание 10
const f = [5, 2, 4, 5, 4, 6];
for (let i = 0; i < f.length - 1; i++) {
  console.log(f[i] + f[i + 1]);
}

// Задание 11
const newArr = [2, 4, 1];
let result = newArr.map((item) => item ** 2);
console.log(result);

// Задание 12
function word(arm) {
  for (let i = 0; i < arm.length; i++) {
    console.log(arm[i].length);
  }
}
word(["слово", "", "слог", "длинное предложение", "буква"]);

// Задание 13
function filterPositive(array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      arr.push(array[i]);
    }
  }
  return arr;
}
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));

// function min(a, b) {
//   if (a > b) {
//     return b;
//   } else {
//     return a;
//   }
// }
// alert(8, 11);

// function evenNumber(c) {
//   if (c % 2 === 0) {
//     alert("Число четное");
//   } else {
//     alert("Число нечетное");
//   }
// }
// evenNumber(11);

// let square = function (d) {
//   console.log(d ** 2);
// };
// square(3);

// let square1 = function (e) {
//   return e ** 2;
// };
// square1(3);

// function youAge() {

//   let age = Number(prompt(`Сколько Вам лет?`));

//     if (age <= 0) {
//     alert(`Вы ввели неправильное значение`);
//   } else if (age > 0 && age <= 12) {
//     alert(`Привет, друг!`);
//   } else if (age >= 13) {
//     alert(`Добро пожаловать!`);
//   }
// }
// youAge();

// let h = prompt(`Введите первое число`);
// let i = prompt(`Введите второе число`);
// function exampl(h, i) {
//   if (h === " " || h === "" || i === " " || i === ""  || isNaN(h) || isNaN(i)) {
//     return "Одно или оба значения не являются числом";
//   } else {
//     return Number(h) * Number(i) ;
//   }
// }
// alert(exampl(h, i));

// let cubeNumber = function () {
//   let number = prompt(`Введите число`);

//   if (isNaN(number)) {
//     return "Переданный параметр не является числом";
//   } else {
//     return Math.pow(number, 3);
//   }
// };
// alert(cubeNumber());

// function getCircleArea() {
//   return this.radius ** 2 * Math.PI;
// }

// function getCirclePerimeter() {
//   return 2 * this.radius * Math.PI;
// }

// let circle1 = {
//   radius: 10,
//   getArea: getCircleArea,
//   getPerimeter: getCirclePerimeter,
// };

// let circle2 = {
//   radius: 5,
//   getArea: getCircleArea,
//   getPerimeter: getCirclePerimeter,
// };

// alert(circle1.getArea());
// alert(circle1.getPerimeter());
// alert(circle2.getArea());
// alert(circle2.getPerimeter());

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

// let i = 0;
// for (i = 0; i<2; i++) {
//   alert('Привет');
// }

// let b = 1;
// do {
//   alert(b);
//   b++;
// } while (b < 6);

// let c = 7;
// do {
//   alert(c);
//   c++
// } while (c < 23);

// const object = {
//   Коля : "200",
//   Вася : "300",
//   Петя : "400"
// }
// for (let key in object) {
//   alert(`${key} - зарплата ${object[key]} долларов`);
// }

// let n = 1000;
// let num = 0;

// while (n >=50) {
//   n = n/2;
//   num++;
// }
// alert(num);

// for (let day = 5; day < 31; day++) {
//   if (day === 5 || day === 12 || day === 19 || day === 26) {
//     alert(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`)
//   }

// }

// let password = "skypro";
// let enterPassword = prompt("Введите пароль");
// if (enterPassword === password) {
//   alert("Пароль введен верно");
// } else {
//   alert("Пароль введен неправильно");
// }

// let m = prompt(10);
// if (m > 0 && m < 10) {
//   alert("Верно");
// } else {
//   alert("Неверно");
// }

// let number = Number(prompt("Введите число"));
// let h = 120;
// let e = 80;

// if (h > 100 || e > 100) {
//   alert("Верно");
// } else {
//   alert("Неверно");
// }

// let a = "2";
// let b = "3";
// a = Number(a);
// b = Number(b);
// alert(a + b);

// let monthNumber = Number(prompt("Введите номер месяца"));
// switch (monthNumber) {
//   case 12:
//   case 1:
//   case 2:
//     alert("зима");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     alert("весна");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     alert("лето");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     alert("осень");
//     break;

//   default:
//     alert("monthNumber" > 13);
//     break;
// }

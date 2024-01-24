let i = 0;
for (i = 0; i<2; i++) {
  alert('Привет');
}

let b = 1;
do {
  alert(b);
  b++;
} while (b < 6);

let c = 7;
do {
  alert(c);
  c++
} while (c < 23);

const object = {
  Коля : "200",
  Вася : "300",
  Петя : "400"
}
for (let key in object) {
  alert(`${key} - зарплата ${object[key]} долларов`);
}

let n = 1000;
let num = 0;

while (n >=50) {
  n = n/2;
  num++;
}
alert(num);

for (let day = 5; day < 31; day++) {
  if (day === 5 || day === 12 || day === 19 || day === 26) {
    alert(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`)
  }
  
}


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

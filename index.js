let password = "skypro";
let enterPassword = prompt("Введите пароль");
if (enterPassword === password) {
  alert("Пароль введен верно");
} else {
  alert("Пароль введен неправильно");
}

let m = prompt(10);
if (m > 0 && m < 10) {
  alert("Верно");
} else {
  alert("Неверно");
}

let number = Number(prompt("Введите число"));
let h = 120;
let e = 80;

if (h > 100 || e > 100) {
  alert("Верно");
} else {
  alert("Неверно");
}

let a = "2";
let b = "3";
a = Number(a);
b = Number(b);
alert(a + b);

let monthNumber = Number(prompt("Введите номер месяца"));
switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    alert("зима");
    break;
  case 3:
  case 4:
  case 5:
    alert("весна");
    break;
  case 6:
  case 7:
  case 8:
    alert("лето");
    break;
  case 9:
  case 10:
  case 11:
    alert("осень");
    break;

  default:
    alert("monthNumber" > 13);
    break;
}

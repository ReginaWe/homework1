let a = 20;
alert(a);

let year = 2007;
alert(year);

let Name = "Brendan Eich";
alert(Name);

let b = 10;
let c = 2;
alert(b + c);
alert(b - c);
alert(b * c);
alert(b / c);

let d = 2 ** 5;
let result = 32;
alert(result);

let i = 9;
let f = 2;
alert(i % f);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt("Сколько вам лет?");
alert(age);

let user = {
  name: "nina",
  age: 26,
  isAdmin: true,
};
user.cityOfResidence = "Tula";
user.age = 28;
delete user.cityOfResidence;

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

let youName = prompt("Ваше имя");
alert("Привет," + youName + "!");

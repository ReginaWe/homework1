let a = 20;
alert(a);

let year = Number(2007);
alert(year);

let Name = "Brendan Eich";
alert(Name);

let b = 10;
let c = 2;
alert(Number(b + c));
alert(Number(b - c));
alert(Number(b * c));
alert(Number(b / c));

let d = Number(2 ** 5);
let result = 32;
alert(result);

let i = 9;
let f = 2;
alert(i % f);

let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num = num++;
num = num--;
alert(num);

let age = prompt("Сколько вам лет?");
alert(age);

let user = {
  name: "nina",
  age: "26",
  isAdmin: true,
};
user.cityOfResidence = "Tula";
delete user.cityOfResidence;

let info = prompt("Ваш размер ноги?");
alert(user.name);
alert(user.age);
alert(user.isAdmin);
alert(user.cityOfResidence);
alert(user.info);

let youName = prompt("Ваше имя");
alert("Привет," + youName + "!");

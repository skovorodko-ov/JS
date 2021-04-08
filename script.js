var money = 1000;
var income = 'фриланс';
var addExpenses = 'Интернет Такси Комуналка';
var deposit = true;
var mission = 50000;
var period = 12;

console.log(typeof money, typeof income, typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' долларов');

addExpenses = addExpenses.toLowerCase();
addExpenses = addExpenses.split(' ');
console.log(addExpenses);

var budjetDay = money / 30;
console.log(budjetDay);

var num = 266219;
var masNum = [];

num = num.toString();
// console.log(num);

for (var i = 0, len = num.length; i < len; i++) {
    masNum.push(+num.charAt(i)) 
    // что значит "+" почему он перевел из массимва строк в массив чисел????
};

var multipliNum = 1;
for (var i = 0, len = masNum.length; i < len; i++) {
    multipliNum *= masNum[i];
};
// console.log(multipliNum);
num = multipliNum ** 3;

num = num.toString();
// console.log(num);
console.log(num.charAt(0) + num.charAt(1));
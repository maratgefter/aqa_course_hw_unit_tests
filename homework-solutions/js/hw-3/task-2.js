/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

let number = 1;
let numberToString = number.toString();
let sum;

if (number < 1) {
    console.log("Введите значение от 1 до 9");

} else if (number > 9) {
    console.log("Введите значение от 1 до 9");

} else {
    sum = (number + +(numberToString + numberToString) + +(numberToString + numberToString + numberToString));

    console.log("Результат вычислений равен: " + sum);
}
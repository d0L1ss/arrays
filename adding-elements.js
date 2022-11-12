const arr = [];
arr.push('Google');
console.log(arr);

const lysArr = [];
lysArr.push('Lipton', 'Coca-Cola', 'Pepsi');
console.log(lysArr);

const unArr = [true, false];
unArr.unshift(null);
console.log(unArr);

const puArr = [[], []];
puArr[1].push(true, true, true);
console.log(puArr);

const shiArr = ['html', 'css',];
shiArr.unshift('git');
shiArr.push('javascript');
console.log(shiArr);

shiArr[4] = 'figma';
console.log(shiArr);

let stack = ["html", "css", "bem", "js"];


stack.push('react');// A) добавь в конец массива значение "react" (используй .push())

console.log(stack);// B) выведи весь массив в консоль

stack.push('redux');// C) добавь в конец массива значение "redux" (используй способ с [])

console.log(stack);// D) выведи весь массив в консоль

stack.unshift('git');// E) добавь в начало массива значение "git"

console.log(stack);// F) выведи весь массив в консоль

console.log(`сначала мы изучим ` + stack[0] + ',', `а в конце изучим ` + stack[6]);/* 
 *  G) выведи в консоль строку "сначала мы изучим git, а в конце изучим redux". 
 *  Слова "git" и "redux" должны браться из массива, а не печататься от руки.
 * (вспоминай про кавычки ``)
 */

stack.unshift("mysql", "nosql");// H) добавь в конец массива сразу два элемента: "mysql" и "nosql".

console.log(stack);// I) выведи в консоль длину массива
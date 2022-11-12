const array = []; // пустой массив
console.log(array[0]);

const arr1 = [1, 2, 3]; // массив с тремя числовыми элементами
console.log(arr1[0] + arr1[2]);

const arr2 = ['vscode', 'telegram', 'AppStore']; // массив с тремя строковыми элементами
console.log(arr2[0] + arr2[1] + arr2[2]);

const arr3 = [4, 5, 6, 'apple', 'honor', 'samsung']; // массив с тремя строковыми и с тремя числовыми элементами
console.log(`1-й элемент массива - ` + arr3[0] + `,`, `а последний элемент - ` + arr3[5]);

const arr4 = ['Мухаммад', 'Мухаммад', 'Мансур', 'Хамзат', 'Минкаил']; // массив с именами всех твоих одногруппников
console.log(arr4[4], arr1[2]);

const arr5 = [13, 'word', null, undefined, true, false]; //массив, в котором есть число, строка, null, undefined, true и false
console.log(arr5[0]);
console.log(arr5[1]);
console.log(arr5[2]);
console.log(arr5[3]);
console.log(arr5[4]);
console.log(arr5[5]);

const arr6 = [[], [], []]; // массив, внутри которого три пустых массива
console.log(arr6.length);

const arr7 = [[7, 8, 9], [10, 11, 12]]; // массив, внутри которого два массива, а внутри каждого вложенного массива любые три числа
console.log(arr7[0] * arr7[5]);
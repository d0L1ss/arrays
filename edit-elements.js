let characters = ["Рамси Болтон", "Тирион Ланнистер", "Станис Баратеон", "Теон Грейджой", "Эддард Старк", "Дайенерис Таргариен", "Джон Сноу"];

const king = "Король Ночи";
const stupid = "Бран Старк";

characters[0] = king; // измени первый элемент массива на значение переменной king.
console.log(characters);

characters[1] = null; // измени второй элемент массива на значение null.
console.log(characters);

characters[2] = 'Станис Король'; // измени третий элемент массива на строку "Станис Король".
console.log(characters);

characters[3] = stupid;// измени четвертый элемент массива на значение переменной stupid.
console.log(characters);

characters[4] = ["season", "01"]; // измени пятый элемент массива на массив ["season", "01"].
console.log(characters);

characters[5] = king + stupid; // измени шестой элемент массива на конкатенацию значений переменных king и stupid.
console.log(characters);

characters[7] = characters[0];
console.log(characters);
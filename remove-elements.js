let characters = ["Тирион Ланнистер", "Станис Баратеон", "Теон Грейджой", "Эддард Старк", "Дайенерис Таргариен", "Джон Сноу"];

const firstElement = characters[0]; //создай переменную с именем firstElement. В качестве значения задай ей первый элемент массива characters. 
console.log(firstElement); // Выведи эту переменную в консоль.

const lastElement = characters[5]; // создай переменную с именем lastElement. В качестве значения задай ей последний элемент массива characters. 
console.log(lastElement); //Выведи эту переменную в консоль.

characters.shift([0]); // удали из массива characters первый элемент.
console.log(characters);

characters.push(firstElement); // добавь значение переменной firstElement в конец массива characters.
console.log(characters);

characters.unshift("Король Ночи"); // добавь в начало массива characters значение "Король Ночи".
console.log(characters); 

delete characters[5]; // удали с помощью delete элемент массива characters с индексом 5.
console.log(characters); 

characters.unshift(lastElement);
console.log(characters); 
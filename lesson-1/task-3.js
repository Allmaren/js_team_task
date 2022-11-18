//* Завдання 4:
//* Напишіть аналог вбудованого методу map для роботи з масивами
//* Подивіться як працює map і повторіть цю поведінку для масива, який буде передано в якості параметру array
//? Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

// Приклад:
// map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]
const array = [1, 2, 3];
function map(xArray, fn) {
	let newArray = [];
	for (const el of xArray) {
		newArray.push(fn(el));
		console.log(newArray);
	}
	return newArray;
}
function y(el) {
	return el ** 2;
}

console.log(map(array, y));

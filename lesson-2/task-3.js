//* Нужно написать функцию которая принимает 1 параметр key, которая будет перебирать объект
//* если у объекта есть такой ключ - вернет true

const obj = {
	name: "Igor",
	car: "Mercedes",
	carColor: "black",
};

// const includesKey = key => Object.keys(obj).some(objkey => objkey === key);
const includesKey = key => key in obj;

console.log(includesKey("carColor"));

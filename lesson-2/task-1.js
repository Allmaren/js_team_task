// 1. Напиши скрипт, который для объекта user,
//последовательно:
//1 добавит поле mood со значением 'happy'
//2 заменит hobby на 'skydiving'
//3 заменит значение premium на false
//4 выводит содержимое объекта users в фортмате
//ключ:значение используя Object.keys() и for...of
const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
// const userKeys = Object.keys(user);
// for (const userKey of userKeys) {
//   console.log(`${userKey}: ${user[userKey]}`);
// }
for (const userKey of Object.keys(user)) {
    console.log(`${userKey}: ${user[userKey]}`);
}

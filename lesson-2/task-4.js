// Task 3
// Нужно перебрать объекты и вывести имя лучшего сотрудника

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

const findBestEmployee = (employees) =>
  Object.entries(employees).sort(
    ([a, valueA], [b, valueB]) => valueB - valueA
  )[0][0];

// const findBestEmployee = (employees) => {
//   const bestEmployeesVal = Object.values(employees); // [29, 35, 1, 99]
//   const maxValue = Math.max(...bestEmployeesVal);
//   const names = Object.keys(employees);
//   const index = bestEmployeesVal.findIndex((value) => {
//     return value === maxValue;
//   });
//   return names[index];
// };
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango
console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux

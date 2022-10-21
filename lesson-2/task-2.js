//4. Создайте объект calculator с тремя методами
//read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//sum() возвращает сумму сохраненных значений
//mult() перемножает сохраненные значения и возвращает результат

const calculator = {
  read(a, b) {
    (this.x = a), (this.y = b);
  },
  //   sum() {this.x + this.y;
  //   },
  mult() {
    return this.x * this.y;
  },
};

const sum = () => calculator.x + calculator.y;

calculator.read(10, 5);
console.log(sum());
// console.log(calculator.x, calculator.y);
// console.log(calculator.sum());
// console.log(calculator.mult());

//Напишіть утиліту, яка виводить числа, починаючи з початкового значення та збільшуючи кроки, 
//які користувач може запускати та зупиняти будь-яку кількість разів

// - Функціональність запуску та зупинки може бути доступна за допомогою функції, яка внутрішньо піклується про збільшення та відображення даних
// - setInterval можна використовувати для виконання завдання та обробки запуску та зупинки відображення даних

function timer(init = 0, step = 1) {
  let intervalId;
  let count = init;

  const startTimer = () => {
     
  }

  const stopTimer = () => {
   
  }

  return {
      startTimer,
      stopTimer,
  };
}
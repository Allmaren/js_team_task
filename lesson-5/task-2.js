//Напишіть функцію, яка виводитиме числа від 1 до 10 із затримкою в 1 секунду між кожним значенням

function counter() {
  const startCounter = 1;
  const endCounter = 10;
  let i = 0;
  const timerId = setInterval(() => {
    i += startCounter;
    console.log(i);
    if (i === endCounter) {
      clearInterval(timerId);
    }
  }, 1000);
}
counter();

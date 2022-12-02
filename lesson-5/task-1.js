// Створіть функцію, яка отримує функцію як аргумент і виконує її через 2 секунди

function timer(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

function c() {
  console.log("Це я");
}

timer(c);

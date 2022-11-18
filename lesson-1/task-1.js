//4. При помощи цикла for додайте все четные числа от   min до max

const max = 50;
const min = 0;

function evenNumbers(min, max) {
  let sum = 0;
  for (i = min; i <= max; i += 1) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}


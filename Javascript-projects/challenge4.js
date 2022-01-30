// Print multiplication table for any input value
function table(number) {
  for (let i = 1; i <= 10; i++) {
    const result = number + " * " + i + "=" + number * i;
    console.log(result);
  }
}

table(5);

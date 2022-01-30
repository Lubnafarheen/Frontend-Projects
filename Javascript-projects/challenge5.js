//Calculate the sum of numbers from 1 to 10

let sum = 0;

for (let i = 0; i <= 10; i++) {
  sum += i;
}
console.log(sum);

//calculate any sum of numbers
//const numSum = (n) => n * (n+1) / 2;
// Let say you are getting the sum of 1-100, by applying Gauss's approach, you'd want 50(101)=5050.
//50 is the number of pairs and in the code, it is represented by n * and 101 is the addition of the middle pair (50+51) or
//in the code (n+1), then finally we divide by 2 for the middle number.

function numSum(N) {
  var total = 0;
  for (var i = 1; i <= N; i++) {
    total += i; //or total = total*i;
  }
  console.log(total);
}
numSum(100);

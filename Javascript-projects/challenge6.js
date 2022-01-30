//calculate 10!
 function factorialize(num){
 for (let i=1; i<=10; i++){
 num*= i; //or num = num * i;
 }
 console.log(num);
}
 factorialize(10);

//or progarm to find factorial of any number
 function factorial(n) {
   j = 1;
   for (i = 1; i <= n; i++) {
     j = j * i;
   }
   console.log(j);
 }
factorial(5);
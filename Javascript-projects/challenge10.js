// To display an array of numbers

const numbers = ['5','6','12','18','20'];

numbers.forEach(number =>{
  
  console.log(number);
})

const attendees = ["Lohsar", "Khan", "Ahmed"];

attendees.forEach(attendee => {
  console.log('You are invited' + attendee)
});

// for (var i=0; i < numbers.length; i++){
//   console.log(numbers[i]);
// }

// for(number of numbers){
//   console.log(number);
// }

// Display array of objects

const names = {
  'firstName': 'Lubna' ,'Age':'28'
}


 for(let in names) console.log(names[let]);


const flowers =['rose', 'lotus','lily','tulip'];

flowers.forEach(show =>{
  console.log(show);
   
})
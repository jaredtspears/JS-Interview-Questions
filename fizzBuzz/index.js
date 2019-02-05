// output the integers from 1-100
  //for each mutiple of 3 print 'fizz'
  //for each multiple of 5 print 'buzz'
  //for mutiples of both print 'fizzbuzz'

for(i=1; i<101; i++){
  
  // if i is divisible by 3 & 5 (MUST BE FIRST)
  if (i%3 ===0 && i%5 === 0){
    console.log('fizzBuzz')
  }//divisible by 3
  else if(i%3 === 0){
    console.log('fizz');
  }//divisible by 5
   else if (i%5 === 0){
    console.log('buzz');
  }  //clg the rest of the numbers
  else {
    console.log(i);
  }
}
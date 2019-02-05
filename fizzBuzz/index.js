// output the integers from 1-100
  //for each mutiple of 3 print 'fizz'
  //for each multiple of 5 print 'buzz'
  //for mutiples of both print 'fizzbuzz'

for(i=1; i<101; i++){
  
  var multipleOfThree = i % 3 === 0;
  var multipleOfFive = i % 5 === 0; 

  // if i is divisible by 3 & 5 (MUST BE FIRST)
  if (multipleOfThree && multipleOfFive){
    console.log('fizzBuzz')
  }//divisible by 3
  else if(multipleOfThree){
    console.log('fizz');
  }//divisible by 5
   else if (multipleOfFive){
    console.log('buzz');
  }  //clg the rest of the numbers
  else {
    console.log(i);
  }
}
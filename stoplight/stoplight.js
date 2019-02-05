
var illuminate = (function(){

  if(/*if something is done*/something){
    document.querySelector('#redLight');
  } else if(/*or if something is done*/ something){
    document.querySelector('#yellowLight');
  }else if(/*or if something else is done*/ something){
    document.querySelector('#greenLight');
  }

})();




function off_BlackOut(){
  document.getElementById('red').style.backgroundColor = 'black';
  document.getElementById('yellow').style.backgroundColor = 'black';
  document.getElementById('green').style.backgroundColor = 'black';
}
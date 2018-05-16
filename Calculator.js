function events(){

  var inputs = document.querySelectorAll('input');
  for(var i=0;i<inputs.length; i++)
  {
    inputs[i].addEventListener("click", function(){
        document.getElementById('screen').innerHTML += this.value;
    });
  }
}


window.onload = function(){

  events();

};

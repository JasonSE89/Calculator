function events(){

  var inputs = document.querySelectorAll('input');
  for(var i=0;i<inputs.length; i++)
  {
    inputs[i].addEventListener("click", function(){
        if(this.value=="c")
        {
          document.getElementById('screen').innerHTML = "";
        }
        else if(this.value=="&divide;")
        {
          document.getElementById('screen').innerHTML += "/";
        }
        else if(this.value=="="){
          var result = eval(document.getElementById('screen').innerHTML);
          document.getElementById('screen').innerHTML = result;
        }
        else{
        document.getElementById('screen').innerHTML += this.value;
      }
    });
  }
}


window.onload = function(){

  events();

};

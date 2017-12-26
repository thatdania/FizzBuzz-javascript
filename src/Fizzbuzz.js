function FizzBuzz() {
}

FizzBuzz.prototype.math = function(){
  var list = [];
  for(var n=0; n < 100; n++){
    var value = n + 1;

    if(value % 3 === 0){
      list[n] = "Fizz"
    }

    else {
    list[n] = value
    }
    
  }
  return list;
}

function FizzBuzz() {
}

FizzBuzz.prototype.math = function(){
  var list = [];
  for(var n=0; n < 100; n++){
    var value = n + 1;

    if(value % 3 === 0 && value % 5 === 0){
      list[n] = "FizzBuzz"
    }

    else if(value % 3 === 0){
      list[n] = "Fizz"
    }

    else if(value % 5 === 0){
      list[n] = "Buzz"
    }

    else {
    list[n] = value
    }

  }
  return list;
}

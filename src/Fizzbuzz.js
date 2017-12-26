function FizzBuzz() {
}

FizzBuzz.prototype.math = function(){
  var list = [];
  for(var n=0; n < 100; n++){
    var value = n + 1;
    list[n] = value
  }
  return list;
}

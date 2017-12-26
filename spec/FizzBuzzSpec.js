describe("FizzBuzz", function() {
    var fizzbuzz = new FizzBuzz();
    var list = fizzbuzz.math();

    it("should return an array of 100 values", function() {
    expect(list.length).toEqual(100);
   });

   it("should start from 1 instead from 0", function(){
     expect(list[0]).toEqual(1);
   });

   it("should show Fizz if divisible by three", function(){
     expect(list[2]).toEqual("Fizz");
   });

   it("should show Buzz if divisible by five", function(){
     expect(list[4]).toEqual("Buzz")
   })

});

// describe("FizzBuzz", function() {
//   var fizzbuzz = new FizzBuzz();
//   var array = fizzbuzz.loop();
//
//   it("should return an array of 100 values", function() {
//     expect(array.length).toEqual(100);
//   });

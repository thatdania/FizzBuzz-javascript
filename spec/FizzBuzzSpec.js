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
   });

   it("should show FizzBuzz if both divisible by five or three",function(){
     expect(list[14]).toEqual("FizzBuzz")
   });

   it("number should print if it is not part of FizzBuzz",function(){
     expect(list[10]).toEqual(11)
   });

});

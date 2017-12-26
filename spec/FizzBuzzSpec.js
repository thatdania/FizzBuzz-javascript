describe("FizzBuzz", function() {
    var fizzbuzz = new FizzBuzz();
    var list = fizzbuzz.math();

    it("should return an array of 100 values", function() {
    expect(list.length).toEqual(100);
   });

});

// describe("FizzBuzz", function() {
//   var fizzbuzz = new FizzBuzz();
//   var array = fizzbuzz.loop();
//
//   it("should return an array of 100 values", function() {
//     expect(array.length).toEqual(100);
//   });

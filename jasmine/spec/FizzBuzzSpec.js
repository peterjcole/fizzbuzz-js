describe(fizzBuzz, function() {
  // var fizzBuzz

  // beforeEach(function() {
  //   fizzBuzz = new FizzBuzz();
  // });

  it ('should return fizz when passed the number 3', function() {
    expect(fizzBuzz(3)).toEqual('fizz')
  })

  it ('should return buzz when passed the number 5', function() {
    expect(fizzBuzz(5)).toEqual('buzz')
  })

  it ('should return fizzbuzz when passed the number 15', function() {
    expect(fizzBuzz(15)).toEqual('fizzbuzz')
  })

  it ('should return 4 when passed the number 4', function() {
    expect(fizzBuzz(4).toEqual('4'))
  })
})
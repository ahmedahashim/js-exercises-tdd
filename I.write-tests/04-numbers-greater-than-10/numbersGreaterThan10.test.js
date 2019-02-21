var largerThanTen = require('./numbersGreaterThan10');

test('Get numbers greater than 10', function () {
  
    const arr = [4, 10, 32, 9, 21];
    const expectation =[32,21]
    const result = largerThanTen(arr);
    expect(result).toEqual(expectation);

});


// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];

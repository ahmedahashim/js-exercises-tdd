var getEven = require('./get-even-numbers')
test('Get even numbers',function(){
    const numbers = [22, 13, 73, 82, 4];
    const expectation = [22, 82, 4];
    const result = getEven(numbers)

    expect(result).toEqual(expectation);

});



// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
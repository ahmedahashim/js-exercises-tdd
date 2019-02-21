var myNewArray = require('./get-second-third');
test('Get secondandthird', function () {
    const array = [90, 5, 11, 8, 6];
    const expectation = [6, 8];
    const result = myNewArray(array)
    expect(result).toEqual(expectation);

});




// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
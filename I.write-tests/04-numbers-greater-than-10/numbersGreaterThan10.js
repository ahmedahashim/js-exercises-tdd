function largerThanTen(arr) {
    
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        if (value > 10) {
            result.push(value)
        }
    }

    return result;
}
module.exports = largerThanTen
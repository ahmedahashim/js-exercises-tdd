 function secondLargest(array) {
    array.sort(function (x, y) {
        return x < y;
    });
    return array[1];
};
module.exports = secondLargest;
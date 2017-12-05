var arr = [2,3,4,6,8,9,10];

// const newArr = arr.filter=(item => {
//     return item > 5;
// })

function filterLessThanFive(item) {
    return item > 5;
}
function filterOdd(item) {
    return (item % 2) != 0;
}
function filter(arr,testFunction) {
    var filteredArr = [];
    for(var i=0; i<arr.length; i++){
        if(testFunction(arr[i])){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
console.log(filter(arr,filterOdd));

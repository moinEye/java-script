const numbers = [1,2,3,4,7];

console.log(numbers.includes(20));

function includes(array, searchElement) {

    for (let element of array)
        if (element === searchElement)
        return true;

}






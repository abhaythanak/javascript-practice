//find min number array 

function findMinNum(array){
    if (!array) {
        throw new Error('array should not be empty');
    } else if(array.length === 1) {
        return array[0];
    }else {
        let currentVal = array[0]
        for (let i = 1; i < array.length; i++) {
            if (array[i] < currentVal) {
                currentVal = array[i]
            }
        }
        return currentVal
    }
}
 console.log(findMinNum([]))
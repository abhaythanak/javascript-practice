let numberArray = [300,[7,14]]

function canSum(targetSum,number,memo={}) {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0 ) return true;
    if ( targetSum < 0) return false


    for (let num of number){
        const reminder = targetSum - num
        if (canSum(reminder,number,memo) === true){
            memo[targetSum] = true
            return true;
        }
    }
    memo[targetSum] = false
    return false;
}

console.log(canSum(numberArray[0],numberArray[1]))
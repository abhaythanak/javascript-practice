let arr = [4, 8, 6, 7, 32, 2];

// Simple array sorting without using sort()
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            // Swap the elements if they are in the wrong order
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

// 'arr' is now sorted in ascending order
console.log(arr); // Output: [2, 4, 6, 7, 8, 32]

  Array.prototype.AbhayMap= function(cb){
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
        
    }
    return temp;
  }

   //Polyfill for filter
  Array.prototype.AbhayFilter= function(cb){
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i],i,this)) temp.push(this[i])
        
    }
    return temp;
  } 


  //Polyfill for reduce
  Array.prototype.AbhayReduce= function(cb,initialValue){
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
        
    }
    return accumulator;
  }
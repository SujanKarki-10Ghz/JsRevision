//filter values inside an array
//filter values based on some logic
//returns a new array

//filter even number inside array
const arr = [5, 1, 3, 2, 6];
// const output = arr.filter((item)=>item %2 === 0); //=> [2, 6]
const output = arr.filter((item)=> item > 4); //=> [5, 6]
console.log(output);
//takes a function as arguement with two parameters: accumulator, currentvalue 
// takes second argument initial value
// reduce ((accu, currentValue)=>{}, initialValue);
// doesn't change the original array

const arr = [5, 1, 2, 3, 6];

// function Sum (x){
//     let sum = 0;
//     for(let i =0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     console.log(sum);
// }
// Sum(arr);


//  function Max(x){
//     let max = 0;
//     for(let i =0 ; i<x.length; i++){
//         if(arr[i] > max){
//             max =arr[i];
//         }
//         console.log(max);
//     }
// }
// Max(arr);

//sum of all numbers
const output = arr.reduce((accumulator, currentValue)=>{
 return  accumulator + currentValue;
});

//working of the above code
// 5 + 1 = 6
// 6 + 2 = 8 
// 8 + 3 = 11
// 11 + 6 = 17


console.log(output); //=> 17

const max = arr.reduce((accumulator, currentValue)=>{
    //  if(accumulator > currentValue){
    //     return accumulator;
    // }else{
    //     return currentValue;
    // };
     return accumulator > currentValue ? accumulator : currentValue;
}, 0)
console.log(max); //=> 6
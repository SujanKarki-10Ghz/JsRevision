//map() is a higher order function
//it gives out new array and doesnot change the original array
const arr = [5, 1, 3, 2, 6];

//Doube [10, 2, 6, 4, 12]

//Triple [15, 3, 9, 6, 18]

//Binary ["101", "1", "11", "10", "110"]

// const output = arr.map((item)=>{
//     return item*2; 
// })

// console.log(output);

const output = arr.map(item=>item.toString(2));
console.log(output);




//filter values inside an array
//filter values based on some logic
//returns a new array

//filter even number inside array
const arr = [5, 1, 3, 2, 6];
// const output = arr.filter((item)=>item %2 === 0); //=> [2, 6]
const output = arr.filter((item)=> item > 4); //=> [5, 6]
console.log(output);


const users = [
    {firstName: "akshay", lastName: "saini", age:26},
    {firstName:"donald", lastName:"trump", age: 75},
    {firstName:"elon", lastName:"musk", age: 50},
    {firstName:"deepika", lastName:"padukone", age: 26},
];

const result = users.filter((item)=>item.age < 30).map((items)=>items.firstName)
console.log(result);
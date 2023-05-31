// the bind() method has to be used to prevent losing this.
// The bind() method creates a new function that, when called, has its this keyword set to the provided value,
// with a given sequence of arguments preceding any provided when the new function is called.

let printFullName = function(hometown, state){
    // console.log(this);
    console.log(`${this.firstName} ${this.lastName} From ${hometown}, ${state} `); //Sachin Tendulkar 
}
const name = {
    firstName: "Akshay",
    lastName: "Saini",
    // printFullName: function(){
    //     // console.log(this);
    //     console.log(`${this.firstName} ${this.lastName} `); //Sachin Tendulkar 
    // }
}
let printMyName = printFullName.bind(name, "delhi", "maharastra");
printMyName();

const name2 = {
    firstName : "Sachin",
    lastName : "Tendulkar",
}

//function borrowing
let printMySName = printFullName.bind(name2, "mumbai", "maharastra");
printMySName();
// name.printFullName();
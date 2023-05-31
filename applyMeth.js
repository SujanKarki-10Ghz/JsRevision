//similar to call but we pass second argument as a array list

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
printFullName.apply(name, ["delhi", "maharastra"]);


const name2 = {
    firstName : "Sachin",
    lastName : "Tendulkar",
}

//function borrowing
printFullName.apply(name2, ["mumbai", "maharastra"]);
// name.printFullName();
function myFunc(callback){
    console.log("This is my Func1");
    setTimeout(()=>{
        callback();
    }, 1000)
    }
    
    function myFunc2(){
        console.log("This is my Func2");
    }
    myFunc(myFunc2);
    
    
    function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure){
        if(typeof number1 ==="number" && typeof number2 ==="number"){
            onSuccess(number1, number2);
        }
        else{
            onFailure();
        }
    }
    
    getTwoNumbersAndAdd(4, 5, (num1, num2)=>{
        console.log(num1 + num2);
    }, ()=>{
        console.log("Wrong data type");
        console.log("Please insert number");
    })
    
    
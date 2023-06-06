//creating a promise
const cart = ["Shoes", "pants", "kurtha"];
const validateCart = (cart)=>{
    return true;
}

const createOrder = (cart)=>{
    const pr = new Promise((resolve, reject)=>{
        //createorder
        //validateCart
        //orderId
        if(!validateCart(cart)){
            const error = new Error("Cart is not valid");
            reject(error);
        }
        const orderId = "12345";
        if(orderId){
            setTimeout(()=>{
            resolve(orderId);
            }, 5000)
        }
    })
    return pr;
}

const proceedToPayment = (orderId)=>{
    return new Promise((resolve, reject)=>{
        resolve("Payment Successful");
    })
}


createOrder(cart).then((orderId)=>{
   return orderId;
})
.then((orderId)=>{
    return proceedToPayment(orderId);
})
.then((paymentInfo)=>{
    console.log(paymentInfo);
})
.catch((error)=>{
    console.log(error.message);
})

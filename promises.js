// const heading1 = document.querySelector(".heading1");
// const body = document.body;
// // const tableheading = document.getElementsByTagName("th")
// const URL = "https://jsonplaceholder.typicode.com/photos";
// const photos = fetch( URL).then((response)=>{
//     return response.json();
    
// }).then((data)=>{
//     return data;
// }).then((data)=>{
//     data.map((item)=>{
//         console.log(item.albumId);   
//     })
// }); 

//creating a promise with a function returning a promise
const promiseFunc = ()=>{
const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("fried rice");
    }else{
        reject("Something went wrong");
    }
    }, 2000)
})
}

promiseFunc().then((friedRice)=>{
    console.log(`let's eat my ${friedRice}`);
}).catch((error)=>{
    console.log(error);
})
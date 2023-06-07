const URL = "https://jsonplaceholder.typicode.com/posts";

//  async function Response(){
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw new Error("Something went wrong");
//     }
//     const data = response.json();
//     return data;
// }
// Response().then((response)=>{
//     return response;
// }).then((data)=>{
//     data.map((item)=>{
//         if(item.id < 10){
//             console.log(item);
//         }
//     })
// }).catch((error)=>{
//     console.log(error);
// })

const Response = async()=>{
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    const data = response.json();
    return data;
}

Response().then((response)=>{
    return response;
}).then((data)=>{
    for(let value of data){
        console.log(value);
    }
})
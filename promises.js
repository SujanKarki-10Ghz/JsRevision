const heading1 = document.querySelector(".heading1");
const body = document.body;
// const tableheading = document.getElementsByTagName("th")
const URL = "https://jsonplaceholder.typicode.com/photos";
const photos = fetch( URL).then((response)=>{
    return response.json();
    
}).then((data)=>{
    return data;
}).then((data)=>{
    data.map((item)=>{
        console.log(item.albumId);   
    })
}); 
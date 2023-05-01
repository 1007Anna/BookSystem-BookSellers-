const search = document.getElementById("search")
const update = document.getElementById("update")
const isbnInput = document.getElementById("isbnInput")
const isbn = document.getElementById("isbn")
const title = document.getElementById("title")
const author = document.getElementById("author")
const price = document.getElementById("price")
const inventory = document.getElementById("inventory")
const inventoryQTY = document.getElementById("inventoryQTY")


search.addEventListener("click",function(){

    let body = {
        "isbn":isbnInput.value
    }

    let inventoryList = [];

    fetch("http://localhost:8080/search_isbn",{
    method:"POST",
    headers:{
        "Content-Type": "application/json",
    },
    body:JSON.stringify(body)
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        inventoryList = data
        console.log(inventoryList);
        isbn.innerText = inventoryList[0].isbn
        title.innerText = inventoryList[0].title
        author.innerText = inventoryList[0].author
        price.innerText = inventoryList[0].price
        inventory.innerText = inventoryList[0].inventory
    })
    .catch(function(err){
        console.log(err)
    })
})



update.addEventListener("click",function(){

    let body = {
        "isbn":isbnInput.value,
        "updateInventory":inventoryQTY.value
    }

    fetch("http://localhost:8080/update_book_inventory",{
    method:"POST",
    headers:{
        "Content-Type": "application/json",
    },
    body:JSON.stringify(body)
})
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    
    isbn.innerText = data[0].isbn
    title.innerText = data[0].title
    author.innerText = data[0].author
    price.innerText = data[0].price
    inventory.innerText = data[0].inventory
    
})
.catch(function(err){
    console.log(err)
})
})

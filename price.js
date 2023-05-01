const search = document.getElementById("search")
const update = document.getElementById("update")
const isbnInput = document.getElementById("isbnInput")
const isbn = document.getElementById("isbn")
const title = document.getElementById("title")
const author = document.getElementById("author")
const price = document.getElementById("price")
const inventory = document.getElementById("inventory")
const priceQTY = document.getElementById("priceQTY")






search.addEventListener("click",function(){

    let body = {
        "isbn":isbnInput.value
    }

    let priceList = [];

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
        priceList = data
        console.log(priceList);
        
        isbn.innerText = priceList[0].isbn
        title.innerText = priceList[0].title
        author.innerText = priceList[0].author
        price.innerText = priceList[0].price
        inventory.innerText = priceList[0].inventory
        
    })
    .catch(function(err){
        console.log(err)
    })
})



update.addEventListener("click",function(){

    let body = {
        "isbn":isbnInput.value,
        "updatePrice":priceQTY.value
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
    
        isbn.innerText = isbnInput.value
        title.innerText = data.title
        author.innerText = data.author
        price.innerText = data.price
        inventory.innerText = data.inventory
        
})
.catch(function(err){
    console.log(err)
})
})

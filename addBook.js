const btn = document.getElementById("btn")
const inputTitle = document.getElementById("inputTitle")
const inputAuthor = document.getElementById("inputAuthor")
const inputISBN = document.getElementById("inputISBN")
const inputPrice = document.getElementById("inputPrice")
const inputInventory = document.getElementById("inputInventory")
const inputSales = document.getElementById("inputSales")
const inputCategory = document.getElementById("inputCategory")
const title = document.getElementById("title")
const author = document.getElementById("author")
const isbn = document.getElementById("isbn")
const price = document.getElementById("price")
const inventory = document.getElementById("inventory")
const sales = document.getElementById("sales")
const category = document.getElementById("category")





btn.addEventListener("click",function(){

    let body = {
        "title":"inputTitle.value",
        "author":"inputAuthor.value",
        "isbn":"inputISBN.value",
        "price":inputPrice.value,
        "inventory":inputInventory.value,
        "sales":inputSales.value,
        "category":"inputCategory.value"
    }

    fetch("http://localhost:8080/add_replace_book",{
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
        location.href="./bookCheck.html"
    })
    .catch(function(err){
        console.log(err)
    })
})
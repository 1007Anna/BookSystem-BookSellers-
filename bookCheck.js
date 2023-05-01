const title = document.getElementById("title")
const author = document.getElementById("author")
const isbn = document.getElementById("isbn")
const price = document.getElementById("price")
const inventory = document.getElementById("inventory")
const sales = document.getElementById("sales")
const category = document.getElementById("category")


    fetch("http://localhost:8080/add_replace_book",{
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        title.innerText = data[0].title
        author.innerText = data[0].author
        isbn.innerText = data[0].isbn
        price.innerText = data[0].price
        inventory.innerText = data[0].inventory
        sales.innerText = data[0].sales
        category.innerText = data[0].category
        
    })
    .catch(function(err){
        console.log(err)
    })

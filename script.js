// let newName = document.getElementById("name")//getting name form user

let newEmail = document.getElementById("email")//getting email

let newNumber = document.getElementById("number") // getting number

let newForm = document.getElementById("form") //getting form


// adding evetnlistner to form

newForm.addEventListener("submit", addItem)





function addItem(e){
    e.preventDefault()

    let newName = document.getElementById("name").value //fetching value of name 
    // console.log(newName)

    let newEmail = document.getElementById("email").value //fetching value of email
    // console.log(newEmail)

    let newNumber = document.getElementById("number").value//fetching value of number 

    // console.log(newNumber)


    let ul = document.createElement("ul")

    document.body.appendChild(ul)

    let li = document.createElement("li")

    ul.appendChild(li)


    li.appendChild(document.createTextNode(newName))
    li.appendChild(document.createTextNode(` - ${newEmail}`))
    li.appendChild(document.createTextNode(` - ${newNumber}`))

    newForm.appendChild(li);


    // storing into local storgae 
    let localStorageContent = localStorage.getItem("names")

    let names
    if(localStorageContent === null){
        names = []

    }else{
             names = JSON.parse(localStorageContent)

             //the line names = JSON.parse(localStorageContent) converts the JSON string stored in localStorageContent into a JavaScript array and assigns it to the names variable, allowing you to work with the data in its original array format.
    }

    names.push(newName,newEmail,newNumber)
    localStorage.setItem("names",JSON.stringify(names))

    // console.log(localStorageContent)
}
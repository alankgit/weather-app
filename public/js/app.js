console.log("Hey Lol")

fetch("http://puzzle.mead.io/puzzle").then((response)=>{

response.json().then((data)=>{
    console.log(data)
})
})

// fetch("http://localhost:3000/address?weather=boston").then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//         console.log(data.error)
//         }
//         console.log(data.location)
//         console.log(data.address)
//     })

// })


const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const p1 =document.querySelector("#message-1")
const p2 =document.querySelector("#message-2")


p1.textContent = "Fetching Weather"




weatherForm.addEventListener("submit",(e)=>{
    e.preventDefault()

    const location = search.value

   


    fetch("http://localhost:3000/address?weather=" + location).then((response)=>{
response.json().then((data)=>{
    if(data.error){
        
        p1.textContent=data.error
    }else{
       p1.textContent = data.location
       p2.textContent=data.forecast


console.log(data.location)

    }
})
    })
})
// const express = require("express")
// const path = require("path")


// const app = express()


// const staticdir = path.join(__dirname,"../public")
// const hbsdir = path.join(__dirname,"../template")


// app.set("view engine","hbs")
// app.set("views",hbsdir)


// app.use(express.static(staticdir))


// app.get("/about",(req,res)=>{
//     res.render("about")
// })


// app.listen(3000,()=>{
//     console.log("success")
// })


// const express = require("express")
// const path = require("path")



// const app = express()


// const hbsdir = path.join(__dirname,"../template")
// const static = path.join(__dirname,"../public")





// app.set("view engine","hbs")
// app.set("views",hbsdir)

// app.use(express.static(static))

// app.get("",(req,res)=>{
//     res.render("index")
// })


// app.get("/about",(req,res)=>{
//     res.render("about")
// })



// app.listen(3000,()=>{
//     console.log("Well Done")
// })



const hbs = require("hbs")
const path = require("path")
const express = require("express")
const forecast = require("./utils/forecast")
const geocode = require("./utils/geocode")



const app = express()


const template = path.join(__dirname,"../template/views")
const static = path.join(__dirname,"../public")
const partial = path.join(__dirname,"../template/partial")


app.set("view engine","hbs")
app.set("views",template)

hbs.registerPartials(partial)

app.use(express.static(static))

app.get("",(req,res)=>{
    res.render("index", {
        title:"Index Page",
        name:"adam"
    })
})


app.get("/about",(req,res)=>{
    res.render("about",{
        title:"About Page",
        name:"Lily"
    })
})


app.get("/help",(req,res)=>{
    res.render("help",{
        title:"Help Page",
        name:"Honda"
    })
})

app.get("/product",(req,res)=>{

    if(!req.query.search){
        res.send({
            error:"No search term entered here"
        })
    }
    console.log(req.query)
    res.send({
        products: []
    })
})



app.get("/address",(req,res)=>{
if(!req.query.weather){
    res.send({
        error:"No Weather asked"
    })
}

geocode(req.query.weather,(error,{latitude, longitude, location} = {})=>{
    if(error){
        return res.send( {error} )
    }

    forecast(longitude, latitude, (error,forecastData)=>{
        if(error){
            return res.send({error})
        }
        res.send({
            address: req.query.weather,
            forecast: forecastData, location 
        })
    })

})
})
 






app.get("/help/*",(req,res)=>{
    res.render("error",{
        title:"No Help Page Found"
    })
})

app.get("*",(req,res)=>{
    res.render("general",{
        title:"404 Error"
    })
})


app.listen(3000,()=>{
    console.log("nice")
})



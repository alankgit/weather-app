const hbs = require("hbs")
const path = require("path")
const express = require("express")

const app = express()


// directory for express 
const staticfolder = path.join(__dirname,"../public")
const viewsFolder = path.join(__dirname,"../template")



// setup handalbar and and views
app.set("view engine","hbs")
app.set("views", viewsFolder)


// setup static directory
app.use(express.static(staticfolder))

app.get("",(req,res)=>{
    res.render("index",{
        title: "My Hero",
        Name: "Academia"
    })
})


app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/help",(req,res)=>{
    res.render("help",{
        name: "Ande"
    })
})





app.listen(3000,()=>{
    console.log("Server is running in 3000!")
})


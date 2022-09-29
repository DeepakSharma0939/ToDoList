// jshint esversion:6

const express = require("express")
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

var items = ["Buy Food","Cook Food","Eat Food"] ;
let workItems = [];

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
const port = 3000;
app.set('view engine','ejs');

app.get("/",(req,res)=>{
    
    let day = date();
    res.render("list",{listTitle:day, newListItems:items});

});

app.post("/",(req,res)=>{

    let item = req.body.newItem;

    if(req.body.list === "work"){
        workItems.push(item);
        res.redirect("/work")
    }
    else{
        items.push(item);
        res.redirect("/"); 
    }
});

app.get("/work",(req,res)=>{
    res.render("list",{listTitle:"Work List", newListItems: workItems})
})

// app.post("/work",(req,res)=>{
//     let item = req.body.newitem;
//     workItems.push(item);
//     res.redirect("/work")
// })

app.get("/about",(req,res)=>{
    res.render("about")
})


app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})
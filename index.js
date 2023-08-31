const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const Todo = require("./models/todo")
const { redirect } = require("statuses")

const port = 3000;

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const dburl = "mongodb+srv://ifegbesan6:Cvq44JyIzOLd17TM@cluster0.miqcqp0.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dburl, {useNewUrlParser:true, useUnifiedTopology:true})

app.get("/", (req, res) => {
    res.render("index")
})

app.post('/', (req, res)=>{
    const todo = new Todo({
        todo: "sleep"
    })
    todo.save()
    .then(result=>{
        res.redirect('/')
    })
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
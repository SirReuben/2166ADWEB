var Express = require('express');
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

//create instance of express app
var app=Express();
//Make use of the cors module
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://rbsibal:Robsibal@cluster0.bvxavhk.mongodb.net/?retryWrites=true&w=majority";

var DATABASENAME = "MyDb";

var database;

app.listen(5038, ()=>{
MongoClient.connect (CONNECTION_STRING,(error, client)=>{
database=client.db(DATABASENAME);
console.log('Yay!')
})
})

//get all dbase data
app.get('/api/Books/GetBooks',(req, res) => {
database.collection("Books").find({}).toArray((error,result)=>{
res.send(result);
})
})

app.post('/api/Books/AddBook', multer().none(), async (req, res) =>{
try{
const numOfDocs = await database.collection("Books").countDocuments();
await database.collection("Books").insertOne({
id: (numOfDocs + 1).toString(),
title: req.body.title,
description: req.body.description, 
price: req.body.price
});
res.json("Added Successfully");
} catch (error){
console.error("Error Adding book:", error);
res.status(500).json({ error: "Failed to add book"});

}
});

app.delete('/api/Books/DeleteBook', (req, res)=>{
database.collection("Books").deleteOne({
id:req.query.id
});res.json("Deleted Successfully");
})
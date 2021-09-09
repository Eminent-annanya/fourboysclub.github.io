const { text, response } = require("express");
const express = require("express");
const path = require('path');
const app = express();
const fs = require('fs');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
// const port = (8000)

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/contact');
}

// seeema type
const contactSchema = new mongoose.Schema({
  Name: String,
  Contact_no: String,
  email : String,
  requirments: String
});

const contact = mongoose.model('contact', contactSchema);

// the express spesivicstion of data
app.use(express.static("views"));
app.use(express.urlencoded())




// the app to get on the get requst
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'))

});

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/about.html'))

});

app.get('/workes', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/workes.html'))

});

app.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/contact.html'))

});

app.get('/blogs', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/blogs.html'))

});

app.get('/learn', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/learn.html'))

});

// app post links
app.post('/contact', function (req, res) {

    var mydata = new contact(req.body);
    mydata.save().then(()=>{
      res.sendFile(path.join(__dirname + '/views/contact.html'))
    }).catch(()=>{
      res.status(400).send("item was not saved")
    });
  
  // console.log(req.body)
  
  //   //   var name = req.body.name;
  //   // var number = req.body.number;
  //   // console.log(name = "name+", number is "+number+");
  // // res.send('/contact.html')
  // res.sendFile(path.join(__dirname + '/views/contact.html'))
})



// the port link
app.listen(8000);
console.log('Express server started');

require('dotenv').config();
const port = process.env.PORT || 3030;
const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./blog.json');

const fs = require('fs');

app.use(express.urlencoded({ extended: false}));
app.use(cors());

app.get('/blog', (req, res) => {
     try {
          res.json(data);
     } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Error fetching data' });
     }
})

app.get('/blog/:title', (req, res) => {
     let getTitle = req.params.title

     let getidata = data.find(itm=> itm.title.replaceAll(' ', '-') === getTitle);
     console.log(getidata);

     try {
          res.json(getidata);
     } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Error fetching data' });
     }
})

app.post('/blog/add', (req, res) => {
     let bodyd = req.body;
     data.push({id: Date.now(), ...bodyd}) 
     fs.writeFile('./blog.json', JSON.stringify(data), (err,blogpost)=>{
          if(err) throw err;
          return res.json({ message:"post added successfully"})
     })     
})


app.listen(port, ()=> console.log("App running at " + port))




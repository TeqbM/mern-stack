require('dotenv').config();
const port = process.env.PORT || 3030;
const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./blog.json');

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

app.post('/', (req, res) => {
     let bodyd = [req.body];
     console.table(bodyd);
     res.json({ message:"pending"})
})


app.listen(port, ()=> console.log("App running at " + port))




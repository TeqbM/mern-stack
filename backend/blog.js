require('dotenv').config();
const port = process.env.PORT || 3030;
const express = require('express');
const app = express();

const data = require('./data.json');

app.use(express.urlencoded({ extended: false}));

app.get('/', (req, res) => {
     try {
          res.json(data);
     } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Error fetching data' });
     }
})
app.get('/:id', (req, res) => {
     let id = Number(req.params.id);
     console.log(typeof  id);
     let getidata = data.find(itm=> itm.id === id);
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




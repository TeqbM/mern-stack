require('dotenv').config();
const express = require('express');
const app = express();
const pool = require('./db');
let port = process.env.PORT || 3030;
const cors = require('cors');

app.use(cors())

app.get('/blog', async (req, res) =>{
     try {
          const [rows] = await pool.query('SELECT * FROM blog');
          res.json(rows);
     } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Error fetching data' });
     }
})


app.listen(port, function(){
     console.log("listen on port " + port);
});


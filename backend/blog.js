require('dotenv').config();
const port = process.env.PORT || 3030;
const express = require('express');
const app = express();

app.get('/', (req, res) => {
     res.json({status:'Pending'});
})

app.listen(port, ()=> console.log("App running at " + port))




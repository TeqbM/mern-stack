require('dotenv').config()
const express = require('express');
const app = express();

const port = process.env.PORT || 3030;

app.get('/', (req, res) => {
     const id = req.params
     console.log(id);
     res.json({ status: "pending"})
})


app.listen(port, (err)=> {
     if (err) throw err;
     console.log("app listening on port " + port);
});
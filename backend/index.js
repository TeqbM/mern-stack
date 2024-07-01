
const express = require('express');
const app = express();
require('dotenv').config()
// const port = 3030;
const port = process.env.PORT || 3030;
// const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

     
const pool = require('./db'); 

app.use(bodyParser.json());
app.use(cors({
     origin: 'http://localhost:5173'
}));


// **Create (POST) employee**
app.post('/api/employee', async (req, res) => {
     const data = req.body; // Get data from request body
     try {
          const [rows] = await pool.query('INSERT INTO employee (name, age, salary) VALUES (?, ?, ?)', [data.name, data.age, data.salary]);
          res.json({ message: 'Data created successfully!' });
     } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Error creating data' });
     }
});
   
// **Read (GET) employee**
app.get('/api/employee', async (req, res) => {
     try {
          const [rows] = await pool.query('SELECT * FROM employee');
          res.json(rows);
     } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Error fetching data' });
     }
});

// ** Particular (GET) employee**
app.get('/api/employee/:id', async (req, res) => {
     const id = Number(req.params.id);
     console.log("true");
     try {
          const [rows] = await pool.query('SELECT * FROM employee');
          const employe = rows.find(empi => empi.id === id);
          if(employe){
               res.json(employe);
          }else{
               console.log("false");
               res.json({ message: id + ' Data not found' });
          }
     } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Data not found' });
     }

});


// **Update (PUT/PATCH) employee**
app.put('/api/employee/:id', async (req, res) => {
     const id = req.params.id;
     const data = req.body;
     try {
       const [rows] = await pool.query('UPDATE employee SET name = ?, age = ?, salary = ? WHERE id = ?', [data.name,data.age, data.salary, id]);
       if (rows.affectedRows === 1) {
         res.json({ message: 'Data updated successfully!' });
       } else {
         res.status(404).json({ message: 'Data not found' });
       }
     } catch (err) {
       console.error(err);
       res.status(500).json({ message: 'Error updating data' });
     }
});
   
// **Delete (DELETE) Endpoint**
app.delete('/api/employee/:id', async (req, res) => {
     const id = req.params.id;
     console.log(id);
     try {
          const [rows] = await pool.query('DELETE FROM employee WHERE id = ?', [id]);
          if (rows.affectedRows === 1) {
               res.json({ message: 'Data deleted successfully!' });
          } else {
               res.status(404).json({ message: 'Data not found' });
          }
     }
     catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Error Delete data' });
     }
});

app.listen(port,function(){
     console.log(`server run on port ${port}`)
})

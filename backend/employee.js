
const express = require('express');
const app = express();
require('dotenv').config()
const pool = require('./db');
let port = process.env.PORT || 3030;
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


app.get('/emp', async (req, res) => {
     try {
          const [data] = await pool.query('select * from employee');     
          res.json(data);
     } catch (error) {
          console.log(error);
     }
})

app.get('/emp/:id', async (req, res) => {
     try {
          const id = Number(req.params.id)
          const [data] = await pool.query('select * from employee');  
          let employee =  data?.filter(itm=> itm.id === id)
          if(employee.length> 0){
               res.json(employee);
          }else{
               res.json({emp:"Employ Not Found"});
          }
     } catch (error) {
          console.log(error);
     }
})

app.put('/emp/:id', async (req, res) => {
     try {
          const id = req.params.id
          const data = req.body;
          console.log(data);
          const [rows] = await pool.query('UPDATE employee SET name = ?, age = ?, salary = ? WHERE id = ?', [data.name,data.age, data.salary, id]);
          res.json({stattus:"updated",data:data});
     } catch (error) {
          console.log(error);
     }
})

app.delete('/emp/:id', async (req, res) => {
     try {
          const id = req.params.id
          const [rows] = await pool.query('delete from employee WHERE id = ?', [id]);
          res.json({stattus:"Employ Delete ",rows});
     } catch (error) {
          console.log(error);
     }
})


app.listen(port, (err)=>{
     if(err) throw err;
     console.log(`listening on port ${port}`);
})
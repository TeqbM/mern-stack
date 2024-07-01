let port = process.env.PORT || 3030

const express = require('express');
const app = express();
require('dotenv').config()
const pool = require('./db'); 
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(cors());


// Signup endpoint


app.post('/user/api', async (req, res) => {
     // const data = req.body; // Get data from request body
     const { username, email, password,first_name,last_name } = req.body;
     try {
          const saltRounds = 10;
          const hashedPassword = await bcrypt.hash(password, saltRounds);

          const sql = `INSERT INTO users (username, email, password, first_name, last_name) VALUES (?, ?, ?,?, ?)`;
          const values = [username, email, hashedPassword,first_name,last_name];
      
          const [rows] = await pool.query(sql,values);
          res.json({ message: 'Data created successfully!' });
     } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Error creating data' });
     }
});

// Login endpoint
app.post('/user/api/login', async (req, res) => {
  const { username, password } = req.body;

  // Check for missing fields
  if (!username || !password) {
    return res.status(400).send('Missing required fields');
  }

  try {
    const [rows] = await pool.query('SELECT password FROM users WHERE username = ?', [username]);
    if (!rows.length) {
      // Username not found, avoid revealing existence of username
      return res.status(401).send('Invalid credentials');
    }
    const hashedPassword = rows[0].password;

    // Compare entered password with hashed password using bcrypt.compare
    const passwordMatch = await bcrypt.compare(password, hashedPassword);

    if (passwordMatch) {
      // Login successful (handle session or token generation as needed)
      res.send('Login successful'); // Replace with appropriate response for your application
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error during login');
  }
});
app.get('/user/api', async (req, res) => {
     try {
          const [rows] = await pool.query('SELECT * FROM users');
          res.json(rows);
     } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Error fetching data' });
     }
});  

app.listen(port, (err)=> console.log('server listening on '+ port));
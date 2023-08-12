const express = require('express')
const app = express()
const port = 3003
const cors = require('cors');

app.use(cors());

var mysql = require('mysql');

app.get('/data', (req, res) => {
    res.json({ message: 'Hello from Express backend!' });
  });

app.get('/gratefulfor', (req, res) => {
  const message = req.query.msg;

  if (!message) {
    return res.status(400).json({ error: 'Message parameter is required.' });
  }

  const insertQuery = "INSERT INTO messages (msg) VALUES (?)";

  con.query(insertQuery, [message], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ error: 'An error occurred while inserting data.' });
    }
    console.log("Data inserted successfully:", result);
    return res.status(200).json({ message: 'Data inserted successfully.' });
  });
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'db'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


app.listen(port, '172.20.10.118', () => {
  console.log(`Example app listening on port ${port}`)
})
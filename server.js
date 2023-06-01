const express = require("express");
const app = express();
const PORT = 5500;
const mysql = require('mysql');
require("dotenv").config();
app.use(express.static("public"));

// Povezava z bazo
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

connection.connect((err) => {
  if (err) {
    console.error('Napaka pri povezavi z bazo: ', err);
    return;
  }
  console.log('Povezava z bazo je vzpostavljena');
  connection.query("CREATE TABLE IF NOT EXISTS tabela (ID INT AUTO_INCREMENT PRIMARY KEY, CREATED_AT DATETIME, MEDIANA INT)", (err, result) => {
    if (err) {
      console.error("Napaka pri ustvarjanju tabele: ", err);
      return;
    }
    console.log("Ustvarjena tabela");
  });
});








// Endpoints
app.get("/api/mediana/get", (req, res) => {
  const query = "SELECT MEDIANA FROM tabela ORDER BY CREATED_AT DESC";

  connection.query(query, (err, result) => {
    if (err) {
      console.error("Napaka pri izvajanju poizvedbe: ", err);
      res.status(500).send("Napaka pri izvajanju poizvedbe");
      return;
    }

    res.json(result.map(row => row.MEDIANA));
  });
});

app.post("/api/mediana/post", (req, res) => {
  console.log(req.body)
  const body = req.body.stevilke;
  const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
  // Ce ni REQ.BODY === {json: {MEDIANA: 1}}
  if (!stevilke) {
    req.status(400).send("Ni podanih števil");
    return;
  } else {
    
     const numbers = median(stevilke);

  function median(numbers) {
      const sorted = Array.from(numbers).sort((a, b) => a - b);
      const middle = Math.floor(sorted.length / 2);
  
      if (sorted.length % 2 === 0) {
          return (sorted[middle - 1] + sorted[middle]) / 2;
      }
  
      return sorted[middle];
  }
    const query = `INSERT INTO tabela(CREATED_AT, MEDIANA) values('${timestamp}',${sorted[middle]})`;
  };
});


app.listen(PORT, () => {
  console.log(`Strežnik je pognan na http://localhost:${PORT}`);
});



//



//










/*

1





1





app.get("/api/mediana/get/", (req, res) => {
    const query = "SELECT MEDIANA FROM tabela ORDER BY CREATED_AT DESC";

    conn.query(query, (err, result) => {
      if (err) {
        console.error("Napaka pri izvajanju poizvedbe: ", err);
        res.status(500).send("Napaka pri izvajanju poizvedbe");
        return;
      }

      const mediane = result.map(row => row.MEDIANA);
      res.send(`MEDIANA: ${mediane.join(", ")}`);
    });
  });



//tole rabiš za POST!
//  app.use(express.json());

app.listen(
    PORT,
    () => console.log(`Buden sem na http://localhost:${PORT}`)
);
//post
app.post("/api/mediana/calculate", (req, res) => {
    const { numbers } = req.body;

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
    const middle = Math.floor(sortedNumbers.length / 2);

    let calculatedMedian;
    if (sortedNumbers.length % 2 === 0) {
      calculatedMedian = (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2;
    } else {
      calculatedMedian = sortedNumbers[middle];
    }

    const query = "INSERT INTO tabela (CREATED_AT, MEDIANA) VALUES (?, ?)";
    const values = [new Date(), calculatedMedian];

    conn.query(query, values, (err, result) => {
      if (err) {
        console.error("Napaka pri izvajanju poizvedbe: ", err);
        res.status(500).send("Napaka pri izvajanju poizvedbe");
        return;
      }

      res.send("Podatki uspešno vstavljeni");
    });
  });
  */
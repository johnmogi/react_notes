nodeJs - express mariaDB 

 npm install mariadb cors express joi

0. app.js:
const express = require("express");
const cors = require("cors");
const noteController = require("./controller/note");
const server = express();
server.use(cors()); 
server.use(express.json()); 
server.use("/api", noteController); 
server.listen(3000, () => console.log("Listening on http://localhost:3000"));

0. dal:
https://mariadb.com/kb/en/mysql-command-line-client/
cd C:\xampp2\mysql>bin
mysql -u root -p -h localhost
CREATE DATABASE notesMaria;
** dumped CLI but completed dal:
const mariadb = require("mariadb");
const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "notesmaria",
  connectionLimit: 5,
});
pool.getConnection((err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("We're connected to contacts on mariadb.");
});
function executeAsync(sql) {
  return new Promise((resolve, reject) => {
    pool.query(sql, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}
module.exports = { executeAsync };

0. 

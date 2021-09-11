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
  console.log("We're connected to notes on mariadb.");
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

import mysql from "mysql2";
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'teste',
  password : 'teste',
  database : 'BD3_BIG_DATA'
});
connection.connect();



export default connection;
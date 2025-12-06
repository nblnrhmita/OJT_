import mysql from 'mysql2';


export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_minds',
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to database.");
});


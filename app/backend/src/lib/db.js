import mysql from "mysql2/promise";
import "dotenv/config";

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_minds',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Optional: Test connection (this is async so it won't block export)
db.getConnection()
    .then(connection => {
        console.log("Connected to database.");
        connection.release();
    })
    .catch(err => {
        console.error("Database connection failed:", err);
    });

import express from "express";
import cors from "cors";
import mysql from "mysql2"; // Use import instead of require

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Parse incoming JSON data

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost", // Default MySQL host
  port: 3307, // Default MySQL port
  user: "root", // Your MySQL username
  password: "Mahakal@143", // Your MySQL password
  database: "portfolio", // The database you created
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database!");
});

// POST Route to Insert Data into the Database
app.post("/submit", (req, res) => {
  const { id, name, email, contact } = req.body;

  const query =
    "INSERT INTO users (id, name, email, contact) VALUES (?, ?, ?,?)";
  db.query(query, [id, name, email, contact], (err, result) => {
    if (err) {
      res.status(500).json({ message: "Error inserting data", error: err });
      return;
    }
    res.status(200).json({ message: "Data inserted successfully", result });
  });
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});

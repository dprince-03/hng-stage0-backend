require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Endpoint to return the required information
app.get("/", (req, res) => {
  const response = {
    email: "princeadedayo03@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/yourusername/your-repo",
  };
  res.json(response);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

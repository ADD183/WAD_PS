const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const applicantsRoutes = require("./routes/applicants");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const envPath = path.join(__dirname, ".env");
if (require("fs").existsSync(envPath)) {
  require("dotenv").config({ path: envPath });
}

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.warn("MONGO_URI is not set. Create a .env file based on .env.example.");
} else {
  mongoose
    .connect(mongoUri)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
}

app.use("/api/applicants", applicantsRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Admissions API (GET/PUT) is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

require("dotenv").config({ path: "./backend/.env" });
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const app = express();

app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB Connected"))
.catch(console.error);
console.log("MONGO_URI:", process.env.MONGO_URI);
app.use("/api/auth", require("./routes/auth"));
app.use("/api/chat", require("./routes/chat"));

app.listen(5000, ()=>console.log("Server running"));
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();

const userRoute = require('./routes/users.route');
const authRoute = require('./routes/auth.route');
const postsRoute = require('./routes/posts.route');

mongoose.connect(process.env.MONGO_URL, {
  dbName: process.env.DB_NAME
})
  .then(() => console.log("💳 Connected to MongoDB..."))
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postsRoute);




const PORT = process.env.PORT || 8800;
app.listen(PORT, ()=>{
  console.log("🚀 Backend server is running...");
})
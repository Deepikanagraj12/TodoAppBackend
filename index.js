
const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3002;

app.use(express.json());

const todoRoutes = require("./routes/todos");
app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
})

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req,res) => {
    res.send(`<h1>This is HomePage</h1>`)
})
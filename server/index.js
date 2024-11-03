const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const { connectDB } = require('./db');
const docRoute = require("./routes/docRoute");
const receptRoute = require("./routes/receptRoute");
dotenv.config();

const app = express();


app.use(cors());
app.use(bodyParser.json({extended:true,limit:'32mb'}));
app.use(bodyParser.urlencoded({limit:'32mb',extended:true}));

app.use(express.static(path.join(__dirname, 'build')));

connectDB();

app.use("/api/docs",docRoute);
app.use("/api/recept",receptRoute);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3006,()=>console.log(`Running on Port 3006 `))
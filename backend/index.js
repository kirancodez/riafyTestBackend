require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors')

// Routes
const companyRoute = require("./routes/company");

// Middleware
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json())


// my routes
app.use("/api", companyRoute );

mongoose.connect('mongodb+srv://kiran:qwerty123@stocks.czrc9.mongodb.net/riafy?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
    );

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'))
}

app.listen(process.env.PORT);

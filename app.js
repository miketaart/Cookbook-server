var express = require('express');
var app = express();
var cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var db = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sessionOptions = {secret: "secretCat", cookie: {}};
var options = {useNewUrlParser: true, useUnifiedTopology: true}

require('dotenv').config()

db.connect('mongodb://localhost:27017/familyrecipes', options, (err, connectionInfo) => {
  if (err) console.log("error", errr);
  else console.log("connected to database")
})

app.use(
  cors({
    allowedHeaders: ["authorization", "Content-Type"], // you can change the headers
    exposedHeaders: ["authorization"], // you can change the headers
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false
  })
);

app.use(session(sessionOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.listen(8000, () => {
  console.log("Server is running in port 8000")
});


module.exports = app;

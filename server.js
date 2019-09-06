const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
const api = require("./restAPI/myAPI");
const app = express();


mongoose.connect(
    "mongodb+srv://aj:ajmani@cluster0-c60su.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", api);



http.createServer(app).listen(process.env.PORT || 3000);
console.log("BackEnd Server Is On=", process.env.PORT || 3000);

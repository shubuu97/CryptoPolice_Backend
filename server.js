var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var firebase = require("firebase-admin");
var app = express();
app.use(bodyParser.json());

var serviceAccount = require("./backend-36be7-firebase-adminsdk-w8abz-53553f1538.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://backend-36be7.firebaseio.com"
});

app.use(cors());
var db = firebase.database();
var ref = db.ref("formData");

app.post("/save/formdata", function(req, res) {
  let body = req.body;
  ref.set(body);
  res.status(200).send("Data Saved Sucessfully!");
});

const port = parseInt(process.env.PORT, 10) || 3000;

app.listen(port, function() {
  console.log("CORS-enabled web server listening on port 8080");
});

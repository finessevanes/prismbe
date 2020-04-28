var express = require("express");
var router = express.Router();
const fs = require("fs");
const fileName = "./routes/dataTonic.json";

const readFileAsync = (fileName) => {
  fs.readFile(fileName, (error, data) => {
    if (error) {
      // console.log(error);
    } else {
      try {
        router.get("/", (req, res) => {
          // res.send(JSON.parse(data).transactions);
          // res.send(json(data));
          res.json(data.transactions);
        });
      } catch (error) {
        console.log(error);
      }
    }
  });
};

module.exports = router;

const express = require("express");
const connection = require("./mongo");
const app = express();
app.listen(3000, () => {
  console.log("Listening at port 3000");
});
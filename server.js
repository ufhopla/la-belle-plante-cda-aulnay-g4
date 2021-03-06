/* eslint-env es6 */
/* eslint-disable no-console */
const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(__dirname + "/dist/la-belle-plante"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/la-belle-plante/index.html"));
});
app.listen(process.env.PORT || 8080);

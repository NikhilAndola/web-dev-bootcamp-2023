const express = require("express");

const app = express();

app.use(express.json());

console.dir(app)
app.get("/", (req, res) => {
  res.json({ "name": "nikhil" }).send();
})

app.listen(3001, () => {
  console.log("server started successfully!")
})


console.log("Hello")
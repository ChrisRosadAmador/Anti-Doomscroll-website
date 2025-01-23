const express = require("express");
const app = express();

app.get("/api", (req, res) => {
   res.status(200).send("Server success get request"). 
});

app.listen(5000, () => {
  console.log("server starting on port 5000.");
});

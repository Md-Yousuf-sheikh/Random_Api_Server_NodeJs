const express = require("express");
const cors = require("cors");
const colors = require("colors");
const app = express();
const port = process.env.PORT || 5000;
// middleware require
// routs require
const userRouts = require("./routes/users.routes");

// middleware
app.use(cors());
app.use(express.json());
// app.use(viewCount);

// DataBase connect
app.use("/user", userRouts);

// entry server
app.get("/", (req, res) => {
  res.send("Hello world");
});
// route not exist
app.all("*", (req, res) => {
  res.send("No rout found 404!");
});
// listen
app.listen(port, () => {
  console.log(`Express Random Api model is running ${port} 🛢`.white.bold);
});

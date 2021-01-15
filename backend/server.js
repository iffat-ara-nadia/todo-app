const cors = require("cors");
const mongoose = require("mongoose");
const todosRoute = require("./routes/todosRoute");

const express = require("express");
const app = express();

mongoose
  .connect("mongodb://localhost/todo")
  .then(() => console.log("MongoDB connection is establised successfully..."))
  .catch(err => console.error("couldn't connect to moongoDB...", err));

app.use(express.json());
app.use(cors());

app.use("/api/todos", todosRoute);

const port = process.env.PORT || 3800;
app.listen(port, () => {
  console.log(`App is listening to PORT ${port}....`);
});

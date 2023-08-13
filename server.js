const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 3500;

app.use(cors());
app.use(express.static(path.join(__dirname, "/public")));

app.use("/", require("./routes/root"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    28;
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 not found" });
  } else {
    res.type("txt").send("404 Not found");
  }
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
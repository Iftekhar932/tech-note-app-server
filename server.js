require("dotenv").config();
const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const PORT = process.env.PORT || 3500;
const { logger } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");

console.log(process.env.NODE_ENV);

app.use(cors(corsOptions));

app.use(cookieParser());

app.use(express.json());

app.use(logger);

app.use(express.static(path.join(__dirname, "public")));

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

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

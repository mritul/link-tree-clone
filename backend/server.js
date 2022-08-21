const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
dotenv.config();

//<-------------------MIDDLEWARE STARTS----------------->
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(
  session({
    secret: `${process.env.SESSION_SECRET}`,
    saveUninitialized: false,
    resave: false,
  })
);
app.use(cookieParser(`${process.env.SESSION_SECRET}`));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passportConfig")(passport);

app.use("/", require("./routes/base"));
app.use("/api", require("./routes/api"));

//<-------------------MIDDLEWARE ENDS----------------->

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("Database successfully connected");
  app.listen(process.env.PORT, () => {
    console.log("Server up and running");
  });
});

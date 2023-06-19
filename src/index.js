const express = require("express");
const app = express();
const connect = require("./config/db.js");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/index.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

const { UserRepository } = require("./repository/index.js");
const LikeService = require("./service/like-service.js");
const passport = require("passport");
const userRepo = new UserRepository();
const likeservice = new LikeService();
const { passportAuth } = require("./config/jwt-middleware.js");

app.use(passport.initialize());
passportAuth(passport);

const PORT = 3000;
app.listen(PORT, async () => {
  console.log(`server is started at ${PORT}`);
  await connect();
  console.log("mongodb connected");
});

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
const userRepo = new UserRepository();
const likeservice = new LikeService();

const PORT = 3000;
app.listen(PORT, async () => {
  console.log(`server is started at ${PORT}`);
  await connect();
  console.log("mongodb connected");
  // const user = await userRepo.create({
  //   email: "komal@ajd.com",
  //   password: "363637",
  //   name: "komal",
  // });
  // const user = await userRepo.getAll();
  // await likeservice.toggleLike("648920565a163af69feed222", "Tweet", user[0].id);
  // await likeservice.toggleLike("648920565a163af69feed222", "Tweet", user[1].id);
});

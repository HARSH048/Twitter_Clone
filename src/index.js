const express = require("express");
const app = express();
const connect = require("./config/db.js");
const bodyParser = require("body-parser");
const TweetService = require("./service/tweet-service.js");
const apiRoutes = require("./routes/index.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

const PORT = 3000;
app.listen(PORT, async () => {
  console.log(`server is started at ${PORT}`);
  await connect();
  console.log("mongodb connected");
  let service = new TweetService();
  // const tweet = await service.create({
  //   content: "hello #harsh this side and #KALA am doing #coding",
  // });
  // console.log(tweet);
});

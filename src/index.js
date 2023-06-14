const express = require("express");
const app = express();
const connect = require("./config/db.js");
const TweetService = require("./service/tweet-service.js");

const PORT = 3000;
app.listen(PORT, async () => {
  console.log(`server is started at ${PORT}`);
  await connect();
  console.log("mongodb connected");
  let service = new TweetService();
  const tweet = await service.create({
    content: "i am #excited and going to be #fun what are you doing #harsh",
  });
  console.log(tweet);
});

const express = require("express");
const app = express();
const connect = require("./config/db.js");
const TweetRepository = require("./repository/tweeet-repository.js");
const Comment = require("./models/comment.js");

const repo = new TweetRepository();

const PORT = 3000;
app.listen(PORT, async () => {
  console.log(`server is started at ${PORT}`);
  await connect();
  console.log("mongodb connected");
  //const tweet = await Tweet.create({
  //   content: "tweet 2",
  //   //userEmail: "a@bc.com",
  // // });
  // const tweet = await Tweet.findById("647d52a31034e84404ae29dd");
  // const tweet = await repo.create({
  //   content: "using external",
  //   userEmail: "as@d.com",
  // });
  // console.log(tweet);
  // const comment = await Comment.create({
  //   content: "i think first comment",
  //   userEmail: "snd@nd.com",
  // });
  // tweet.comments.push(comment);
  // await tweet.save();
  // const tweet = await repo.getAll(2, 4);
  // console.log(tweet[0].contentwithEmail);
  // console.log(
  //   (tweet[0].contentwithEmail = ["hello ji aap kaise ho", "mdsmf@dmfd.com"])
  // );

  const tweet = repo.create({
    content: "this is second in hooks tweet",
    userEmail: "dnd@md.com",
  });
});

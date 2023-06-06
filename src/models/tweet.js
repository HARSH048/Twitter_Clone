const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

tweetSchema
  .virtual("contentwithEmail")
  .get(function process() {
    return `${this.content} created  by ${this.userEmail}`;
  })
  .set(function process(content, userEmail) {
    this.content = content;
    this.userEmail = userEmail;
  });

tweetSchema.post("save", function (next) {
  console.log("inside hooks");
  this.content = this.content + ".....";
  // next();
});

const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;

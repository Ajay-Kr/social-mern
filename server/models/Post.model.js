const mongoose = require('mongoose');

const PostSchama = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', PostSchama);

module.exports = Post;

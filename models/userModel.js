const mongoose = require('mongoose');

const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
      default:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDoKp0wum3Z8G1cQXa7j9UtFbpTYqG5YhUcg&s',
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userModel);

module.exports = User;

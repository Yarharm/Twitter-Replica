const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: { type: String, require: true },
  mediaPath: { type: String, required: true },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
});

mongoose.model('Post', postSchema);

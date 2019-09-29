import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model('Post', PostSchema);
export default Post;

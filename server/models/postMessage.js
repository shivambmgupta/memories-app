import mongoose from 'mongoose';

const postMessage = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Posts  = mongoose.model('postMessage', postMessage)
export default Posts;  
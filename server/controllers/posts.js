import  mongoose from 'mongoose';
import Posts from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await Posts.find();
        res.status(200).json(postMessages);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error});
    }
}

export const createPost = async (req, res) => {
    const body = req.body;
    const newPost = new Posts(body);
    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: 'Unable to create posts!'});
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send({message: 'No such post!'})
    const updatedPost = await Posts.findByIdAndUpdate(_id, { ...post, _id}, {new: true});
    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({message: 'No such post!'})
    await Posts.findByIdAndDelete(id);
    res.json({ message: 'Post Deleted'});
}

export const likePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({message: 'No such post!'})
    const post = await Posts.findById(id);
    const updatedPost = await Posts.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true});
    res.json(updatedPost);
}
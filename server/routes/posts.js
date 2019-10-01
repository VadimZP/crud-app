import "babel-polyfill";
import express from "express";


import Post from "../models/post";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await Post.find();
        console.log("TCL: data", data);
        res.status(200).send({ data });
    } catch (error) {
        throw new Error('Something went wrong in "/posts" get request', error)
    }
})

router.post('/', async (req, res) => {
    try {
        const { text, author } = req.body;
        const post = new Post({
            text,
            author
        });

        const addedPost = await post.save();
        res.status(201).send({ data: addedPost });
    } catch (error) {
        throw new Error('Something went wrong in "/posts" get request', error)
    }
})

export default router;
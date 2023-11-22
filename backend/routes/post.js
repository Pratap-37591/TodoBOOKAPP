import express from 'express';
import { createPost, deletePost, getPost, updatePost } from '../controllers/post.js';

const postrouter = express.Router();

postrouter.get('/getPost', getPost);
postrouter.post('/createPost', createPost);
postrouter.delete('/deletePost/:id', deletePost);
postrouter.put('/updatePost/:id', updatePost)

export default postrouter;
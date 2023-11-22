import express from 'express';
import cors from 'cors';
import postrouter from './routes/post.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", postrouter);

app.listen(8800, () => {
    console.log('Connected to backend!')
})
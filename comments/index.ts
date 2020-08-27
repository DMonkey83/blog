import express from 'express';
import bodyParser from 'body-parser';
import {randomBytes} from "crypto";
import cors from 'cors'

const app = express();
app.use(bodyParser.json())
app.use(cors());
const port = 4001;

interface IComment {
    id: string;
    content: string;
}

const commentsByPostId: {[name: string]: IComment[]} = {}

app.get("/posts/:id/comments", (req, res) => {
    res.send(commentsByPostId[req.params.id] || [])
})
app.post("/posts/:id/comments", (req, res) => {
    const id = randomBytes(4).toString('hex');
    const {content} = req.body;

    const comments = commentsByPostId[req.params.id] || [];

    comments.push({id: id, content})

    commentsByPostId[req.params.id] = comments
    res.status(201).send(comments)
})
app.listen(port, () => {
    console.log(`server started at port ${port}`)
})

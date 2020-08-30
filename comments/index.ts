import express from 'express';
import bodyParser from 'body-parser';
import {randomBytes} from "crypto";
import cors from 'cors'
import axios from 'axios'
import {IComment} from "../typesInterfaces";

const app = express();
app.use(bodyParser.json())
app.use(cors());
const port = 4001;
const eventsPort = 4005;


const commentsByPostId: {[name: string]: IComment[]} = {}

app.get("/posts/:id/comments", (req, res) => {
    res.send(commentsByPostId[req.params.id] || [])
})
app.post("/posts/:id/comments", async (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const {content} = req.body;

    const comments = commentsByPostId[req.params.id] || [];

    comments.push({id: commentId, content, postId: req.params.id})

    commentsByPostId[req.params.id] = comments

    await axios.post(`http://localhost:${eventsPort}/events`, {
        type: 'CommentCreated',
        data: {
            id: commentId,
            content,
            postId: req.params.id
        }
    })

    res.status(201).send(comments)
})
app.post('/events', (req, res) => {
    console.log('Event Received:', req.body.type)

    res.send({})
})
app.listen(port, () => {
    console.log(`server started at port ${port}`)
})

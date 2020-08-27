import express from 'express'
import bodyParser from 'body-parser'
import {randomBytes} from "crypto";
import cors from 'cors';

const app = express();
app.use(bodyParser.json())
app.use(cors())
const port = 4000;

interface IPost {
    title: string,
    id: string
}

const posts: { [name: string]: IPost } = {};

app.get("/posts", (req, res) => {
    res.send(posts)
})
app.post("/posts", (req, res) => {
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;

    posts[id] = {
        id, title
    }
    res.status(201).send(posts[id])
})
app.listen(port, () => {
    console.log(`server started at port ${port}`)
})
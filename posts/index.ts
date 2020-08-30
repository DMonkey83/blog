import express from 'express'
import bodyParser from 'body-parser'
import {randomBytes} from "crypto";
import cors from 'cors';
import axios from 'axios'
import {IPost} from "../typesInterfaces";

const app = express();
app.use(bodyParser.json())
app.use(cors())
const port = 4000;
const eventsPort = 4005;

const posts: { [name: string]: IPost } = {};

app.get("/posts", (req, res) => {
    res.send(posts)
})
app.post("/posts", async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;

    posts[id] = {
        id, title
    }
    await axios.post(`http://localhost:${eventsPort}/events`, {
        type: 'PostCreated',
        data: {
            id, title
        }
    })

    res.status(201).send(posts[id])
})

app.post('/events', (req, res) => {
    console.log('Event Received:', req.body.type)

    res.send({})
})

app.listen(port, () => {
    console.log(`server started at port ${port}`)
})
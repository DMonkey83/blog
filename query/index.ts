import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import {IComment, IFullPost, IPost} from "../typesInterfaces";

const app = express();
const port = 4002

const posts: {[id: string]: IFullPost} = {};

app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
    res.send(posts);
})

app.post('/events', (req, res) => {
    const {type, data} = req.body;

    if (type === 'PostCreated'){
        const { id, title } = data as IPost

        posts[id] = {id, title, comments: [] }
    }
    if (type === 'CommentCreated'){
        const {id, content, postId} = data as IComment

        const post = posts[postId]

        post.comments.push({id, content, postId})
    }

    console.log('posts', posts)

    res.send({});
})

app.listen(4002, () => {
    console.log(`Listening to port ${port}`)
});
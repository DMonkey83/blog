import React, {FC, useEffect, useState} from 'react'
import {Container, Post, Title} from './PostStyles';
import {getPosts} from "../../helpers/apiCalls";
import {CommentCreator} from "../CommentCreator/CommentCreator";
import {Comments} from "../comments/Comments";

interface IPosts {

}

interface IPost {
    id: string;
    title: string;
}

export const Posts: FC<IPosts> = () => {
    const [posts, setPosts] = useState({});
    useEffect(() => {
        getPostList();

    }, [])
    const getPostList = async () => {
        const data = await getPosts();
        setPosts(data);
    };
    console.log(posts)
    return (
        <Container>
            {posts && Object.values(posts).map(item => {
                return (
                    <Post key={(item as IPost).id}>
                        <Title>Title: {(item as IPost).title}</Title>
                        <hr/>
                        <Comments id={(item as IPost).id}/>
                        <CommentCreator id={(item as IPost).id} />
                    </Post>
                )
            })}
        </Container>
    )
}

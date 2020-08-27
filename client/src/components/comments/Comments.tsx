import React, {FC, useEffect, useState} from 'react'
import {Container} from './CommentsStyles';
import {getComments, getPosts} from "../../helpers/apiCalls";

interface IComments {
    id: string;
}

interface IComment {
    id: string;
    content: string;
}

export const Comments: FC<IComments> = ({id}) => {
    const [comments, setComments] = useState({})
    useEffect(() => {
        getCommentList()
    }, [])
    const getCommentList = async () => {
        const data = await getComments(id);
        setComments(data);
    };
    return (
        <Container>
            {comments && Object.values(comments).map(item => {
                return (
                    <div>{(item as IComment).content}</div>
                )
            })}
        </Container>
    )
}


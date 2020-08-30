import React, {FC} from 'react'
import {Container, Comment} from './CommentsStyles';
import {IComment} from "../../../../typesInterfaces";

interface IComments {
    comments: IComment[];
}

const NOT_ALLOWED_WORD = 'orange'

export const Comments: FC<IComments> = ({comments}) => {
    return (
        <Container>
            {comments && Object.values(comments).map(item => {
                return (
                    <Comment hasFlag={item.content.includes(NOT_ALLOWED_WORD)}>{(item as IComment).content}</Comment>
                )
            })}
        </Container>
    )
}


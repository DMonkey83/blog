import React, {FC, useState} from 'react'
import {Container, InputContainer} from './CommentCreatorStyles';
import {createComment} from "../../helpers/apiCalls";

interface ICommentCreator {
    id: string
}

export const CommentCreator: FC<ICommentCreator> = ({id}) => {
    const [value, setValue] = useState<string>('');

    const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        setValue(event.currentTarget.value);
    }

    const handleCommentCreate = async(event: React.KeyboardEvent<HTMLDivElement>) => {
        event.preventDefault()
        if (event.key === 'Enter') {
            await createComment(id, value);
            setValue('')
        }
    }

    return (
        <Container>
            <InputContainer
                tabIndex={0}
                onKeyUp={handleCommentCreate}
            >
                <label htmlFor='comment'>Create comment</label>
                <input type='text' value={value} placeholder='type here...'
                       onChange={handleCommentChange}/>
            </InputContainer>
        </Container>
    )
}

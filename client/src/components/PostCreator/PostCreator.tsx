import React, {FC, useState} from 'react';
import {Button, ButtonContainer, Container, InputContainer, Title} from './PostCreatorStyles';
import {createPost} from "../../helpers/apiCalls";

interface IPostCreator {

}

export const PostCreator: FC<IPostCreator> = () => {
    const [postValue, setPostValue] = useState<string>('');

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setPostValue(event.currentTarget.value)
    }

    const handleCancel = () => {
        setPostValue('')
    }

    const handleCreate = async(event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        await createPost(postValue);
        setPostValue('')
    }

    return (
        <Container>
            <Title>Create Post</Title>
            <InputContainer>
               <label htmlFor={'post-title'}>Title</label>
                <input placeholder='type your title here...' id='post-title' type='text' value={postValue} onChange={handleValueChange}/>
            </InputContainer>
            <ButtonContainer>
                <Button onClick={handleCancel} main={false} type='button'>Cancel</Button>
                <Button onClick={handleCreate} main type='button'>Create</Button>
            </ButtonContainer>
        </Container>
    )
}

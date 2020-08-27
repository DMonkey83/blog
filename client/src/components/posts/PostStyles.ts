import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

export const Post = styled.div`
    box-sizing: border-box;
    padding: 10px 15px;
    flex-basis: 400px; 
    min-width: 350px;
    max-width: 600px;
    flex-grow: 1;
    border-radius: 6px;
    border: 1px solid lightgray;
    height: auto;
`

export const Title = styled.div``
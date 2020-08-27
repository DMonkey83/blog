import axios from 'axios';

const POST_PORT = '4000'
const COMMENT_PORT = '4001'

const BASE_URL = `http://localhost:`

export const createPost = (value: string) => {
    axios.post(`${BASE_URL}${POST_PORT}/posts`, {
        title: value
    })
}

export const getPosts = async() => {
    const value = await axios.get(`${BASE_URL}${POST_PORT}/posts`)
    return value.data
}

export const createComment = (id: string, value: string) => {
    axios.post(`${BASE_URL}${COMMENT_PORT}/posts/${id}/comments`, {
        content: value
    })
}

export const getComments = async(id: string) => {
    const value = await axios.get(`${BASE_URL}${COMMENT_PORT}/posts/${id}/comments`)
    return value.data
}

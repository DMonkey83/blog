export interface IPost {
    title: string,
    id: string
}

export interface IComment {
    id: string;
    content: string;
    postId: string;
}

export interface IFullPost {
    id: string;
    title: string;
    comments: IComment[]
}
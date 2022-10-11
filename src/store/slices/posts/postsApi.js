import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    'posts/fetchposts',
    async function() {
        const responsePosts = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=100')
        const dataPosts = responsePosts.data
        const responseComments = await axios.get('https://jsonplaceholder.typicode.com/comments')
        const dataComments = responseComments.data
    
        
        const data = dataPosts.map(el =>({
            id: el.id,
            username: el.title.slice(0, el.title.indexOf(' ')),
            disc: el.title.slice(el.title.indexOf(' ') + 1),
            img: el.url,
            comments: dataComments.filter(comment => comment.postId === el.id)
                                  .map(comment => ({
                                    id:comment.id,
                                    body: comment.body,
                                    username: comment.name.slice(0, comment.name.indexOf(' '))
                                  }))
        }))
        return data
    }
)

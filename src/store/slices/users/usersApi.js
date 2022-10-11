import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function() {
        const responseUsers = await axios.get('https://jsonplaceholder.typicode.com/users')
        const dataUsers = responseUsers.data
        const responsePosts = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=500')
        const dataPosts = responsePosts.data
        // console.log(dataUsers);
        // console.log(dataPosts);
       
        
    const data = dataUsers.map(el => ({
        id: el.id,
        name: el.name,
        email: el.email.toLowerCase(),
        username: el.username.toLowerCase(),
        password: el.address.city.toLowerCase(),
        disc: el.company.catchPhrase,
        posts: [
            ...dataPosts
            .filter(post => post.albumId === el.id)
            .map(post => ({
                id: post.id,
                username: el.username.toLowerCase(),
                disc: post.title.slice(post.title.indexOf(' ') + 1),
                img: post.url,
                comments: []
            }))
        ]

    })) 
        return data
    }
)

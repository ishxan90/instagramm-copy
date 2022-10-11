import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsApi";


const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        addComment(state, {payload}){
            return [
                ...state.map(el =>{
                    if(el.id === payload.id) {
                        return {
                            ...el,
                            comments: [
                                ...el.comments,
                                {
                                    id: new Date().getTime().toString(),
                                    username: payload.username,
                                    body: payload.body
                                }
                            ]
                        }
                    }
                    return el
                })
            ]
        },

        deleteComment(state, {payload}) { 
            return [
                ...state.map(el => {
                    if(el.id === payload.postId) {
                        return  {
                            ...el,
                            comments: [
                                ...el.comments.filter(comment => comment.id !== payload.commentId)
                            ]
                        }    
                    }
                    return el
                })    
            ]
        }
    },

    extraReducers: {
        [fetchPosts.pending]: (state, {payload}) => {
        },
        [fetchPosts.fulfilled]: (state, {payload}) => {
            return [
             ...state,
             ...payload
            ]
        },
        [fetchPosts.rejected]: (state, {payload}) => {
            console.log('error');
        }
    }
})

export const selectPosts = (state) => state.posts

export const postsReducer = postsSlice.reducer 

export const {addComment, deleteComment} = postsSlice.actions


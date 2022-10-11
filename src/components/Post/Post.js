import React from 'react'
import './Post.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import InputComment from '../InputComment/InputComment'
import Comments from '../Comments/Comment'
import { deleteComment } from '../../store/slices/posts/postSlice'
import { useDispatch } from 'react-redux'

const Post = ({username, img, disc, comments, id}) => {

    const dispatch= useDispatch()

    return (
        <div className='post'>
            <div className='post-header'>
                <NavLink to='/profile'>
                    <img alt='post-author' src={img}/>
                    <span>{username}</span>
                </NavLink>
            </div>
            <img alt='post-img' src={img}/>
            <div className='post-btns'>
                <AiOutlineHeart size='30px' className='heart-icon' />
                <FaRegComment size='28px' className='comment-icon' />
            </div>
            <div className='post-footer'>
                <div className='like-count'>
                    <b>{username.length * 9} отметок "Нравится"</b>
                </div>
                <div className='description'>
                    <b>{username}</b> {disc}...
                </div>
                <div className='later'>
                    {username.length} дня назад
                </div>
                {
                    comments.map(el => 
                       <Comments key={el.id}
                                 username={el.username}
                                 body={el.body}
                                 dispatch={dispatch}
                                 deleteComment={deleteComment}
                                 postId={id}
                                 commentId={el.id}   
                       />
                    )
                }
                <InputComment id={id}/>
            </div>
        </div>
    )
}

export default Post
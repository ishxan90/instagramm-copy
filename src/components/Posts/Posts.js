import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchPosts } from '../../store/slices/posts/postsApi'
import { selectPosts } from '../../store/slices/posts/postSlice'
import { selectSearch } from '../../store/slices/search/searchSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import Post from '../Post/Post'
import './Posts.css'

const Posts = () => {
  const posts = useSelector(selectPosts)
  const search = useSelector(selectSearch)
  const dispatch = useDispatch()

  const {currentUser} = useSelector(selectUsers)
  const navigate = useNavigate()

  useEffect(()=> {
    if(!currentUser.id){
      navigate('/')
    }
  }, [currentUser])
  

  useEffect(() => {
    if(!posts.length){
      dispatch(fetchPosts())
    } 
  }, [dispatch])

  return (
    <div className='posts'>
      <div className='story-block'>
        {
            posts.map(el => (
              <div className='story' key={el.id}>
                <img src={el.img} alt={'asa'}/>
                <span>{el.username}</span>
              </div>
              
            ))
        }
      </div>
      {
          posts.filter(el => el.username.toLowerCase().indexOf(search.toLowerCase()) !== -1).map(el => (
            <Post 
              key={el.id}
              id={el.id}
              username={el.username}
              img={el.img}
              disc={el.disc}
              comments={el.comments}
              />  
          ))
      }
    </div>
  )
}

export default Posts
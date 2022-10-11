import React, { useEffect } from 'react'
import './Profile.css'
import { IoAppsSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
  const {currentUser} = useSelector(selectUsers)
  const navigate = useNavigate()

  useEffect(()=> {
    if(!currentUser.id){
      navigate('/')
    }
  }, [currentUser])

  return (
    <div className='profile'>
      <div className='profile-container'>
        <div className='profile-header'>
          <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' alt='img' className='prof-img' />
          <div className='prof-info'>
            <div className='prof-nickname'>
              {currentUser.username}
            </div>
            <div className='prof-followers'>
              <span><b>{currentUser.name?.length}</b> публикации</span>
              <span><b>{currentUser.disc?.length}</b> подписчика</span>
              <span><b>{currentUser.disc?.length * 6}</b> подписок</span>
            </div>
            <div className='prof-name'>
              <span><b>{currentUser.name}</b></span>
              <span>{currentUser.disc}</span>
            </div>
          </div>
        </div>
        <div className='public'>
          <div className='public-header'>
            <div>
              <IoAppsSharp className='app-icon' />публикации
            </div>
          </div>
          <div className='public-gallery'>
              {
                currentUser.posts?.map(el => 
                  <div key={el.id}>
                    <img src={el.img} alt='img' />
                  </div>)
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
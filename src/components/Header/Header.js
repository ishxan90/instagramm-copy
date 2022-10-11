import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { RiHome2Line } from 'react-icons/ri'
import { TbBrandMessenger } from 'react-icons/tb'
import { BiMessageSquareAdd, BiSearch } from 'react-icons/bi'
import SearchInput from '../SearchInput/SearchInput'
import { useDispatch } from 'react-redux'
import { logOut } from '../../store/slices/users/usersSlice'


const Header = ({search}) => {
  const dispatch = useDispatch()

  return (
    <div className='header'>
      <NavLink to='/main'>
      <div className='header-logo'>
        <img alt='logo' src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png' />
      </div>
      </NavLink>
      <div className='header-search'>
        <BiSearch color='grey' size='21px' className='search-icon' />
        <SearchInput search={search} />
      </div>
      <div className='header-links'>
        <NavLink to='/main'><RiHome2Line size='25px' /></NavLink>
        <NavLink to='/main/messages'><TbBrandMessenger size='25px' /></NavLink>
        <NavLink to='/main/newpost'><BiMessageSquareAdd size='25px' /></NavLink>
        <NavLink to='/main/profile'>
          <img className='profile-img' alt='profile-img' src='https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif' />
        </NavLink>
        <span className='logOut'
          onClick={() => dispatch(logOut())}>
          Log Out
        </span>
      </div>
    </div>
  )
}

export default Header
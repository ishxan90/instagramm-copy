import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchUsers } from '../../store/slices/users/usersApi'
import { selectUsers, toggleCurrentUser } from '../../store/slices/users/usersSlice'
import './Login.css'

const Login = () => {
  const dispatch = useDispatch()
  const formRef = useRef(null)
  const {currentUser} = useSelector(selectUsers)
  const {data} = useSelector(selectUsers)
  const navigate = useNavigate()

useEffect(()=> {
  if(!data.length){
    dispatch(fetchUsers())
  }
}, [dispatch])

const submitHandler = (e) => {
  e.preventDefault()
  if(formRef.current[0].value && formRef.current[1].value){
    dispatch (toggleCurrentUser({
      login: formRef.current[0].value,
      password: formRef.current[1].value,
    }))
  }
    formRef.current[0].value = ''
    formRef.current[1].value = ''
}

useEffect(()=> {
  if(!!currentUser.id){
    navigate('/main')
  }
}, [currentUser])


  return (
    <div className='login'>
        <div className='login-block'>
            <div className='login-logo'>
                <img alt='logo' src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png' />
            </div>
            <div className='login-reg'>
              <form ref={formRef} onSubmit={submitHandler}>
                <input defaultValue={'bret'} placeholder='Телефон, имя пользователя или эл.адрес' type='text' />
                <input defaultValue={'gwenborough'} placeholder='Пароль' type='text' />
                <button className='login-btn'>Войти</button>
              </form> 
            </div>
        </div>
    </div>
  )
}

export default Login
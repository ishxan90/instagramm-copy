import React from 'react'
import './Messenges.css'

const Messenges = () => {
  return (
    <div className='mess'>
      <div className='mess-header'>
          <img alt='img' src='https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif'/>
          <span>name</span>
      </div>
      <div className='mess-disp'></div>
      <div className='mess-input'>
          <input type='text' placeholder='Напишите сообщение...'/>
          <button>Отправить</button>
      </div>
    </div>
  )
}

export default Messenges
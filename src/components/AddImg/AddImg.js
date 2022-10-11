import React from 'react'
import './AddImg.css'
import {GrGallery} from 'react-icons/gr'

const AddImg = () => {
  return (
    <div className='add-img'>
      <h1>Создание публикации</h1>
      <GrGallery size='60px' className='gall-icon' />
      <button>Выбрать файл с компьютера</button>
    </div>
  )
}

export default AddImg
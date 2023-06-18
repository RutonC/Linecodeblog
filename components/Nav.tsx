import React from 'react'
import {AiOutlineHome, AiOutlineInfoCircle, AiOutlineFolderOpen, AiOutlineContacts} from 'react-icons/ai'
import '../styles/navinho.css'


const Nav = () => {
  return (
    <nav className='navinhos'>
      <a href='/'><AiOutlineHome/></a>
      <a href='#'><AiOutlineInfoCircle/></a>
      <a href='#'><AiOutlineFolderOpen/></a>
      <a href='#'><AiOutlineContacts/></a>
      </nav>
  )
}

export default Nav
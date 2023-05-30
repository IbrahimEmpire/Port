import React from 'react'
import {HiMail} from 'react-icons/hi'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header_social'>
       <a href='https://github.com/IbrahimEmpire' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
       <a href='mailto:ibu8189914744@gmail.com' rel="noopener noreferrer" ><HiMail /></a>
           </div>
  )
}

export default HeaderSocial
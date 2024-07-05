import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import { Link } from 'react-router-dom'

const LayoutHeader = () => {
  return (
    <>
     <header className='bg-blue-700 pt-[20px] pb-[15px]'>
        <div className="container">
            <div className='header flex justify-between items-center'>
                <div className='flex items-center'>
                <Link to={'/'} className='text-[36px]  text-[#FFFFFF]'>Pressa</Link>
                <form className='for ml-[110px] w-[100%] '>
                <input className='pl-3 rounded-md p-1 w-[100%] max-w-[180px]' placeholder='izlash' type="text" />
                </form>
                </div>
                <div className='flex items-center '>
                <Link to={'/about'} className='text-white pr-[45px] pl-2 hover:cursor-pointer text'>Biz haqimizda</Link>
                <Link to={'/savollar'} className='text-white pr-[45px] hover:cursor-pointer text'>Savol va javoblar</Link>
                <button className='btn text-white bg-[#FE8B37] pt-2 pb-2 w-[110px] text-center ml-[10px] rounded'>+ E’lon berish</button>
            <GiHamburgerMenu className='ham-btn text-white w-[30px] h-[30px]'/>  
                </div>
            </div>
        </div>
     </header>
    </>
  )
}

export default LayoutHeader;
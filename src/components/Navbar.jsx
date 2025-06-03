import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi' // <- Added

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)

  return (
<div className='fixed top-0 z-50 w-full flex items-center justify-between text-sm py-3 px-5 backdrop-blur-md shadow-md'>
      <img onClick={()=>navigate('/')} className='w-20 cursor-pointer' src={logo} alt="" />
      <ul className='hidden md:flex item-start gap-5 font-medium text-lg text-white'>
        <NavLink to='/'>
                <li className='py-1'>
                    HOME
                </li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/work'>
                <li className='py-1'>
                    WORKS
                </li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>
                    ABOUT
                </li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>
                    CONTACT
                </li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
      </ul>

      {/* ----------- MOBILE MENU ICON ----------- */}
      <div className='w-full flex items-center justify-end md:hidden'>
        {!showMenu && <FiMenu className='w-6 h-6 cursor-pointer' onClick={() => setShowMenu(true)} />}
      </div>


      {/*-----------MOBILE_MENU-----------*/}
      <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-primary text-primary transition-all`}>
        <div className='flex items-center justify-between px-5 py-6'>
          {/* <img className='w-36' src={logo} alt="" /> */}
          <div></div>
          <FiX className='w-7 h-7 cursor-pointer' onClick={() => setShowMenu(false)} />
        </div>
        <ul className='flex flex-col items-center gap-2 px-5 text-lg font-medium'>
          <div onClick={() => setShowMenu(false)}>
            <NavLink to='/'>
              <p className='px-4 py-2 rounded inline-block'>HOME</p>
            </NavLink>
          </div>
          <div onClick={() => setShowMenu(false)}>
            <NavLink to='/about'>
              <p className='px-4 py-2 rounded inline-block'>ABOUT</p>
            </NavLink>
          </div>
          <div onClick={() => setShowMenu(false)}>
            <NavLink to='/work'>
              <p className='px-4 py-2 rounded inline-block'>WORK</p>
            </NavLink>
          </div>
          <div onClick={() => setShowMenu(false)}>
            <NavLink to='/contact'>
              <p className='px-4 py-2 rounded inline-block'>CONTACT</p>
            </NavLink>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

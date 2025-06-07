import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi' // <- Added

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)

  return (
<div className='fixed top-0 z-50 w-full flex items-center justify-between text-sm py-3 px-5 backdrop-blur-sm shadow-md'>
      <img onClick={()=>navigate('/')} className='w-20 cursor-pointer' src={logo} alt="" />
      <ul className='hidden md:flex item-start gap-8 font-medium text-lg text-primary'>
            <NavLink to='/about'>
                <li className='py-1'>
                    I
                </li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/work'>
                <li className='py-1'>
                    WORK
                </li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>
                    HERE
                </li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
      </ul>

      {/* ----------- MOBILE MENU ICON ----------- */}
      <div className='w-full flex items-center justify-end md:hidden'>
        {!showMenu && <FiMenu className='w-6 h-6 cursor-pointer text-primary ' onClick={() => setShowMenu(true)} />}
      </div>


      {/*-----------MOBILE_MENU-----------*/}
      <div className={`fixed inset-0 z-40 bg-primary h-screen text-black transition-transform duration-300 transform ${showMenu ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className='flex items-center justify-between px-5 py-6'>
          {/* <img className='w-36' src={logo} alt="" /> */}
          <div></div>
          <FiX className='w-7 h-7 cursor-pointer' onClick={() => setShowMenu(false)} />
        </div>
        <ul className='flex flex-col items-center gap-2 px-5 text-lg font-medium'>
          <div onClick={() => setShowMenu(false)}>
            <NavLink to='/about'>
              <p className='px-4 py-2 rounded inline-block'>I</p>
            </NavLink>
          </div>
          <div onClick={() => setShowMenu(false)}>
            <NavLink to='/work'>
              <p className='px-4 py-2 rounded inline-block'>WORK</p>
            </NavLink>
          </div>
          <div onClick={() => setShowMenu(false)}>
            <NavLink to='/contact'>
              <p className='px-4 py-2 rounded inline-block'>HERE</p>
            </NavLink>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

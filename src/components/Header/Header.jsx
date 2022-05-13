import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Username from './Username'
import config from '../../assets/images/sustainable.png'

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='header__content'>
                    <Navbar />
                    <Username />
                </div>
            </header>
            
            <Outlet />

            <img src={config} alt='' />
        </>
    )
}

export default Header
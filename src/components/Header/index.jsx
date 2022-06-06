import React from 'react'
import { Outlet } from 'react-router-dom'

import { animCircle } from '../../helpers/animCircle'

import settingImg from '../../assets/images/setting.png'
import Navbar from './components/Navbar'
import Username from './components/Username'
import './style.scss'

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

            <img 
                className='settingImg' 
                src={settingImg} 
                onLoad={animCircle}
                alt=''
            />
        </>
    )
}

export default Header
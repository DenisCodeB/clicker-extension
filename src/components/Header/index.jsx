import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Username from './Username'
import settingImg from '../../assets/images/setting.png'
import './header.scss'
import { animCircle } from '../helpers/animCircle'

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
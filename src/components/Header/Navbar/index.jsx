import React, { useState, useEffect } from 'react'
import ListItem from './ListItem'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    const menu = [
        {
            id: 1,
            path: '/',
            name: 'Menu',
            className: 'navbar__item'
        }
    ]
    const clicker = {
        id: 2,
        path: '/clicker',
        name: '/Clicker',
        className: 'navbar__item'
    }
    const clickerStart = {
        id: 3,
        path: '/clicker-start',
        name: '/Started',
        className: 'navbar__item'
    }
    const data = {
        id: 4,
        path: '/data',
        name: '/Data',
        className: 'navbar__item'
    }
    const location = useLocation()
    const [listConfig, setListConfig] = useState(menu)

    useEffect(() => {
        setListConfig(prev => {
            if (location.pathname === '/clicker') {
                return [...prev, clicker]
            } else if (location.pathname === '/clicker-start') {
                return [clickerStart]
            } else if (location.pathname === '/data') {
                return [...prev, data]
            } else return menu
        })
    }, [location.pathname])

    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                {
                    listConfig.map(item => (
                        <ListItem key={item.id} path={item.path} name={item.name} className={item.className} />
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar
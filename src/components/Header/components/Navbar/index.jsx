import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import ListItem from './components/ListItem'

const Navbar = () => {
    const location = useLocation()
    // Define database for correct display
    // of navbar
    const menu = [
        {
            id: 1,
            path: '/',
            name: 'Menu',
            className: 'navbar__item'
        }
    ]
    const choice = {
        id: 2,
        path: '/choice',
        name: '/Choice',
    }
    const clicker = {
        id: 3,
        path: '/clicker',
        name: '/Clicker'
    }
    const clickerStart = {
        id: 4,
        path: '/clicker-start',
        name: '/Started'
    }
    const data = {
        id: 5,
        path: '/data',
        name: '/Data'
    }
    const [listConfig, setListConfig] = useState(menu)

    useEffect(() => {
        setListConfig(prev => {
            if (location.pathname === '/clicker') {
                return [...prev, clicker]
            } else if (location.pathname === '/clicker-start') {
                return [menu[0], clickerStart]
            } else if (location.pathname === '/data') {
                return [...prev, data]
            } else if (location.pathname === '/choice') {
                return [...prev, choice]
            } else return menu
        })
    }, [location.pathname])

    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                {
                    listConfig.map(item => (
                        <ListItem key={item.id} path={item.path} name={item.name} />
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar
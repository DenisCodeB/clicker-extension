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
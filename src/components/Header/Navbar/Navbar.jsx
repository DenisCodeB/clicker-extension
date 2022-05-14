import React from 'react'
import ListItem from './ListItem'

const Navbar = () => {
    const listConfig = [
        {
            id: 1,
            path: '/',
            name: 'Menu',
            className: 'navbar__item'
        }
    ]
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
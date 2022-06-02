import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Page from '../../components/Page'
import Option from '../../components/Option'
import click from '../../assets/images/clicker.png'
import './menu.scss'

const Menu = () => {
    // Define database for menu page options
    // and set right routing
    const optionConfig = [
        {
            key: 1,
            name: 'Clicker',
            src: click,
            path: '/clicker'
        },
        {
            key: 2,
            name: 'Data',
            path: '/data'
        },
        {
            key: 3,
            name: 'Choice',
            path: '/choice'
        }
    ]
    return (
        <Page img='img menu'>
            <div className='option-wrapper'>
                {
                    optionConfig.map(item => (
                        <Option key={item.key} name={item.name} src={item.src} path={item.path} />
                    ))
                }
            </div>
        </Page>
    )
}

export default Menu
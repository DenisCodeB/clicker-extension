import React from 'react'
import Page from '../components/Page'
import Option from '../components/Option'
import click from '../assets/images/clicker.png'
import data from '../assets/images/data.png'

const Menu = () => {
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
            src: data,
            path: '/data'
        }
    ]
    return (
        <Page>
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
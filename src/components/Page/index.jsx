import React, { Children, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import './style.scss'

const Page = props => {
    const location = useLocation()
    useEffect(() => {
        console.log(`Mount ${location.pathname} component`)
        setTimeout(() => {
            const mainContent = document.getElementById('main')
            mainContent.classList.toggle('disappear')
        }, 100)
    })
    useEffect(() => {
        return () => {
            console.log(`Unmount ${location.pathname} component`)
        }
    })
    return (
        <main id='main' className='disappear'>
            <section className='section'>
                {props.children}
            </section>
            <div className={props.img}></div>
        </main>
    )
}

export default Page
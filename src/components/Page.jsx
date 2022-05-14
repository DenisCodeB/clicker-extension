import React, { Children } from 'react'
import './components.scss'

const Page = props => {
    return (
        <main id='main'>
            <section className='section'>
                {props.children}
            </section>
        </main>
    )
}

export default Page
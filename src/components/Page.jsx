import React, { Children } from 'react'

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
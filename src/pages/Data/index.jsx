import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Page from '../../components/Page'
import './data.scss'

const Data = () => {
    return (
        <Page img='img data'>
            <h1 className='comingSoon'>Coming soon :D</h1>
        </Page>
    )
}

export default Data
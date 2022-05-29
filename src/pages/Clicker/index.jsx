import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Page from '../../components/Page'
import Input from '../../components/Input'
import Button from '../../components/Button'
import './clicker.scss'

const Clicker = () => {
    return (
        <Page img='img clicker'>
            <div className='form-wrapper'>
                <form autoComplete='false' className='form'>
                    <Input content='time' placeholder='time' promptText='Total time of clicking' />
                    <Input content='clicks' placeholder='clicks/s' promptText='Number of clicks per second' />
                </form>
                <Button name='Clean' className='button clean-button' />
                <Button name='Start' className='button start-button' />
            </div>
        </Page>
    )
}

export default Clicker
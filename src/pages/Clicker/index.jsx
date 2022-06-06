import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { sendDataToContent } from '../../helpers/sendDataToContent'
import { cleanInputs } from '../../helpers/cleanInputs'
import { useSmoothSliding } from '../../helpers/useSmoothSliding'
import { speedUp } from '../../helpers/animCircle'

import Page from '../../components/Page'
import Input from '../../components/Input'
import Button from '../../components/Button'
import './style.scss'

const Clicker = () => {
    const smoothSliding = useSmoothSliding()

    return (
        <Page img='img clicker'>
            <div className='form-wrapper'>
                <form autoComplete='false' className='form'>
                    <Input content='time' placeholder='time' promptText='Total time of clicking (ms)' />
                    <Input content='clicks' placeholder='clicks/s' promptText='Number of clicks per second' />
                </form>
                <Button name='Clean' className='button clean-button' onclick={() => { speedUp(); cleanInputs() }} />
                <Button name='Start' className='button start-button' onclick={e => {
                    const inputs = document.getElementsByClassName('input')
                    speedUp()
                    sendDataToContent(inputs, 'inputData')
                    smoothSliding(e, '/clicker-start') }
                } />
            </div>
        </Page>
    )
}

export default Clicker
import React, {useState, useEffect} from 'react'

import { sendDataToContent } from '../../helpers/sendDataToContent'
import { useSmoothSliding } from '../../helpers/useSmoothSliding'
import { setAllow } from '../../helpers/setAllow'
import { speedUp } from '../../helpers/animCircle'

import Page from '../../components/Page'
import Button from '../../components/Button'
import TimeStat from './components/TimeStat'
import ClickStat from './components/ClickStat'
import './style.scss'

const ClickerStart = () => {
    const smoothSliding = useSmoothSliding()

    return (
        <Page img='img clickerStart'>
            <div className='info'>
                <div className='info__stat'>
                    <TimeStat text='Time' />
                    <ClickStat text='Clicks' />
                </div>
                <Button name='Cansel' className='button cansel-button' onclick={e => {
                    speedUp()
                    sendDataToContent(setAllow(true), 'isCanselImmediately')
                    smoothSliding(e, '/')
                }} />
            </div>
        </Page>
    )
}

export default ClickerStart
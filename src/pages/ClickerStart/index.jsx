import React, {useState, useEffect} from 'react'
import Page from '../../components/Page'
import TimeStat from '../../components/TimeStat'
import ClickStat from '../../components/ClickStat'
import Button from '../../components/Button'
import './clickerStart.scss'
import '../../components/Button/button.scss'

const ClickerStart = () => {
    return (
        <Page img='img clickerStart'>
            <div className='info'>
                <div className='info__stat'>
                    <TimeStat text='Time' />
                    <ClickStat text='Clicks' />
                </div>
                <Button name='Cansel' className='button cansel-button' />
            </div>
        </Page>
    )
}

export default ClickerStart
import React, { useState, useEffect } from 'react'
import Page from '../../components/Page'
import SelectElem from '../../components/SelectElem'
import { sendDataToContent } from '../../components/helpers/sendDataToContent'
import { setAllow } from '../../components/helpers/setAllow'
import './choice.scss'

const Choice = () => {
    return (
        <Page img='img choice'>
            <div onLoad={sendDataToContent(setAllow(true), 'isAllowListenClicks')} className='select'>
                <SelectElem />
            </div>
        </Page>
    )
}

export default Choice
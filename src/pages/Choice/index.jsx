import React, { useState, useEffect } from 'react'
import Page from '../../components/Page'
import SelectElem from '../../components/SelectElem'
import { sendDataToContent } from '../../components/helpers/sendDataToContent'
import './choice.scss'

const Choice = () => {
    const obj = new Object(true)
    obj.value = true
    const isAllow = [obj]
    return (
        <Page img='img choice'>
            <div onLoad={sendDataToContent(isAllow, 'isAllowListenClicks')} className='select'>
                <SelectElem />
            </div>
        </Page>
    )
}

export default Choice
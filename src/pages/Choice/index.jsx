import React, { useState, useEffect } from 'react'

import { radioCheck } from '../../helpers/radioChecker'

import { SvgSign } from '../../components/Button/components/SvgSign'
import Page from '../../components/Page'
import Button from '../../components/Button'
import RadioForm from './components/RadioForm'
import './style.scss'

const Choice = () => {
    return (
        <Page img='img choice'>
            <div className='select'>
                <p className='select__title'>Select the element after confirmation!</p>
                <RadioForm />
                <Button name='Confirm' className='button confirm-button' onclick={radioCheck} />
            </div>
        </Page>
    )
}

export default Choice
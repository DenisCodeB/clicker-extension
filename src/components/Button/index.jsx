import React from 'react'
import { useNavigate } from 'react-router-dom'
import { speedUp } from '../helpers/animCircle'
import { useSmoothSliding } from '../helpers/useSmoothSliding'
import { sendDataToContent } from '../helpers/sendDataToContent'
import './button.scss'
import { SvgSign } from './SvgSign'
import { cleanInputs } from '../helpers/cleanInputs'
import { setAllow } from '../helpers/setAllow'

const Button = props => {
    const navigate = useNavigate()
    const smoothSliding = useSmoothSliding()
    const inputs = document.getElementsByClassName('input')

    return (
        <div className={props.className} onClick={e => {
            speedUp()
            props.name === 'Start' 
            ? (sendDataToContent(inputs, 'inputData'), smoothSliding(e, '/clicker-start'))
            : props.name === 'Clean'
                ? cleanInputs()
                : (sendDataToContent(setAllow(true), 'isCanselImmediately'), smoothSliding(e, '/'))
        }}>
            <span className='button__text'>{props.name}</span>
            <SvgSign name={props.name} />
        </div>
    )
}

export default Button
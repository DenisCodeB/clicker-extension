import React from 'react'
import { useNavigate } from 'react-router-dom'
import { speedUp } from '../helpers/animCircle'
import { useSmoothSliding } from '../helpers/useSmoothSliding'
import './button.scss'
import { SvgSign } from './SvgSign'
import { cleanInputs } from '../helpers/cleanInputs'
import { sendDataToContent } from '../helpers/sendDataToContent'


const Button = props => {
    const navigate = useNavigate()
    const smoothSliding = useSmoothSliding()
    const pathname = '/clicker-start'
    const inputs = document.getElementsByClassName('input')

    return (
        <div className={props.className} onClick={e => {
            speedUp()
            props.name === 'Start' 
            ? (sendDataToContent(inputs, 'inputData'), smoothSliding(e, pathname))
            : props.name === 'Clean'
                ? cleanInputs()
                : navigate(-1)
        }}>
            <span className='button__text'>{props.name}</span>
            <SvgSign name={props.name} />
        </div>
    )
}

export default Button
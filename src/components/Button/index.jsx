import React from 'react'

import { SvgSign } from './components/SvgSign'
import './style.scss'

const Button = props => {

    return (
        <div className={props.className} onClick={props.onclick}>
            <span className='button__text'>{props.name}</span>
            <SvgSign name={props.name} />
        </div>
    )
}

export default Button
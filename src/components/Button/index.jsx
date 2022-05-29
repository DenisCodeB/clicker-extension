import React from 'react'
import { speedUp } from '../helpers/animCircle'
import { useSmoothSliding } from '../helpers/useSmoothSliding'
import './button.scss'
import { SvgSign } from './SvgSign'


const Button = props => {
    const smoothSliding = useSmoothSliding()
    const pathname = '/clicker-start'

    return (
        <div className={props.className} onClick={e => {speedUp(); smoothSliding(e, pathname)}}>
            <span className='button__text'>{props.name}</span>
            <SvgSign name={props.name} />
        </div>
    )
}

export default Button
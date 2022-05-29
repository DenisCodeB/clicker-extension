import React from 'react'
import { speedUp } from '../helpers/animCircle'
import { useSmoothSliding } from '../helpers/useSmoothSliding'
import './option.scss'

const Option = props => {
    const smoothSliding = useSmoothSliding()

    return (
        <div className='option' onClick={e => {speedUp(); smoothSliding(e, props.path)}}>
            <p className='option__text'>{props.name}</p>
            <img className='option__img' src={props.src} alt='' />
        </div>
    )
}

export default Option
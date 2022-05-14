import React from 'react'
import { useNavigate } from 'react-router-dom'
import { speedUp } from './Header/animCircle'

const Option = props => {
    const navigate = useNavigate()
    const moveTo = () => navigate(props.path)
    
    return (
        <div className='option' onClick={() => {speedUp(); moveTo()}}>
            <p className='option__text'>{props.name}</p>
            <img className='option__img' src={props.src} alt='' />
        </div>
    )
}

export default Option
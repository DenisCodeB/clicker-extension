import React, { useState, useEffect } from 'react'
import './input.scss'

const Input = props => {
    const [time, setTime] = useState(0)
    const [clicks, setClicks] = useState(0)
    // Dynamic data transfer 
    // to local storage 
    useEffect(() => {
        localStorage.setItem('InputTime', time)
    }, [time])
    useEffect(() => {
        localStorage.setItem('InputClicks', clicks)
    }, [clicks])
    
    return (
        <div className='input-wrapper'>
            <input className='input'
                type='text'
                placeholder={props.placeholder} 
                onChange={e => {
                    if (props.content === 'time') {
                        setTime(e.target.value)
                    } else {
                        setClicks(e.target.value)
                    }
                }} />
            <div className='input-question'>
                <div className='input-question__prompt'>{props.promptText}</div>
            </div>
        </div>
    )
}

export default Input
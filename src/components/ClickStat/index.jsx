import React, { useState, useEffect } from 'react'
import '../TimeStat/timeStat.scss'

const ClickStat = props => {
    const [clicks, setClicks] = useState(0)
    const getData = key => {
        const data = localStorage.getItem(key)
        return data
    }
    // Start click counter
    useEffect(() => {
        let interval, 
            delay = 1000 / getData('InputClicks'),
            totalClicks = getData('InputTime') / 1000 * getData('InputClicks')
        interval = setInterval(() => {
            setClicks(prevClicks => 
                prevClicks !== totalClicks
                ? prevClicks + 1
                : (clearInterval(interval), prevClicks)
            )
        }, delay)
    }, [])

    return (
        <div className='stat'>
            <p className='stat__text'>{props.text}</p>
            <p className='stat__current'>{clicks}</p>
            <p className='stat__total'>{getData('InputClicks')} clc/s</p>
        </div>
    )
}

export default ClickStat
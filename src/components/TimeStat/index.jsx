import React, { useState, useEffect, useCallback } from 'react'
import './timeStat.scss'

const TimeStat = props => {
    const [time, setTime] = useState(0)
    // Convert miliseconds to time like 00:00:0
    // for stopwatch
    const convertToTotalTime = (units, time) => {
        switch(units) {
            case 'm':
                return ('0' + Math.floor(time / 60000)).slice(-2) + ':'
            
            case 's':
                return ('0' + (Math.floor(time / 1000) % 60)).slice(-2) + ':'

            case 'ms':
                return (Math.floor(time / 100) % 10).toString().slice(-2)
        }
    }
    // Get total time from local storage 
    // and recreate in total time
    const getData = useCallback(() => {
        let data = localStorage.getItem('InputTime')
        let m = convertToTotalTime('m', data)
        let s = convertToTotalTime('s', data)
        let ms = convertToTotalTime('ms', data)
        return m + s + ms
    })
    // Start stopwatch
    useEffect(() => {
        let totalTime = Number.parseInt(localStorage.getItem('InputTime'))
        let interval = null
        interval = setInterval(() => {
            setTime(prevTime => 
                prevTime !== totalTime 
                ? prevTime + 100 
                : (clearInterval(interval), prevTime)
            )
        }, 100)
        
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div className='stat'>
            <p className='stat__text'>{props.text}</p>
            <p className='stat__current'>
                <span className='digits m'>
                    {convertToTotalTime('m', time)}
                </span>
                <span className='digits s'>
                    {convertToTotalTime('s', time)}
                </span>
                <span className='digits ms'>
                    {convertToTotalTime('ms', time)}
                </span>
            </p>
            <p className='stat__total'>{getData()}</p>
        </div>
    )
}

export default TimeStat
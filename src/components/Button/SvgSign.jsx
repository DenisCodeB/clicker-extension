import React from 'react'

const SvgSign = props => {
    if (props.name === 'Start') {
        return (
            <svg viewBox="0 0 10 8" fill="none" className='button__img' xmlns="http://www.w3.org/2000/svg">
                <path d='M 3,1 L 6,4' stroke="#99FF99" />
                <path d='M 6,4 L 3,7' stroke="#99FF99" />
            </svg>
        )
    } else if (props.name === 'Clean') {
        return (
            <svg viewBox="0 0 10 10" fill="none" className='button__img' xmlns="http://www.w3.org/2000/svg">
                <path d='M 6.45831,1.66667 L 6.04165,1.25 H 3.95831 L 3.54165,1.66667 H 2.08331 V 2.5 H 7.91665 V 1.66667 H 6.45831 Z' fill="#FFFF99"/>
                <path d='M 3.33331,3.75 H 6.66665 V 7.91667 H 3.33331 V 3.75 Z' />
                <path d='M 2.49998,7.91667 C 2.49998,8.375,2.87498,8.75,3.33331,8.75 H 6.66665 C 7.12498,8.75,7.49998,8.375,7.49998,7.91667 V 3.91667 H 2.49998 V 7.91667 Z' fill="#FFFF99" />
            </svg>
        )
    } else if (props.name === 'Cansel') {
        return (
            <svg viewBox="0 0 10 10" fill="none" className='button__img' xmlns="http://www.w3.org/2000/svg">
                <path d='M 2.5,2.5 L 7.5,7.5 Z' stroke='#FF9999' />
                <path d='M 7.5,2.5 L 2.5,7.5 Z' stroke='#FF9999' />
            </svg>

        )
    }
}

export { SvgSign }
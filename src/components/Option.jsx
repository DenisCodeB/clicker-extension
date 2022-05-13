import React from 'react'

const Option = props => {
    return (
        <div className='option'>
            <span className='option__text'>{props.name}</span>
            <img className='option__img' src={props.src} alt='' />
        </div>
    )
}

export default Option
import React from 'react'

const RadioForm = () => {
    return (
        <form className='select__form'>
            <label className='select__label'>
                <div className='custom-radio'>
                    <input id='radio-one' className='custom-radio__input' type='radio' name='element' value='one' checked />
                    <div className='custom-radio__circle'></div>
                </div>
                One element
            </label>
            <label className='select__label'>
                <div className='custom-radio'>
                    <input id='radio-two' className='custom-radio__input' type='radio' name='element' value='two' />
                    <div className='custom-radio__circle'></div>
                </div>
                Two elements
            </label>
        </form>
    )
}

export default RadioForm
// Code Keypad Component Here
import React from 'react'

function Keypad(){
    const changeEvent = (event) => {
        console.log('Entering password...')
    }
    return(
        <div>
            <input type='password' onChange={changeEvent}></input>
        </div>
    )
}

export default Keypad

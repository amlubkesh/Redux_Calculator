import React from 'react'
import OprButton from './OprButton'

export default function Addition({handleAnswer}) {
    return (
        <OprButton value={'+'} onClick={handleAnswer} id={'add'}/>
    )
}

import React from 'react'
import OprButton from './OprButton'

export default function Subtraction({handleAnswer}) {
    return (
        <OprButton value={'-'} onClick={handleAnswer} id={'sub'}/>
    )
}

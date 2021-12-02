import React from 'react'
import OprButton from './OprButton'

export default function Multiplication({handleAnswer}) {
    return (
        <OprButton value={'X'} onClick={handleAnswer} id={'mult'}/>
    )
}

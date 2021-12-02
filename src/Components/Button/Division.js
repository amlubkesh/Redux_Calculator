import React from 'react'
import OprButton from './OprButton'

export default function Division({handleAnswer}) {
    return (
        <OprButton value={'/'}  onClick={handleAnswer} id={'division'}/>
    )
}

import React,{ useState } from 'react'
import {useDispatch,useSelector } from 'react-redux'
import { answer } from '../../redux/actions/actions'
import '../../App.css'
import Addition from '../Button/Addition'
import Subtraction from '../Button/Subtraction'
import Multiplication from '../Button/Multiplication'
import Division from '../Button/Division'

export default function SecondCalculetor() {

    const [firstTxt, setfirstTxt] = useState()
    const [secondTxt, setSecondTxt] = useState()

    const dispatch = useDispatch();
    const display = useSelector( state => state) 

    // console.log("show the display",(display.ans).length === 0 ? display.number : display.ans)

    
    const handleAnswer = (e) =>{
        e.preventDefault();
        const data = {
            firstTxt:firstTxt,
            secondTxt:secondTxt,
            id: e.target.id
        }
        console.log("data", data)
        dispatch(answer(data))
    }
    
    

    return (
        <div className="container">
            <form>
                <div>
                    <input type='text' value={firstTxt} onChange={(e) => setfirstTxt(e.target.value)} placeholder='0' />
                </div>
                <div>
                    <input type='text' value={secondTxt} onChange={(e) => setSecondTxt(e.target.value)} placeholder='0'/>
                </div>
            </form>
            <div className="keypad">
                <Addition handleAnswer={handleAnswer} />
                <Subtraction handleAnswer={handleAnswer} />
            </div>
            <div className="keypad">
                <Multiplication handleAnswer={handleAnswer} />
                <Division handleAnswer={handleAnswer} />
            </div>

            <strong>Total= {(display.ans).length === 0 ? display.number : display.ans}</strong>
        </div>
    )
}

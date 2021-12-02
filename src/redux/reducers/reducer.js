import { CLICK_BUTTON } from "../actions/actionTypes";

import { ANSWER } from "../actions/actionTypes";



const initialState = {
    number: '',
    ans: ''
}

const rootReducer = (state = initialState, action) => {
    let {type, payload} = action

    switch(type){
        case CLICK_BUTTON:
            
            return {
                ...state,
                ...payload, 
                number:state.number.concat(action.payload)
            }

            case ANSWER:
                console.log("action payload",(action.payload))
                
                console.log("Type of number",typeof(state.number))
            try{
                if(payload.id == 'add'){
                    return{
                        ...state, payload,
                        ans: parseInt(payload.firstTxt) + parseInt(payload.secondTxt)
                    }
                }else if(payload.id == 'sub'){
                    return{
                        ...state, payload,
                        ans: parseInt(payload.firstTxt) - parseInt(payload.secondTxt)
                    }
                }else if(payload.id == 'mult'){
                    return{
                        ...state, payload,
                        ans: parseInt(payload.firstTxt) * parseInt(payload.secondTxt)
                    }
                }else if(payload.id == 'division'){
                    if( payload.secondTxt !== '0'){
                        return{
                            ...state, payload,
                            ans: parseInt(payload.firstTxt) / parseInt(payload.secondTxt)
                        }
                    }else{
                        return{
                            ...state, payload,
                            ans: 'Infinite'
                        }
                    }
                }
            }catch(err){
                console.log(err)
            }
        default:
            return { ...state }
    }
}

export default rootReducer;
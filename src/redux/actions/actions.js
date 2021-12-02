import { CLICK_BUTTON } from "./actionTypes";
import { CLEAR } from "./actionTypes";
import { BACK_SPACE } from "./actionTypes";
import { ANSWER } from "./actionTypes";



export const clickButton = (number) =>{
  return {
    type: CLICK_BUTTON,
    payload: number
  }
}
export const answer = (data) =>{
  return {
    type: ANSWER,
    payload: data
  }
}

// export const clickButton = (number) =>{
//   return {
//     type: CLICK_BUTTON,
//     payload: number
//   }
// }
// export const answer = () =>{
//   return {
//     type: ANSWER,
//   }
// }
// export const backspace = () =>{
//   return {
//     type: BACK_SPACE,
//   }
// }


// export const clickClear = () =>{
//   return {
//     type: CLEAR,
//   }
// }

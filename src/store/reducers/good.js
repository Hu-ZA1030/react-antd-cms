import {GET_CATES,GET_GOOD_LIST} from "../actionTypes"


let initState = {
    cateArr:[],
    goodArr:[]
}

export default function goodReducer(state=initState,action){
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case GET_CATES:
            newState.cateArr = action.payload
            return newState;
        case GET_GOOD_LIST:
            console.log("newState",newState)
            newState.goodArr = action.payload.list
            return newState;
        default:
            return state;
    }

}
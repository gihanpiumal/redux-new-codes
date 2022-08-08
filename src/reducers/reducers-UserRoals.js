import {FETCH_ALL_USER_ROLES} from "../actions/types"

export default function(state = null , action){
    switch(action.type){
        case "FETCH_ALL_USER_ROLES":
            return action.payload
            break
    }
    return state
} 
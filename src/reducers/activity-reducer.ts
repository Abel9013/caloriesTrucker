import type { Activity } from "../types"
export type ActivityActions = 
{   type:"save-activity", payload: { newActivity: Activity}   }
type ActivityState = {
    activities : Activity[]
}
export const initialState : ActivityState = {
    activities:[]
}

export const activityReducer = (
    state: ActivityState = initialState,
    actions: ActivityActions,
) => {
    if(actions.type ==="save-activity"){
        //Maneja la logica para actualizar el state 
        return {
            ...state,
            activities:[...state.activities, actions.payload.newActivity]
        }
    }
    // Colocar siempre el return state
    return state

}
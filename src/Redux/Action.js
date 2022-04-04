
import { DELETED, COMPLETE, ADD } from './ActionType';


export const DeleteTask=(id)=>{
    return{
        type: DELETED,
        payload:id,
    }
};
export const CompletedTask=(id)=>{
    return{
        type: COMPLETE,
        payload:id,
    }
};
export const addNewTask=(newtask)=>{
    return{
        type: ADD,
        payload:newtask,
    }
}
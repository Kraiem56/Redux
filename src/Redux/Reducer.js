
import { DELETED, COMPLETE, ADD } from './ActionType';


const init={
    todos:[
        { id:Math.random(),
          task:"Learn about React" ,
          complete:false,
        }, { id:Math.random(),
          task:"Meet friend for lunch",
          complete:false,
        }
    ]
}; 
export const TaskReducer=(state=init,{type,payload})=>{
  
  switch (type) {
    case DELETED:
      
      return{
        ...state,todos:state.todos.filter(el=>el.id!==payload)
      }
  
    default:
      return state;
     case ADD:
       return{
         ...state,
         todos:[...state.todos,payload]
       };
       case COMPLETE:
         return{
           ...state,todos:state.todos.map(el=>el.id===payload? {...el,complete:!el.complete}:el )}
         }
    
};
  


import {createStore} from "redux"
import { TaskReducer } from './Reducer';


const devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store=createStore(TaskReducer,devtools)
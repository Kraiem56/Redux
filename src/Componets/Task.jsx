import React from 'react';

import { useDispatch } from 'react-redux';
import { CompletedTask, DeleteTask } from './../Redux/Action';


const Task = ({ did }) => {
  const dispatch=useDispatch()
	return (
		<div className="task-item">
		
        
				<h2 className={did.complete?'completed':null}>{did.task}</h2>
			
			<div>
				<button className="remove-task-button" onClick={()=>{ dispatch(DeleteTask(did.id))
					
				}}>Delete</button>

        <button className="remove-task-button" onClick={()=>{ dispatch(CompletedTask(did.id)
        )}}>Completed</button>
			</div>
		</div>
	);
};

export default Task
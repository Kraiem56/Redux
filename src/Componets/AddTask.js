import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addNewTask } from './../Redux/Action';


const AddTask = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
    const task={
      id:Math.random(),
          task:value ,
          complete:false,
    }

		// if(value.trim().length === 0)
		// {
		// 	alert("Enter a task before adding !!");
		// 	setValue("");
		// 	return;
		// }
  

		dispatch(addNewTask(task));
    setValue("");
	};

	return (
		<div className="add-todo">
			<input
				type="text"
				className="task-input"
				placeholder="Add task"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			></input>
      <span><button className="task-button" onClick={onSubmit}>
				Save
			</button></span>
			
		</div>
	);
};
export default AddTask;
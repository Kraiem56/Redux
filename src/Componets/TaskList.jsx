import React from 'react'
import Task from './Task'

const TaskList = ({data}) => {
  return (
    <div>
      
     
        {
            React.Children.toArray(
                data.map(element=><Task  did={element}/>)
            )
        }
    </div>
  )
}

export default TaskList
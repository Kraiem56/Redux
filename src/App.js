import { useSelector } from 'react-redux';
import './App.css';
import AddTask from './Componets/AddTask';
import TaskList from './Componets/TaskList';

function App() {
  const {todos}=useSelector(state=>state)
  return (
    <div className="App">
      <h1 className="app-title">Today</h1>
      <AddTask data={todos}/>
      <TaskList data={todos} />
      
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { Task } from './interfaces/interfaces';
import TaskList from './components/TaskList'


function App() {

  const [tasks, setTasks] = useState<Task[]>([
    {
    id :1,
    title : "Learn React",
    description : "Learn React",
    completed: false,
  }])


  return (
    <div className="bg-dark" style={{height:'100vh'}}>
      <Navbar/>
      
      <main className='container p-4'> 
      <TaskList tasks={tasks}/>
      </main>
    </div>
  );
}

export default App;

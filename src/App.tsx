import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { Task } from './interfaces/interfaces';
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm';


function App() {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React",
      completed: false,
    }])
 const getCurrentTimestamp = new Date().getTime()

 const addNewTask = (task: Task) => setTasks([...tasks, {...task, id: getCurrentTimestamp, completed: false}]);

const removeTask = (id: number) => setTasks(tasks.filter(task => task.id !== id))

  return (
    <div className="bg-dark" style={{ height: '100vh' }}>
      <Navbar />

      <main className='container p-4'>
        <div className="row">
          <div className="col-md-4">
           <TaskForm addNewTask={addNewTask} />
          </div>

          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks}
              removeTask={removeTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

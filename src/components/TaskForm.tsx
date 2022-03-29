import React, { ChangeEvent, FormEvent, useState, useRef } from 'react'
import { Task } from '../interfaces/interfaces'


interface TaskProps {
  addNewTask: (task: Task) => void,
}
type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

export default function TaskForm({ addNewTask }: TaskProps) {

 const initialRef = useRef<HTMLInputElement>(null)

  const [inicialState, setInicialState] = useState<Task>({
    title: '',
    description: '',
  })
  const [tasks, setTasks] = useState<Task>(inicialState)

  const handleInputChange = ({ target }: HandleInputChange) => {
    setTasks({ ...tasks, [target.name]: target.value })

  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTask(tasks);
    setTasks(inicialState);
    initialRef.current?.focus()
  }

  return (
    <div className=' card card-body bg secondary text dark'>
      <h1>Add Task</h1>

      <form onSubmit={handleSubmit}>
        <input type='text'
          placeholder='Write a task'
          name='title'
          className='form-control mb-3'
          onChange={handleInputChange}
          value={tasks.title}
          autoFocus
          ref={initialRef}/>


        <textarea name='description'
          rows={2}
          placeholder='Write description'
          className='form-control mb-3'
          onChange={handleInputChange}
          value={tasks.description} />
        <button className='btn btn-primary'>Save</button>

      </form>

    </div>
  )
}



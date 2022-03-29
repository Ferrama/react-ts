import React,{} from 'react'
import { Task } from '../interfaces/interfaces'


interface Props {
  tasks: Task;
  removeTask: (id: number) => void,
}

export default function TaskCard({ tasks, removeTask}: Props) {
  return (
    <div className="card card-body">
      <p>{tasks.id}</p>
      <h1>{tasks.title}</h1>
      <p>{tasks.description}</p>
      <button className='btn btn-danger' onClick={()=> tasks.id && removeTask(tasks.id)}>Delete</button>
    </div>
  )
}

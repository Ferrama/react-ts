import React from 'react'
import { Task } from '../interfaces/interfaces'


interface Props {
  tasks: Task;
}

export default function TaskCard({ tasks }: Props) {
  return (
    <div className="card card-body">
      <p>{tasks.id}</p>
      <h1>{tasks.title}</h1>
      <p>{tasks.description}</p>
      <button className='btn btn-danger'>Delete</button>
    </div>
  )
}

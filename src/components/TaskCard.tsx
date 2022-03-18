import React from 'react'
import { Task } from '../interfaces/interfaces'


interface Props {
  tasks: Task;
}

export default function TaskCard({tasks}: Props) {
  return (
    <div><h1>{tasks.title}</h1></div>
  )
}

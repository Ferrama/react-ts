import React, { useState } from 'react'
import { Task } from '../interfaces/interfaces'
import TaskCard from './TaskCard'
interface Props {
  tasks: Task[]
 removeTask: (id: number) => void,
}

export default function TaskList({ tasks, removeTask }: Props) {



  return (
    <div className="row">
      {tasks.map(task => (
        <div className="col-md-3 p-2" key={task.id}>
          <TaskCard tasks={task} removeTask={removeTask} />
        </div>
        ))}
    </div>
  )
}

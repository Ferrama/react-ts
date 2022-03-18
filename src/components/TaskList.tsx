import React, { useState } from 'react'
import { Task } from '../interfaces/interfaces'
import TaskCard from './TaskCard'
interface Props {
  tasks: Task[]
}

export default function TaskList({ tasks }: Props) {



  return (
    <div>
      {tasks.map(task => <TaskCard tasks={task} />)}
    </div>
  )
}

import React,{ChangeEvent, useState} from 'react'

interface TaskProps {
  title: string,
  description: string,
}
type HandleInputChange = ChangeEvent<HTMLInputElement|HTMLTextAreaElement>

export default function TaskForm() {

const [tasks,setTasks]= useState<TaskProps>({
  title: '',
  description: '',
})

 const handleInputChange = ({target }: HandleInputChange ) => {
   setTasks({...tasks, [target.name]: target.value})

 }



  return (
    <div className=' card card-body bg secondary text dark'>
      <h1>Add Task</h1>

      <form>
        <input type='text'
          placeholder='Write a task'
          name='title'
          className='form-control mb-3'
          onChange={handleInputChange}/>

         
        <textarea name='description'
          rows={2}
          placeholder='Write description'
          className='form-control mb-3'
          onChange={handleInputChange}></textarea>
          <button className='btn btn-primary'>Save</button>

      </form>

    </div>
  )
}

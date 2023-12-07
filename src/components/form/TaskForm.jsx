import { useEffect, useState } from 'react'
import { Button } from '../common/Button'
import './form.css'

const TaskForm = ({ formRef }) => {
  const [tasks, setTasks] = useState([])

  const [taskInput, setTaskInput] = useState('')
  const [dateInput, setDateInput] = useState('')

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  const handleTaskCreation = (event) => {
    event.preventDefault()

    if (taskInput.trim() === '') {
      alert('Ingresa un nombre para la tarea.')
      return
    }

    const newTask = {
      id: Date.now(),
      name: taskInput,
      date: dateInput,
      completed: false
    }

    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks);

    localStorage.setItem('tasks', JSON.stringify(updatedTasks))

    setTaskInput('')
    setDateInput('')

    setTimeout(() => {
      window.location.href = "/"
    }, 1000)
  }

  return (
    <div className='div-form'>
      <form ref={formRef} onSubmit={handleTaskCreation}>
        <input
          type='text' 
          name='nombre' 
          placeholder='Crear nueva tarea...' 
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)} 
        />
        <input type='date' name='date' value={dateInput} onChange={(e) => setDateInput(e.target.value)} required/>
        <Button type='submit' className="btn-crear">Crear</Button>
      </form>
    </div>
  )
}

export default TaskForm
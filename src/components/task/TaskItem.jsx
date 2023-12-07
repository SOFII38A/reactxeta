import { useEffect, useState } from "react"
import "./task.css"
import { Button } from "../common/Button"

const TaskItem = ({ id, name, date, completed }) => {
  const [isCompleted, setIsCompleted] = useState(completed !== undefined ? completed : false)

  useEffect(() => {
    setIsCompleted(completed)
  }, [completed])

  const toggleTaskCompletion = () => {
    const newCompleted = !isCompleted
    setIsCompleted(newCompleted)

    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      const tasks = JSON.parse(storedTasks)
      const updatedTasks = tasks.map(task => (task.id === id ? { ...task, completed: newCompleted } : task))
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    }
  }
  
  const handleDelete = (id) => {
    const storedTasks = localStorage.getItem('tasks')

    if (storedTasks) {
      const tasks = JSON.parse(storedTasks)
  
      const updatedTasks = tasks.filter(task => task.id !== id)
  
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    }
    
    setTimeout(() => {
      window.location.href = "/"
    }, 800)
  }

  const realDate = date instanceof Date ? new Date(date).toLocaleDateString() : 'Fecha inválida'

  return (
    <div className="card-task">
      <div className="task-info">
        <div className="div-check">
          <label>
            <input type="checkbox" className="custom-checkbox" onChange={toggleTaskCompletion} checked={isCompleted}/>
            <span className="check"></span>
          </label>
          <span className="card-completed">{ isCompleted ? "Completada" : "Pendiente" } </span>
        </div>      
        <h2 className="task-name">{name}</h2>
        <p>Fecha: {realDate}</p>
        <Button className="btn" onClick={() => handleDelete(id)}>Borrar</Button>
      </div>
    </div>
  )
}

export default TaskItem
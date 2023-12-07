import { useEffect, useState } from 'react'
import TaskList from './TaskList'

const TaskContainer = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks, (key, value) => {
        if (key === 'date') {
          return new Date(value)
        }
        return value
      })
      setTasks(parsedTasks)
    }
  }, [])

  return (
    <>
      {tasks && tasks.length > 0 ? (
          <TaskList tasks={tasks} />
        ) : (
          <h2>No hay tareas creadas...</h2>
      )}
    </>
  )
}

export default TaskContainer
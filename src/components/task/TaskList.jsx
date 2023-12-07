import TaskItem from './TaskItem'

const TaskList = ({ tasks, onClick }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} {...task} onClick={() => onClick(task.id)} />
      ))}
    </div>
  )
}

export default TaskList

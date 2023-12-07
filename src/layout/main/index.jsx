import TaskContainer from '../../components/task/TaskContainer'
import TaskForm from '../../components/form/TaskForm'
import './main.css'

const Main = ({ formRef }) => {
  return (
    <main>
      <h1>Lista de Tareas</h1>
      <TaskForm formRef={formRef} />
      <TaskContainer />
    </main>
  )
}
  
export default Main
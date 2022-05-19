import { useEffect, useState } from 'react';
import './App.css';
import TaskRow from './components/TaskRow';
import { TaskBanner } from './components/TaskBanner';
import { TaskCreator } from './components/TaskCreator';
import { VisibilityControl } from './components/VisibilityControl';

function App() {

  const [userName, setUserName] = useState('Seba')

  const [showCompleted, setShowCompleted] = useState(true)

  const [taskItems, setTaskItems] = useState([{
    name: 'coso',
    done: true,
  }])

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data != null) {
      setTaskItems(JSON.parse(data))
    } else {
      setUserName('Seba')
      setTaskItems([({
        name: 'pasear perro',
        done: false,
      })])
      setShowCompleted(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  const toggleTask = (task) => {
    return setTaskItems(taskItems.map((result) => (result.name === task ? { ...result, done: !result.done } : result)))
  }

  const taskTableRows = (doneValue) => {
    return taskItems
      .filter(result => result.done === doneValue)
      .map((result) => (
        <TaskRow task={result.name} done={result.done} key={result.name} toggleTask={toggleTask} />
      ))
  }

  const createNewTask = (props) => {
    if (!taskItems.find((result) => result.name === props)) {
      setTaskItems([...taskItems, { name: props, done: false }])
    }
  }

  return (
    <div className="App">
      <TaskBanner userName={userName} taskItems={taskItems} />
      <TaskCreator createTask={createNewTask} />
      <table className='table table-stripped table-bordered'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRows(false)}
        </tbody>
      </table>
      <div className="bg-secondary-text-white tex-center">
        <VisibilityControl description="Completed" isChecked={showCompleted} callback={checked => setShowCompleted(checked)} />
      </div>

      {
        showCompleted && (
          <table className='table table-stripped table-bordered'>
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {taskTableRows(true)}
            </tbody>
          </table>
        )
      }

    </div>
  );
}

export default App;

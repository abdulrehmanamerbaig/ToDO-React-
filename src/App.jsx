import { useCallback, useState, useEffect } from 'react'
import './App.css'
import Task from './Task.jsx'
import Header from './Header.jsx'
import VanillaTilt from 'vanilla-tilt';

function App() {
  const [task, setTask] = useState([
    {title: "Default First Task", description:"First Task's Description", status: false, date: new Date()},
    // {title: "CDD", description:"Not Yet", status: true, date: new Date()},
    ])
  const [newTask, setNewTask] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [task_status, set_task_status] = useState(false)

  const addTaskToList = useCallback(() => {
          if (newTask.length){
            const obj = {title: newTask, description:newDescription, status: false, date: new Date()}
            setTask((prevTasks) => [...prevTasks, obj]);
            setNewTask("")
            setNewDescription("")
          }
          else{
            alert("Enter")
          }
        }, [setTask, setNewTask, newTask, setNewDescription, newDescription])

  const removeTaskFromList = useCallback((i) => {
          let arr = [...task]
          arr.splice(i, 1)
          setTask(arr)
        }, [task, setTask])

  const editTask = useCallback((i) => {
    
          setNewTask(task[i].title)
          setNewDescription(task[i].description)
          task.splice(i, 1)
          setTask([...task])


        }, [task, setTask, newTask, setNewTask])

  const setStatus = useCallback((i) => {
          set_task_status(prev => !prev)
          task[i].status = !task[i].status
          setTask(task)
        }, [task, set_task_status])

        
  useEffect(() => {
          VanillaTilt.init(document.querySelector('[data-tilt]'));
        }, [])

  return (
    <>
      <div>
        <Header />
      </div>
      <div className='body'>
        <div>
          <div className="title_input  ">
            <div className="d-flex justify-content-center position-relative">
              <input 
                  type='text'
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder='Title'
                  className='mb-3'
                  maxLength={60}
                  required
                />
            </div>
            <div className="d-flex justify-content-center ">
              <textarea
                  type='text'
                  value={newDescription}
                  placeholder='Description'
                  onChange={(e) => setNewDescription(e.target.value)}
                  className='position-relative'
                  style={{minHeight: '41px'}}
                />
            </div>
              
            </div>
            <div className="d-flex justify-content-center ">
              <button 
              data-tilt data-tilt-scale="1.1"
                type='submit'
                onClick={addTaskToList}>
                  Add
              </button>
            </div>
            
        </div>
        

      </div>
      <div className=' mt-5 task_list_alignment '>
        {task.map((t, i) => (
          <Task 
            key={i} 
            task_id={i} 
            task={t} 
            removeTaskFromList={removeTaskFromList} 
            editTask = {editTask}  
            setStatus={setStatus}  
          />
          
        ))}
      </div>
    </>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const App = () => {
    document.title = 'React-Todos-Status'
    const [inputValue, setInputValue] = React.useState('')
    const [taskList, setTaskList] = React.useState([])

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const addTask = () => {
        const newTask = {
            id: inputValue + Math.random(),
            title: inputValue,
            status: false
        }
        const updatedTaskList = [...taskList, newTask]
        setTaskList(updatedTaskList)
        setInputValue('')
    }

    const del = (taskId) => {
        const newTaskList = taskList.filter(ele => taskId != ele.id)
        setTaskList(newTaskList)
    }

    return (
        <>
            <div className='add-task'>
                <input id='input' placeholder='...' onChange={handleChange} value={inputValue} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className='task-list'>
                {
                    taskList.map(ele => (
                        <div key={ele.id} className='taskItem'>
                            <p>{ele.title}</p>
                            <p>Incomplete</p>
                            <div className='delDiv'>
                                <button onClick={() => del(ele.id)}>delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)

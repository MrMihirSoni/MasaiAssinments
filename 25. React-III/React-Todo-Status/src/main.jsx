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
        if (inputValue != "") {

            const newTask = {
                id: inputValue + Math.random(),
                title: inputValue,
                status: false,
                message: 'Incomplete',
                completeMsg: 'Mark as Complete'
            }
            const updatedTaskList = [...taskList, newTask]
            setTaskList(updatedTaskList)
            setInputValue('')
        }
    }

    const del = (taskId) => {
        console.log(taskId)
        console.log(taskList)
        const newTaskList1 = taskList.filter(ele => taskId != ele.id)
        setTaskList(newTaskList1)
    }

    const stat = (taskId) => {
        const newTaskList2 = taskList.map((ele) => {
          if (taskId == ele.id) {
            if (ele.status) {
              return {...ele, status:false, message:"Incomplete", completeMsg:"Mark as Complete"}
            } else {
              return {...ele, status:true, message:"Completed", completeMsg:"Mark as InComplete"}
            }
          }
          else{
            return ele;
          }
        });
        setTaskList(newTaskList2);
      };

    return (
        <>
            <div className='head'><h1>My Todo List</h1></div>
            <div className='add-task'>
                <input id='input' placeholder='...' onChange={handleChange} value={inputValue} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className='taskItem'>
                <div><p>Tasks</p></div>
                <div><p>Status</p></div>
                <div className='delDiv'>
                    <p>Buttons</p>
                </div>
            </div>
            <div className='task-list'>
                {
                    taskList.map(ele => (
                        <div key={ele.id} className='taskItem'>
                            <div><p>{ele.title}</p></div>
                            <div><p>{ele.message}</p></div>
                            <div className='delDiv'>
                                <button onClick={() => stat(ele.id)}>{ele.completeMsg}</button>
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

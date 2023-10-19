import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const App = ()=>{
  document.title = 'Counter'
  const [count,setCount] = React.useState(0)

  const increaseCount = ()=>{
    setCount(count+1)
  }

  const decreaseCount = ()=>{
    if(count>0) setCount(count-1)
  }

  return <div id='main'>
  <h1>Count : {count}</h1>
  <button onClick={decreaseCount}>Decrease Count</button>
  <button onClick={increaseCount}>Increase Count</button>
  </div>
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

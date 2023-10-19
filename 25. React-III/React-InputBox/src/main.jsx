import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const App = ()=>{
  document.title = 'React-Input-Box'

  const [text, setText] = React.useState('')

  const showData = (event)=>{
    setText(event.target.value)
    btn.style.display='block'
    if(event.target.value=='') btn.style.display = 'none'  
  }

  const clear = ()=>{
    setText('')
    input.value=''
    btn.style.display='none'
  }

  return <>
    <input placeholder='Type Something' id='input' type="text" onChange={showData}/>
    <h1>{text}</h1>
    <button id='btn' style={{display:'none'}} onClick={clear}>Clear</button>
  </>
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

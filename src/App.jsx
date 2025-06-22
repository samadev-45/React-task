import { useState } from 'react'

import './App.css'

function App() {
  const [color, bgColor] = useState("gray")
  const changeClr=() =>{
    return bgColor ((current) => (current==="gray"?"blue":"gray"))
  }
  
  return (
  
    <div style={{backgroundColor:color,width:"900px",height:"300px"}}>
      
      <button onClick={changeClr}>Change</button>
    </div>
      
  
  )
}

export default App

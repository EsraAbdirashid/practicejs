import React from 'react'
import'./App.css'

const App = () => {

  const item1 = "Laptop"
  const desc = "HP Computer"
  const price = "$500"
  return (
    <> 
    <div className="flexBox">
      <div className="container">
        <h1>item: {item1}</h1>
        <p>description:{desc}</p>
        <span>price:{price}</span>
      
      </div>
    </div>
    
    </>
  )
}

export default App
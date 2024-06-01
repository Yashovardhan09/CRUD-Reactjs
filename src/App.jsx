import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Create from './Create'
import Read from './Read'
import Update from './Update'
const App = () => {
  return (
    <div className='container'>
    <BrowserRouter>
   
    <Routes>
    
      <Route exact path='/' element={<Create/>}></Route>
      <Route exact path='/read' element={<Read/>}></Route>
      <Route exact path='/update' element={<Update/>}></Route>
    
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

import {} from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Hrt from './hrt'
import Home from './Home'
function App() {

  return (
    <>
     
      <Router>
     
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hrt" element={<Hrt/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

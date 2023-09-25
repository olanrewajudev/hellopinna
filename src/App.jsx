import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/General/Home'
import Agric from './Pages/General/Agric'
import Travel from './Pages/General/Travel'
import Education from './Pages/General/Education';
import Medical from './Pages/General/Medical';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/agric' element={<Agric />} />
      <Route path='/travel' element={<Travel />} />
      <Route path='/education' element={<Education />} />
      <Route path='/medical' element={<Medical />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

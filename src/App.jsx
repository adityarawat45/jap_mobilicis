import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './screens/nav'
import Landing from './screens/Landing'
import Jobs from './screens/Jobs'
import Culture from './screens/Culture'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'

function App() {
   return <div>
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/jobs' element={<Jobs></Jobs>}></Route>
      </Routes>
    </BrowserRouter>
   </div>
}

export default App

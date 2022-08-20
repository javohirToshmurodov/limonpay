import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import News from './pages/News'
import NotFound from './pages/NotFound'
import Partner from './pages/Partner'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='news' element={<News />} />
        <Route path='partner' element={<Partner />} />
      </Routes>
    </>
  )
}

export default App
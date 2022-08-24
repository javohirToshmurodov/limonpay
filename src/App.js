import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Navbar'
import About from './pages/About'
import Auth from './pages/Auth'
import Home from './pages/Home'
import News from './pages/News'
import NotFound from './pages/NotFound'
import Partner from './pages/Partner'

const App = () => {
  const location = useLocation()

  useEffect(() => {

  }, [])
  return (
    <>
      {
        location.pathname == "/auth" ? "" : <Header />
      }
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='news' element={<News />} />
        <Route path='auth' element={<Auth />} />
        <Route path='partner' element={<Partner />} />

      </Routes>
      <Routes>
      </Routes>
    </>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Merchandise from './pages/Merchandise'
import Footer from './components/Footer'
import { NextUIProvider } from '@nextui-org/react'

const App = () => {
  return (
    <>
    <NextUIProvider>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/merchandise' element={<Merchandise />} />
    </Routes>
    <Footer />
    </NextUIProvider>
    </>
  )
}

export default App
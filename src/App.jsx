import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Menu from './pages/Menu'
import Clicker from './pages/Clicker'
import Data from './pages/Data'
import ClickerStart from './pages/ClickerStart'
// import NotFound from './pages/NotFound'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Header />}>
                <Route index element={<Menu />} />
                <Route path='clicker' element={<Clicker />} />
                <Route path='clicker-start' element={<ClickerStart />} />
                <Route path='data' element={<Data />} />
                <Route path='*' element={<Menu />} />
            </Route>
        </Routes>
    )
}

export default App
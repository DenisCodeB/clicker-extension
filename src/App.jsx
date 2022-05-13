import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Menu from './pages/Menu'
import Clicker from './pages/Clicker'
import Data from './pages/Data'
import NotFound from './pages/NotFound'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Header />}>
                <Route index element={<Menu />} />
                <Route path='clicker' element={<Clicker />} />
                <Route path='data' element={<Data />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App
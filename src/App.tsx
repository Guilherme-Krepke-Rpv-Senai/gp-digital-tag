import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Home } from './pages/home'
export function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
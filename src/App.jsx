import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Topbar from './Components/Topbar'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Topbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
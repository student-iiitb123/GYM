import './App.css'
import Front from "./firstpage.jsx"
import Gymmemer from "./gymmember.jsx" // Import your gymmemer component
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Front />} />
      <Route path="/gymmember" element={<Gymmemer />} />
    </Routes>
  )
}

export default App
import "./navbar.css"
import Navbarlogic from "./navbarlogic.jsx"
import About from "./about.jsx" // Import your gymmemer component
import Something1 from "./something1.jsx" // Import your gymmemer component
import Something2 from "./something2.jsx" // Import your gymmemer component
import Something3 from "./something3.jsx" // Import your gymmemer component
import Something4 from "./something4.jsx" // Import your gymmemer component
import { Routes, Route } from "react-router-dom"
export default function Front(){
   return(
    <Routes>
      <Route path="/" element={<Navbarlogic />} />
      <Route path="/about" element={<About />} />
      <Route path="/something1" element={<Something1 />} />
      <Route path="/something2" element={<Something2 />} />
      <Route path="/something3" element={<Something3 />} />
      <Route path="/something4" element={<Something4 />} />
      <Route path="/firstpage" element={<Front />} />
    </Routes>
   )
}

// import { Contact } from 'lucide-react'
import {Contact} from "./Pages/Contact"
import './App.css'
import { About } from './Pages/About'
import { Certificate } from './Pages/Certificate'
import { Home } from './Pages/Home'
import Project from './Pages/Projects'
import { Skills } from './Pages/Skills'
import { Navbar } from "./components/Navbar"

function App() {
 
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Certificate/>
    <Contact/>
  
      
    </>
  )
}

export default App

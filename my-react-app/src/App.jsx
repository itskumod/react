
import {Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Skill from "./components/Skill"
import Header from "./components/Header"
import Project from "./components/Projects"
import Contact from "./components/Contact"
import Programming from "./components/Programing_Language"
import Platform from "./components/Platform"

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/skills" element={<Skill/>}/>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/programming" element={<Programming/>}/>
      <Route path="/practice" element={<Platform/>}/>
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />

    </Routes>
   
      
      
    </>
  );
}

export default App;
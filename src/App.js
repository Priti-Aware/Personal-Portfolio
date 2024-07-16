import logo from './logo.svg';
import './App.css';
import Hero from './Components/hero/Hero';
import Load from './Components/load/Load';
import Skills from './Components/skills/Skills';
import Contact1 from './Components/contact/Contact1';
import Contact2 from './Components/contact/Contact2';
import About from './Components/about/About';
import Education from './Components/education/Education'
import Certificates from './Components/certificates/Certificates';
import Projects from './Components/projects/Projects';

import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <>
    <div className="App">

      <Routes>
        <Route path='/' element={<Hero/>}/> 
        <Route path='/Hero' element={<Hero/>}/> 
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Education' element={<Education/>}/>
        <Route path='/Certificates' element={<Certificates/>}/>
        <Route path='/Contact1' element={<Contact1/>}/>
        <Route path='/Contact2' element={<Contact2/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;

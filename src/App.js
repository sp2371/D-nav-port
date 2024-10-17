
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Background from './components/background/background';
import Navbar from './components/navbar/navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/contact';
import Projects from './pages/Projects/project';
function App() {
  return (
    <Router>
      <div className="App">
        <Background />
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

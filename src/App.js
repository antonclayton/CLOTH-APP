import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import './styles/Navbar.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;

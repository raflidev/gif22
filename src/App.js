import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Maskot from "./pages/Maskot";
import Theme from "./pages/Theme";
import Maps from "./pages/Maps";
import LineUp from "./pages/LineUp";

function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/maskot" element={<Maskot />}></Route>
          <Route path="/theme" element={<Theme />}></Route>
          <Route path="/Maps" element={<Maps />}></Route>
          <Route path="/line-up" element={<LineUp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
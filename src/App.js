import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
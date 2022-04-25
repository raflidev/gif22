import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Mascot from "./pages/Mascot";
import Theme from "./pages/Theme";
import Maps from "./pages/Maps";
import LineUp from "./pages/LineUp";
import Media from "./pages/Media";
import Throwback from "./pages/Throwback";
import Description from "./pages/Description";
import Pramainevent from "./pages/Pramainevent";

function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/mascot" element={<Mascot />}></Route>
          <Route path="/theme" element={<Theme />}></Route>
          <Route path="/Maps" element={<Maps />}></Route>
          <Route path="/line-up" element={<LineUp />}></Route>
          <Route path="/media" element={<Media />}></Route>
          <Route path="/throwback" element={<Throwback />}></Route>
          <Route path="/description" element={<Description />}></Route>
          <Route path="/pramainevent" element={<Pramainevent />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Mascot from "./pages/Mascot";
import Theme from "./pages/Theme";
import Maps from "./pages/Maps";
import LineUp from "./pages/LineUp";
import Media from "./pages/Media";
import Throwback from "./pages/Throwback";
import Pramainevent from "./pages/Pramainevent";
import Page404 from "./pages/Page404";

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
          <Route path="/pramainevent" element={<Pramainevent />}></Route>
          <Route path="/404" element={<Page404 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
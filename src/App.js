
import './App.css';
import { Route, Routes} from "react-router-dom"
import Main from "./Pages/Main"
import About from "./Pages/About"
import OneStock from "./Pages/OneStock"
import Nav from "./Components/Nav"
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/stocks/:symbol" element={<OneStock/>} />
        {/* <Route path="/Dashboard" element={<Dashboard/>} /> */}
        <Route path="/stocks" element={<Dashboard/>} />
      </Routes>

      
    </div>
  );
}

export default App;

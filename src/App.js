import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Appointments from "./Appointments";
import SignUp from "./SignUp";


function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/appointments" element={<Appointments/>}></Route>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;


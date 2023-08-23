
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router , Routes , Route  , Navigate} from "react-router-dom";

function App() {
  return (
   
    <div className="bg-gradient-to-br from-black to-[rgb(36,37,73)] h-screen" >
      <Router>
        <Routes>
        <Route path = "/login" element = {<Login />} />
          <Route path = "/home" element = {<Home />} />
        
          <Route path = "/register" element = {<SignUp />} />
          <Route path="*" element={<Navigate to="/login" />} />
          
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;

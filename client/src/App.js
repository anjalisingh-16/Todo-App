import logo from './logo.svg';
import './App.css';
import Register from "./Register";
import Login from "./Login";
import Todo from "./Todo";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
   <Router>
    <Routes>
    <Route path="/" element={<Register/>}/>
     <Route path="login" element={<Login/>}/>
     <Route path="/todo" element={<Todo/>}/>
    </Routes>
   </Router>
    </div>
  );
}

export default App;

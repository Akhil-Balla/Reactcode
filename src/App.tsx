import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />


      </Routes>
    </Router>
  );
}

export default App;

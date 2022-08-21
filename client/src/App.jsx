import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/universal/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import { AuthProvider } from "./utils/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Navbar />
          <main className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/:username" element={<Profile />} />
              <Route exact path="/admin" element={<Dashboard />} />
              <Route exact path="*" element={<>404 Not Found</>} />
            </Routes>
          </main>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;

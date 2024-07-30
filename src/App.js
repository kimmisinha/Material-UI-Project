import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import SignIn from "./Component/SignIn";
import Signup from "./Component/Signup";

import Profile from "./Component/Profile";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Navbar />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Articles from "./Articles.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;

// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusinessForm from "./onboarding/BusinessForm";
import LoginPage from "./loginpage/LoginPage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BusinessForm />} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </Router>
  );
};

export default App;

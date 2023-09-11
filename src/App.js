// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen"; // Create this component
import { UserProvider } from "./UserStateContext"; // Import UserProvider

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes> {/* Use <Routes> here */}
          <Route path="/" element={<LoginScreen />} />
          <Route path="/home" element={<HomeScreen />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

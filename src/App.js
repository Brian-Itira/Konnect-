// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import Chat from "./screens/Chat";
import { UserProvider } from "./UserStateContext"; // Import UserProvider

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes> {/* Use <Routes> here */}
          <Route path="/" element={<LoginScreen />} />
          <Route path="/Chat" element={<Chat />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

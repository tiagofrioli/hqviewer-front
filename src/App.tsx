import React from "react";
import Home from "../src/views/Home";
import "./App.css";
import AuthProvider from "./context/Auth.tsx";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Home />
      </AuthProvider>
    </div>
  );
}

export default App;

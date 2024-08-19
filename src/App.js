import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./Global.css";
import NavRoutes from "./NavRoutes";
import NavigationBar from "./Components/NavigationBar";

function App() {
  return (
    <>
    <Router>
    <NavigationBar/>
      <Routes>
        {NavRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
    </>
  );
}

export default App;

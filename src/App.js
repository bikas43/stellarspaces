import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./Global.css";
import NavRoutes from "./NavRoutes";
import NavigationBar from "./Components/NavigationBar";
import ContactBar from "./Assets/StickyElements/ContactBar";
import Footer from "./Assets/Footer/Footer";

function App() {
  return (
    <>
      <Router style>
        <ContactBar />
        <Routes>
          {NavRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

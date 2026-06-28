import React from "react";
import "./styles/site.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App: React.FC = () => (
  <div className="app">
    <NavBar />
    <Home />
    <Footer />
  </div>
);

export default App;

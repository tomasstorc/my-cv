import React from "react";
import Header from "../componenets/Header/Header";
import Navbar from "../componenets/Navbar/Navbar";
import AboutMe from "../componenets/AboutMe/AboutMe";
function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Header language="en" />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;

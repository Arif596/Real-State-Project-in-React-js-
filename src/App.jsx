import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Companies from "./Components/Companies/Companies";
import Residencies from "./Components/Residencies/Residencies";
import Value from "./Components/Value/Value";
import Contact from "./Components/Contact/Contact";
import GetStarted from "./Components/GetStarted/GetStarted";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
          <Companies />
          <Residencies />
          <Value />
          <Contact />
          <GetStarted />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

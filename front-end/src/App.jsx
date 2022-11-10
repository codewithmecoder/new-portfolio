import React from "react";
import { Navbar } from "./components";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <p style={{ fontSize: 30, color: "red" }}>
          Application is under contruction! <br /> Thanks for check me out!
        </p>
      </div> */}
    </div>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <>
      {/* Header Start */}
      <Header />
      {/* Header End */}

      {/* Routing  Start*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* Routing  End*/}
    </>
  );
};

export default App;

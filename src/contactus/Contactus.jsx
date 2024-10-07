import React from "react";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contactus = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Contactus;

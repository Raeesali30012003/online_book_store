import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contactus from "./contactus/Contactus";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-950 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/contactus" element={<Contactus />}/>
          <Route path="/signup" element={<Signup />}/>
          

        </Routes>
      </div>
    </>
  );
};

export default App;

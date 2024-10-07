import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <div className="text-3xl max-w-screen-2xl container mx-auto px-24">
        Get Extra <span className="text-5xl text-pink-700 px-1">30% </span> Off before the offer
        end .
      </div>
      <div className="grid grid-flow-col md:gap-28 gap-7 text-center auto-cols-max max-w-screen-2xl container mx-auto md:px-28 px-4 border-red-500 py-6  ">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl md:text-7xl">
            <span style={{ "--value": 15 }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl md:text-7xl">
            <span style={{ "--value": 10 }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl md:text-7xl">
            <span style={{ "--value": 24 }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl md:text-7xl">
            <span style={{ "--value": counter }}></span>
          </span>
          sec
        </div>
      </div>
      
     
    </>
  );
};

export default Countdown;

import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-32  items-center justify-center text-center mx-auto md:px-20 px-4">
          <h1 className="text-2xl mt-5 md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :-)</span>
          </h1>
          <p className="mt-20">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quo
            accusantium laborum praesentium eum. Deleniti eos quas sint ipsa
            nostrum dolorum natus voluptate! Vel adipisci asperiores assumenda
            minima? Laudantium, consequuntur! Recusandae sunt culpa distinctio
            sapiente nesciunt delectus tempore adipisci provident! Tenetur
            officia, laudantium voluptatem voluptates dolorem quis debitis a
            excepturi, aut, deserunt porro blanditiis magni repellendus
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300 mt-6">
              Back
            </button>
          </Link>
          <br />
          <br />
          <div className="text-2xl max-w-screen-2xl container mx-auto ">
        Use promocode <span className="md:text-5xl text-4xl text-pink-700 px-1">FIRST50 </span> & , Get <span className="md:text-5xl text-pink-700 text-4xl px-1">50% </span> Off on the first Order
      </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;

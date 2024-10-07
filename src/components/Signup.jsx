import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex h-screen items-center justify-center border shadow-md">
        <div id="my_modal_3 " className=" rounded-md w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              {/* name */}
              <div className="mt-4 space-y-2 ">
                <span className="">Name :</span>
                <br />
                <input
                  type="name"
                  placeholder="Enter your name!"
                  className="w-80 px-3 py-2 ml-4 border rounded-md outline-none hover:border-pink-600 hover:border-[2px]"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* email */}
              <div className="mt-4 space-y-2">
                <span className="">Email :</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email!"
                  className="w-80 px-3 py-2 ml-4 border rounded-md outline-none hover:border-pink-600 hover:border-[2px]"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* password */}
              <div className="mt-4 space-y-2">
                <span className="">Password :</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your password!"
                  className="w-80 px-3 py-2 ml-4 border rounded-md outline-none hover:border-pink-600 hover:border-[2px]"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* login button */}
              <div className="flex justify-around mt-4">
                <button
                  
                  className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-800 duration-200"
                >
                  Sign-In
                </button>
                <p className="">
                  have account :{" "}
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

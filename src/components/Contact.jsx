import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <div
        id="my_modal_3"
        className="flex h-screen items-center justify-center border shadow-md"
      >
        <div className="rounded-md w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Contact Us</h3>

              {/* user name */}
              <div className="mt-4 space-y-2">
                <label htmlFor="name">Name :</label>
                <br />
                <input
                  type="text"
                  id="name"
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
                <label htmlFor="email">Email :</label>
                <br />
                <input
                  type="email"
                  id="email"
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
                <label htmlFor="password">Password :</label>
                <br />
                <input
                  type="password"
                  id="password"
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

              {/* message */}
              <div className="mt-4 space-y-2">
                <label htmlFor="message">Message :</label>
                <br />
                <textarea
                  id="message"
                  placeholder="Enter your message!"
                  className="w-80 px-3 py-2 ml-4 border rounded-md outline-none hover:border-pink-600 hover:border-[2px]"
                  {...register("message", { required: true })}
                />
                <br />
                {errors.message && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

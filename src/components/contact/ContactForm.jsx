import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      alert("FORM Submitted Successfully");
      console.log(result); // You can handle the result as needed
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-5 mx-auto flex flex-col gap-4 max-w-md tracking-wider">
          <div className="flex flex-col gap-2">
            <label className="text-xl text-gray-600 font-bold">Name :</label>
            <input
              className="outline-none rounded-full px-4 p-2"
              type="text"
              {...register("name", {
                required: { value: true, message: "Name is Required" },
                minLength: {
                  value: 3,
                  message: "Name should be at least 3 characters",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-600 text-[12px]">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xl text-gray-600 font-bold">Email :</label>
            <input
              className="outline-none rounded-full px-4 p-2"
              type="email"
              {...register("email", {
                required: { value: true, message: "Email is Required" },
              })}
            />
            {errors.email && (
              <p className="text-red-600 text-[12px]">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xl text-gray-600 font-bold">
              Contact No. :
            </label>
            <input
              className="outline-none rounded-full px-4 p-2"
              type="tel"
              {...register("contact", {
                required: { value: true, message: "Contact Number Required" },
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Contact Number must be 10 digits",
                },
              })}
            />
            {errors.number && (
              <p className="text-red-600 text-[12px]">
                {errors.number.message}
              </p>
            )}
          </div>
          <input
            className="bg-btnColor text-primary text-lg font-bold hover:bg-btnHover hover:text-black transition ease-in-out duration-400 shadow-secondaryShadow md:px-4 p-2 rounded-2xl tracking-wider mt-4 cursor-pointer"
            type="submit"
          />
        </div>
      </form>
    </>
  );
};

export default ContactForm;

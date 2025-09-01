import React, { useState } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react";


export default function ContactUs() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "92804dcf-50a4-403d-b2da-9f3575fa7ffd");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
    
        const data = await response.json();
    
        if (data.success) {
          toast.success('Thank you for your submission!')
          event.target.reset();
        } else {
          toast.error(data.message);
        }
    } catch (error) {
        toast.error(error.message);
    }
  };

  return (
    <motion.form
    initial = {{opacity: 0, y: 30}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.4}}
    viewport={{ once: true}}
    id="contact-us" onSubmit={onSubmit} className="flex flex-col gap-7 items-center px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
      <Title
        title={"Reach out to us"}
        desc={
          "From strategy to execution, we craft digital solutions that move your business forward"
        }
      />

      <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
        <div className="w-full">
          <label className="text-black/70 dark:text-white" htmlFor="name">
            Your Name
          </label>
          <input
            className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
            type="text"
            required
            placeholder="Enter your name"
            name="name"
          />
        </div>
        <div className="w-full">
          <label className="text-black/70 dark:text-white" htmlFor="name">
            Your Email
          </label>
          <input
            className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
            type="email"
            required
            placeholder="Enter your email"
            name="email"
          />
        </div>
      </div>

      <div className="mt-6 w-[350px] md:w-[700px]">
        <label className="text-black/70 dark:text-white" htmlFor="name">
          Message
        </label>
        <textarea
          className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300"
          placeholder="Enter your message"
          required
          name="message"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
      >
        Submit <img src={assets.arrow_icon} alt="" className="w-4" />
      </button>
    </motion.form>
  );
}

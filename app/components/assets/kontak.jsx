"use client";
import React, { useState, useRef } from "react";

export default function Kontak() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const form = document.forms["messege-to-form"];
  const scriptURL = "https://script.google.com/macros/s/AKfycbxDhJp2Kya9dSPXVhpkStDYNhWums6uNMrB_ssrOeX1KkNg2B_3S0-7sFejJ9xMjqaj/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(formRef.current);
      await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });
      setLoading(false);
      setTimeout(() => {
        alert("Pesan Terkirim");
      });
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Contact <span className="text-blue-500">Me</span>
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Jika ada yang ingin ditanyakan? SIlahkan isi pesan dibawah ini :)</p>
      <form onSubmit={handleSubmit} ref={formRef} name="messege-to-form" className="form space-y-8">
        <div>
          <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your Name
          </label>
          <input
            name="nama"
            type="text"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Jhon Doe"
            required
          />
        </div>
        <div>
          <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="jhondoe@domain.com"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            Your message
          </label>
          <textarea
            name="pesan"
            id="message"
            rows="6"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave a comment..."></textarea>
        </div>
        {/* <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-blue-400 sm:w-fit hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Send message
        </button> */}
        {loading ? (
          <button
            type="submit"
            as={"input"}
            className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-blue-400 sm:w-fit hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Loading ...
          </button>
        ) : (
          <button
            as={"input"}
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-blue-400 sm:w-fit hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Send Message
          </button>
        )}
      </form>
    </div>
  );
}

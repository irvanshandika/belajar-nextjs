"use client";
import React, { useState, useRef } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const scriptURL = "https://script.google.com/macros/s/AKfycbxDhJp2Kya9dSPXVhpkStDYNhWums6uNMrB_ssrOeX1KkNg2B_3S0-7sFejJ9xMjqaj/exec";

  const handleSubmit = async (e) => {
    var alertDiv = document.getElementById("alert");
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(formRef.current);
      alertDiv.classList.add("hidden");
      await fetch(scriptURL, {
        method: "POST",
        body: formData,
      }).then(() => {
        alertDiv.classList.remove("hidden");
        setLoading(false);
        setTimeout(() => {
          alertDiv.classList.add("hidden");
        }, 3000);
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
    <section id="kontak">
      <div className="block max-w-7xl py-28 mx-auto mt-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-outfit">
        <div className="flex flex-col items-center pb-10">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Hubungi <span className="text-blue-500">Saya</span>
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ex!</p>
            <div className="hidden" id="alert">
              <div className="flex items-center p-4 mb-4 text-sm text-white rounded-lg bg-green-500" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 mr-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">Pesan Anda Terkirim!</span>
                </div>
              </div>
            </div>
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
              {loading ? (
                <button
                  disabled
                  type="submit"
                  as={"input"}
                  id="btn-loading"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                  <svg role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Loading...
                </button>
              ) : (
                <button
                  as={"input"}
                  type="submit"
                  id="btn-kirim"
                  className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-blue-400 sm:w-fit hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Send Message
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

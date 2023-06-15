import React from "react";
import Kontak from "./assets/kontak";

export default function Contact() {
  return (
    <section id="kontak">
      <div className="block max-w-7xl py-28 mx-auto mt-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          {/* <h1 className="text-center text-2xl font-bold">Kontak</h1> */}
          <Kontak />
        </div>
      </div>
    </section>
  );
}

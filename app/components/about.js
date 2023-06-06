import React from "react";

export default function AboutMe() {
  return (
    <section id="aboutme">
      <a href="#" className="block max-w-7xl p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">About Me</h5>
        <p className="font-normal text-center first-letter:text-7xl text-gray-700 dark:text-gray-400">
          Hai, perkenalkan namaku Muhammad Irvan Shandika. Aku berasal dari Kota Pontianak, Kalimantan Barat. Saat ini aku sedang berkuliah
          di Universitas AMIKOM Yogyakarta. Aku mengambil jurusan Informatika, karena aku senang dalam dunia pembuatan sebuah website.
          Terutama dari segi frontend/tampilan depan dari sebuah website.
        </p>
      </a>
    </section>
  );
}

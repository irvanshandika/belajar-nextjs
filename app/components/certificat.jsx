import React from "react";
import Image from "next/image";
import Sertifikat from "./sertifikat.png";

export default function Certificate() {
  return (
    <section id="sertifikat">
      <div className="block max-w-7xl py-28 mx-auto mt-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <h1 className="p-6 text-3xl font-bold">Sertifikat</h1>
          <Image src={Sertifikat} className="w-[230px]" alt="sertifikat" />
        </div>
      </div>
    </section>
  );
}

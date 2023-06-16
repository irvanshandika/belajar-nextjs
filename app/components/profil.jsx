import Image from "next/image";
import Foto from "../foto.jpg";
import Github from "./icons/Github";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Verified from "./icons/Verified";
import Linkedin from "./icons/Linkedin";

export default function Profil() {
  return (
    <>
      <div className="w-full mx-auto mb-4 mt-24 max-w-7xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10 font-outfit font-bold">
          <Image className="w-32 h-32 mb-3 mt-8 rounded-full shadow-lg" src={Foto} alt="Muhammad Irvan Shandika" />
          <div className="flex">
            <h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">Muhammad Irvan Shandika</h5>
            <Verified />
          </div>
          <div className="flex items-center">
            <h2 className="text-base text-gray-500 dark:text-gray-400">
              Frontend Developer & <span className="text-base text-gray-500">Mahasiswa</span>
            </h2>
            <svg className="ml-2 w-4 h-4 icon icon-tabler icon-tabler-code" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none" stroke="none" />
              <polyline points="7 8 3 12 7 16" />
              <polyline points="17 8 21 12 17 16" />
              <line x1="14" x2="10" y1="4" y2="20" />
            </svg>
          </div>
          <div className="flex justify-center mt-4">
            <Github />
            <Linkedin />
            <Facebook />
            <Instagram />
          </div>
        </div>
      </div>
    </>
  );
}

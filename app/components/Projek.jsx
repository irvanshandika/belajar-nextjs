import Image from "next/image";
import Projek1 from "./foto1.png";
import Projek2 from "./foto2.png";
import Projek3 from "./foto3.png";
import Projek4 from "./foto4.png";
import Projek5 from "./foto5.png";

export default function Projek() {
  const projek = [
    {
      title: "First Portfolio HTML, CSS, Javascript",
      image: Projek1,
      description: "Projek portfolio pertama dengan menggunakan html, css, javascript, dan bootstrap",
      alt: "Portfolio HTML, CSS, Javascript",
      url: "https://irvanshandika.netlify.app",
    },
    {
      title: "May Beauty Skin",
      image: Projek2,
      description: "Projek kedua dalam belajar frontend website dengan menggunakan ReactJS dan bootstrap",
      alt: "May Beauty Skin",
      url: "https://maybeautyskin.vercel.app",
    },
    {
      title: "Perpustakaan Digital",
      image: Projek3,
      description: "Final projek kelompok 6 pada mata kuliah Pemrograman Lanjutan, dengan menggunakan ReactJS dan bootstrap",
      alt: "Perpustakaan Digital",
      url: "https://perpustakaandigital.vercel.app/?vercelToolbarCode=Zu-HFLrjhawTWQb",
    },
    {
      title: "Votely",
      image: Projek4,
      description: "Final projek Team Votely dengan menggunakan Next JS (Typescript), Tailwindcss, Next Auth, dan Mongodb.",
      alt: "Votely",
      url: "https://lets-votely.com",
    },
    {
      title: "Album IF 07",
      image: Projek5,
      description: "Projek belajar individu dengan menggunakan Next JS (Typescript), Tailwindcss, dan Cloudinary",
      alt: "Album foto IF07",
      url: "https://albumif07.vercel.app",
    },
  ];
  return (
    <section id="project" className="z-0">
      <div className="w-full py-28 mx-auto my-4 max-w-7xl bg-white border border-gray-200 rounded-lg shadow ">
        <h5 className="text-center text-2xl font-bold my-8 font-outfit">
          Projek <span className="text-sky-500">Saya</span>
        </h5>
        <p className="text-center text-xl font-bold my-8 font-outfit">Berikut Projek Yang Telah Saya Buat</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projek.map((item) => (
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image className="rounded-t-lg" src={item.image} alt={item.alt} />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                <a
                  href={item.url}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

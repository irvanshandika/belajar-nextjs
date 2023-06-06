import Image from "next/image";
import NavigasiBar from "./components/navbar";
import Profil from "./components/profil";
import AboutMe from "./components/about";
import Myproject from "./components/project";

export default function Home() {
  return (
    <>
      <NavigasiBar />
      <Profil />
      <AboutMe />
      <Myproject />
    </>
  );
}

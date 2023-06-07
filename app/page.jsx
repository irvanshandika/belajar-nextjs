import Image from "next/image";
import NavigasiBar from "./components/navbar";
import Profil from "./components/profil";
import AboutMe from "./components/about";
import Myproject from "./components/project";
import Certificate from "./components/certificat";
import Kontact from "./components/kontak";

export default function Home() {
  return (
    <>
      <NavigasiBar />
      <Profil />
      <AboutMe />
      <Certificate />
      <Myproject />
      <Kontact />
    </>
  );
}

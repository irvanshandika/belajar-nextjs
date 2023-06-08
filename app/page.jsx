import Image from "next/image";
import NavigasiBar from "./components/navbar";
import Profil from "./components/profil";
import AboutMe from "./components/about";
import Myproject from "./components/project";
import Certificate from "./components/certificat";
import Kontact from "./components/kontak";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavigasiBar />
      <Profil />
      <AboutMe />
      <Certificate />
      <Myproject />
      <Kontact />
      <Footer />
    </>
  );
}

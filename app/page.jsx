import NavigasiBar from "./components/navbar";
import Profil from "./components/profil";
import AboutMe from "./components/about";
import Myproject from "./components/Projek";
import Certificate from "./components/certificat";
import Contact from "./components/kontak";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavigasiBar />
      <Profil />
      <AboutMe />
      <Certificate />
      <Myproject />
      <Contact />
      <Footer />
    </>
  );
}

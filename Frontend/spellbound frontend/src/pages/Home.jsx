import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomeSection1 from "../components/HomeSection1";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import HomeSection4 from "../components/HomeSection4";
import HomeSection5 from "../components/HomeSection5";
import HomeSection6 from "../components/HomeSection6";
import AboutUs from "../components/AboutUs";

function Home() {
  return (
    <>
      <Navbar />
      <HomeSection1 />
      <section id="about">
        <AboutUs />
      </section>
      <HomeSection2 />
      <HomeSection4 />
      <HomeSection3 />

      {/* <HomeSection5 />
      <HomeSection6 /> */}
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}

export default Home;

import Balcony1 from "../../assets/images/DesktopViewImage/Work/Balcony/Balcony1.png";
import Balcony2 from "../../assets/images/DesktopViewImage/Work/Balcony/Balcony2.png";
import Balcony3 from "../../assets/images/DesktopViewImage/Work/Balcony/Balcony3.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Balcony() {
  return (
    <>
    <Navbar />
      <div className="bg-white">
        <h1 className="text-center pt-2">Balcony</h1>
        <div className="px-5 pb-3 text-center">
          <img
            src={Balcony1}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
          <img
            src={Balcony2}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
          <img
            src={Balcony3}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Balcony;

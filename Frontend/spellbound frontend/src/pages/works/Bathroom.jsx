import Bathroom1 from "../../assets/images/DesktopViewImage/Work/Bathroom/Bathroom1.png";
import Bathroom2 from "../../assets/images/DesktopViewImage/Work/Bathroom/Bathroom2.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Bathroom() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <h1 className="text-center pt-2">Bathroom</h1>
        <div className="px-5 pb-3 text-center">
          <img
            src={Bathroom1}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
          <img
            src={Bathroom2}
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

export default Bathroom;

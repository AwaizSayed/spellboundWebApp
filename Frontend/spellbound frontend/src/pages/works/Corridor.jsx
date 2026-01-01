import Corridor1 from "../../assets/images/DesktopViewImage/Work/Corridor/Corridor1.png";
import Corridor2 from "../../assets/images/DesktopViewImage/Work/Corridor/Corridor2.png";
import Corridor3 from "../../assets/images/DesktopViewImage/Work/Corridor/Corridor3.png";
import Corridor4 from "../../assets/images/DesktopViewImage/Work/Corridor/Corridor4.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Corridor() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <h1 className="text-center pt-2">Corridor</h1>
        <div className="px-5 pb-3 text-center">
          <img
            src={Corridor1}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
          <img
            src={Corridor2}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
          <img
            src={Corridor3}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
          <img
            src={Corridor4}
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

export default Corridor;

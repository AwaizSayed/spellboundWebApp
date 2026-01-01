import Dining1 from "../../assets/images/DesktopViewImage/Work/Dining/Dining1.png";
import Dining2 from "../../assets/images/DesktopViewImage/Work/Dining/Dining2.png";
import Dining3 from "../../assets/images/DesktopViewImage/Work/Dining/Dining3.png";
import Dining4 from "../../assets/images/DesktopViewImage/Work/Dining/Dining4.png";
import Dining5 from "../../assets/images/DesktopViewImage/Work/Dining/Dining5.png";
import Dining6 from "../../assets/images/DesktopViewImage/Work/Dining/Dining6.png";
import Dining7 from "../../assets/images/DesktopViewImage/Work/Dining/Dining7.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Dining() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <h1 className="text-center pt-2">Dining</h1>
        <div className="px-5 pb-3 text-center">
          <img
            src={Dining1}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
          <img
            src={Dining2}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
          <img
            src={Dining3}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
          <img
            src={Dining4}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
          <img
            src={Dining5}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
          <img
            src={Dining6}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
          <img
            src={Dining7}
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

export default Dining;

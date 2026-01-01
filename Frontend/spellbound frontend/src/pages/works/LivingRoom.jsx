import LivingRoom1 from "../../assets/images/DesktopViewImage/Work/LivingRoom/LivingRoom1.png";
import LivingRoom2 from "../../assets/images/DesktopViewImage/Work/LivingRoom/LivingRoom2.png";
import LivingRoomGrey1 from "../../assets/images/DesktopViewImage/Work/LivingRoom/LivingRoomGrey1.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function LivingRoom() {
  return (
    <>
    <Navbar />
      <div className="bg-white">
        <h1 className="text-center pt-2">Living Room</h1>
        <div className="px-5 pb-3 text-center">
          <img
            src={LivingRoom1}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
          <img
            src={LivingRoom2}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
          <img
            src={LivingRoomGrey1}
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

export default LivingRoom;

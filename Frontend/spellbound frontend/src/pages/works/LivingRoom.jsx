import LivingRoom1 from "../../assets/images/DesktopViewImage/Work/LivingRoom/LivingRoom1.png";
import LivingRoom2 from "../../assets/images/DesktopViewImage/Work/LivingRoom/LivingRoom2.png";
import LivingRoomGrey1 from "../../assets/images/DesktopViewImage/Work/LivingRoom/LivingRoomGrey1.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useState } from "react";
import ImagePreview from "../../components/ImagePreview";

function LivingRoom() {
  const [showPreview1, setShowPreview1] = useState(false);
  const [showPreview2, setShowPreview2] = useState(false);
  const [showPreview3, setShowPreview3] = useState(false);
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
            onClick={() => setShowPreview1(true)}
          ></img>
          <ImagePreview
            image={LivingRoom1}
            stateOfImage={showPreview1}
            setStateOfImage={setShowPreview1}
          />
          <img
            src={LivingRoom2}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview2(true)}
          ></img>
          <ImagePreview
            image={LivingRoom2}
            stateOfImage={showPreview2}
            setStateOfImage={setShowPreview2}
          />
          <img
            src={LivingRoomGrey1}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview3(true)}
          ></img>
          <ImagePreview
            image={LivingRoomGrey1}
            stateOfImage={showPreview3}
            setStateOfImage={setShowPreview3}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LivingRoom;

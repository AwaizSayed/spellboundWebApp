import GardenFurniture1 from "../../assets/images/DesktopViewImage/Work/GardenFurniture/GardenFurniture.png";
// import GardenFurniture2 from "../../assets/images/DesktopViewImage/Work/GardenFurniture/GardenFurniture2.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useState } from "react";
import ImagePreview from "../../components/ImagePreview";

function GardenFurniture() {
  const [showPreview1, setShowPreview1] = useState(false);
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <h1 className="text-center pt-2">Garden Furniture</h1>
        <div className="px-5 pb-3 text-center">
          <img
            src={GardenFurniture1}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview1(true)}
          ></img>
          <ImagePreview
            image={GardenFurniture1}
            stateOfImage={showPreview1}
            setStateOfImage={setShowPreview1}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GardenFurniture;

import Library1 from "../../assets/images/DesktopViewImage/Work/Library/Library1.png";
// import Library2 from "../../assets/images/DesktopViewImage/Work/Library/Library2.png";
import Library3 from "../../assets/images/DesktopViewImage/Work/Library/Library3.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useState } from "react";
import ImagePreview from "../../components/ImagePreview";

function Library() {
  const [showPreview1, setShowPreview1] = useState(false);
  const [showPreview2, setShowPreview2] = useState(false);
  const [showPreview3, setShowPreview3] = useState(false);

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <h1 className="text-center pt-2">Library</h1>
        <div className="px-5 pb-3 text-center">
          <img
            src={Library1}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview1(true)}
          ></img>
          <ImagePreview
            image={Library1}
            stateOfImage={showPreview1}
            setStateOfImage={setShowPreview1}
          />
          {/* <img
            src={Library2}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview2(true)}
          ></img>
          <ImagePreview
            image={Library2}
            stateOfImage={showPreview2}
            setStateOfImage={setShowPreview2}
          /> */}
          <img
            src={Library3}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview3(true)}
          ></img>
          <ImagePreview
            image={Library3}
            stateOfImage={showPreview3}
            setStateOfImage={setShowPreview3}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Library;

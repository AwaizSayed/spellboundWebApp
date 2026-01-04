import StudyTable1 from "../../assets/images/DesktopViewImage/Work/StudyTable/StudyTable1.png";
import StudyTable2 from "../../assets/images/DesktopViewImage/Work/StudyTable/StudyTable2.png";
import StudyTable3 from "../../assets/images/DesktopViewImage/Work/StudyTable/StudyTable3.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useState } from "react";
import ImagePreview from "../../components/ImagePreview";

function StudyTable() {
  const [showPreview1, setShowPreview1] = useState(false);
  const [showPreview2, setShowPreview2] = useState(false);
  const [showPreview3, setShowPreview3] = useState(false);
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <h1 className="text-center pt-2">Study Table</h1>
        <div className="px-5 pb-3 text-center">
          <img
            src={StudyTable1}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview1(true)}
          ></img>
          <ImagePreview
            image={StudyTable1}
            stateOfImage={showPreview1}
            setStateOfImage={setShowPreview1}
          />
          <img
            src={StudyTable2}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview2(true)}
          ></img>
          <ImagePreview
            image={StudyTable2}
            stateOfImage={showPreview2}
            setStateOfImage={setShowPreview2}
          />
          <img
            src={StudyTable3}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
            onClick={() => setShowPreview3(true)}
          ></img>
          <ImagePreview
            image={StudyTable3}
            stateOfImage={showPreview3}
            setStateOfImage={setShowPreview3}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default StudyTable;

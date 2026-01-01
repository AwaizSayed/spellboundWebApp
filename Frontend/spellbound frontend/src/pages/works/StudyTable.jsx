import StudyTable1 from "../../assets/images/DesktopViewImage/Work/StudyTable/StudyTable1.png";
import StudyTable2 from "../../assets/images/DesktopViewImage/Work/StudyTable/StudyTable2.png";
import StudyTable3 from "../../assets/images/DesktopViewImage/Work/StudyTable/StudyTable3.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function StudyTable() {
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
          ></img>
          <img
            src={StudyTable2}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
          <img
            src={StudyTable3}
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

export default StudyTable;

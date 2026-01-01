import Library1 from "../../assets/images/DesktopViewImage/Work/Library/Library1.png";
import Library2 from "../../assets/images/DesktopViewImage/Work/Library/Library2.png";
import Library3 from "../../assets/images/DesktopViewImage/Work/Library/Library3.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Library() {
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
          ></img>
          <img
            src={Library2}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
          <img
            src={Library3}
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

export default Library;

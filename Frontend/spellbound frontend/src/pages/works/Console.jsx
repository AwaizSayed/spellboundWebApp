import Console1 from "../../assets/images/DesktopViewImage/Work/Console/Console1.png";
import Console2 from "../../assets/images/DesktopViewImage/Work/Console/Console2.png";
import Console3 from "../../assets/images/DesktopViewImage/Work/Console/Console3.png";
import Console4 from "../../assets/images/DesktopViewImage/Work/Console/Console4.png";
import Console5 from "../../assets/images/DesktopViewImage/Work/Console/Console5.png";
import Console6 from "../../assets/images/DesktopViewImage/Work/Console/Console6.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Console() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <h1 className="text-center pt-2">Console</h1>
        <div className="px-5 pb-3 text-center">
          <img
            src={Console1}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
          <img
            src={Console2}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
          <img
            src={Console3}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
          <img
            src={Console4}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
          <img
            src={Console5}
            className="float-right p-2"
            alt="..."
            height={300}
            width={250}
          ></img>
          <img
            src={Console6}
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

export default Console;

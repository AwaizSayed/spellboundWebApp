import Hall1 from "../../assets/images/DesktopViewImage/Work/Hall/HallImage1.jpeg";
// import Hall2 from "../../assets/images/DesktopViewImage/Work/Hall/Hall2.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Hall() {
  return (
    <>
    <Navbar />
      <div className="bg-white">
        <h1 className="text-center pt-2">Hall</h1>
        <div className="px-5 pb-3 text-center">
          <img
            src={Hall1}
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

export default Hall;

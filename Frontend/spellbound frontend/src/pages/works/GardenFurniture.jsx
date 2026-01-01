import GardenFurniture1 from "../../assets/images/DesktopViewImage/Work/GardenFurniture/GardenFurniture.png";
// import GardenFurniture2 from "../../assets/images/DesktopViewImage/Work/GardenFurniture/GardenFurniture2.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function GardenFurniture() {
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
          ></img>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GardenFurniture;

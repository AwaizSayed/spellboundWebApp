import ArmChair1 from "../assets/images/DesktopViewImage/Work/ArmChair/ArmChair1.png";
import Balcony1 from "../assets/images/DesktopViewImage/Work/Balcony/Balcony1.png";
import Bathroom1 from "../assets/images/DesktopViewImage/Work/Bathroom/Bathroom1.png";
// import Bedroom1 from "../assets/images/DesktopViewImage/Work/Bedroom/Bedroom1.png";
import BedroomImage from "../assets/images/DesktopViewImage/CompletedProjects/Bedroom/Bedroom.jpg";
import Console1 from "../assets/images/DesktopViewImage/Work/Console/Console1.png";
import Corridor1 from "../assets/images/DesktopViewImage/Work/Corridor/Corridor1.png";
// import Dining1 from "../assets/images/DesktopViewImage/Work/Dining/Dining1.png";
import KitchenImage from "../assets/images/DesktopViewImage/CompletedProjects/Kitchen/Kitchen.jpg";
import GardenFurniture1 from "../assets/images/DesktopViewImage/Work/GardenFurniture/GardenFurniture.png";
import Hall1 from "../assets/images/DesktopViewImage/Work/Hall/HallImage1.jpeg";
import HomeOffice1 from "../assets/images/DesktopViewImage/Work/HomeOffice/HomeOffice1.png";
import Library1 from "../assets/images/DesktopViewImage/Work/Library/Library1.png";
// import LivingRoom1 from "../assets/images/DesktopViewImage/Work/LivingRoom/LivingRoom1.png";
import DrawingRoomImage from "../assets/images/DesktopViewImage/CompletedProjects/DrawingRoom/DrawingRoom.jpg";
import Stairs1 from "../assets/images/DesktopViewImage/Work/Stairs/Stairs.png";
import StudyTable1 from "../assets/images/DesktopViewImage/Work/StudyTable/StudyTable1.png";

import Card from "./Card";

function ProductsSection() {
  return (
    <>
      <div className="bg-white" style={{}}>
        <h1 className="text-center pt-2">Products</h1>
        <div className="px-5 py-4 container">
          <div className=" row justify-content-between ">
            <div class="col d-flex justify-content-center">
              <Card
                image={ArmChair1}
                title={"Arm Chair"}
                link={"/ArmChair"}
                description={"Hello world"}
              />
            </div>
            {/* <div class="col d-flex justify-content-center">
              <Card
                image={Balcony1}
                title={"Balcony"}
                link={"/Balcony"}
                description={"Hello world"}
              />
            </div> */}
            {/* <div class="col d-flex justify-content-center">
              <Card
                image={Bathroom1}
                title={"Bathroom"}
                link={"/Bathroom"}
                description={"Hello world"}
              />
            </div> */}
            {/* <div class="col d-flex justify-content-center">
              <Card
                image={BedroomImage}
                title={"Bedroom"}
                link={"/Bedroom"}
                description={"Hello world"}
              />
            </div> */}
            <div class="col d-flex justify-content-center">
              <Card
                image={Console1}
                title={"Console"}
                link={"/Console"}
                description={"Hello world"}
              />
            </div>
            {/* <div class="col d-flex justify-content-center">
              <Card
                image={Corridor1}
                title={"Corridor"}
                link={"/Corridor"}
                description={"Hello world"}
              />
            </div> */}
            {/* <div class="col d-flex justify-content-center">
              <Card
                image={KitchenImage}
                title={"Dining"}
                link={"/Dining"}
                description={"Hello world"}
              />
            </div> */}
            <div class="col d-flex justify-content-center">
              <Card
                image={GardenFurniture1}
                title={"Garden Furniture"}
                link={"/GardenFurniture"}
                description={"Hello world"}
              />
            </div>
            {/* <div class="col d-flex justify-content-center">
              <Card
                image={Hall1}
                title={"Hall"}
                link={"/Hall"}
                description={"Hello world"}
              />
            </div> */}
            {/* <div class="col d-flex justify-content-center">
              <Card
                image={HomeOffice1}
                title={"Home Office"}
                link={"/HomeOffice"}
                description={"Hello world"}
              />
            </div> */}
            {/* <div class="col d-flex justify-content-center">
              <Card
                image={Library1}
                title={"Library"}
                link={"/Library"}
                description={"Hello world"}
              />
            </div> */}
            {/* <div class="col d-flex justify-content-center">
              <Card
                image={DrawingRoomImage}
                title={"Living Room"}
                link={"/LivingRoom"}
                description={"Hello world"}
              />
            </div> */}
            {/* <div class="col d-flex justify-content-center">
              <Card
                image={Stairs1}
                title={"Stairs"}
                link={"/Stairs"}
                description={"Hello world"}
              />
            </div> */}
            <div class="col d-flex justify-content-center">
              <Card
                image={StudyTable1}
                title={"Study Table"}
                link={"/StudyTable"}
                description={"Hello world"}
              />
            </div>
          </div>
          {/* <Link className="nav-link text-center" to="/">
            <h2 style={{ color: "#000000ff" }}>more....</h2>
          </Link> */}
          {/* <div className="text-center">
            <button
              type="button"
              class="btn btn-outline-dark btn-lg"
              onClick={() => navigate("/Products")}
            >
              view more Products...
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default ProductsSection;

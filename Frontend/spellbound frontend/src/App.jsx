import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import ArmChair from "./pages/works/ArmChair";
import Balcony from "./pages/works/Balcony";
import Bathroom from "./pages/works/Bathroom";
import Bedroom from "./pages/works/Bedroom";
import Console from "./pages/works/Console";
import Corridor from "./pages/works/Corridor";
import Dining from "./pages/works/Dining";
import GardenFurniture from "./pages/works/GardenFurniture";
import Hall from "./pages/works/Hall";
import HomeOffice from "./pages/works/HomeOffice";
import Library from "./pages/works/Library";
import LivingRoom from "./pages/works/LivingRoom";
import Stairs from "./pages/works/Stairs";
import StudyTable from "./pages/works/StudyTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/armchair" element={<ArmChair />} />
      <Route path="/Balcony" element={<Balcony />} />
      <Route path="/Bathroom" element={<Bathroom />} />
      <Route path="/Bedroom" element={<Bedroom />} />
      <Route path="/Console" element={<Console />} />
      <Route path="/Corridor" element={<Corridor />} />
      <Route path="/Dining" element={<Dining />} />
      <Route path="/GardenFurniture" element={<GardenFurniture />} />
      <Route path="/Hall" element={<Hall />} />
      <Route path="/HomeOffice" element={<HomeOffice />} />
      <Route path="/Library" element={<Library />} />
      <Route path="/LivingRoom" element={<LivingRoom />} />
      <Route path="/Stairs" element={<Stairs />} />
      <Route path="/StudyTable" element={<StudyTable />} />
    </Routes>
  );
}

export default App;

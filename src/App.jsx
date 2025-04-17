import "./App.css";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import PetAdoptionBanner from "./Components/PetAdoptionBanner";
import PetCardGrid from "./Components/PetCardGrid";
import ProductGrid from "./Components/ProductGrid";

function App() {
  return (
    <>
     <Header/>
     <HeroSection/>
     <PetCardGrid/>
     <PetAdoptionBanner/>
     <ProductGrid/>
    </>
  );
}

export default App;

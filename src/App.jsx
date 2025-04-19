import "./App.css";
import AdoptionBanner from "./Components/AdoptionBanner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import PetAdoptionBanner from "./Components/PetAdoptionBanner";
import PetCardGrid from "./Components/PetCardGrid";
import PetKnowledgeSection from "./Components/PetKnowledgeSection";
import PetSellers from "./Components/PetSellers";
import ProductGrid from "./Components/ProductGrid";

function App() {
  return (
    <>
     <Header/>
     <HeroSection/>
     <PetCardGrid/>
     <PetAdoptionBanner/>
     <ProductGrid/>
     <PetSellers/>
     <AdoptionBanner/>
     <PetKnowledgeSection/>
     <Footer/>
    </>
  );
}

export default App;

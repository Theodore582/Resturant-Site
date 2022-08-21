import "./App.css";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import FullMenu from "./Full-Menu Section/FullMenu";

function App() {
  return (
    <div>
      <Home />
      <Hero />
      <Gallery />
      <Menu />
      <FullMenu />
      <Footer />
    </div>
  );
}

export default App;

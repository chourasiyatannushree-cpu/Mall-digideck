import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Overview from "./sections/Overview";
import Retail from "./sections/Retail";
import Luxury from "./sections/Luxury";
import Events from "./sections/Events";
import Entertainment from "./sections/Entertainment";
import Dining from "./sections/Dining";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <Overview />
      <Retail />
      <Luxury />
      <Events />
      <Entertainment />
      <Dining />
      <Footer />
    </>
  );
}

export default App;
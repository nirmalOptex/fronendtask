import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navigation.jsx";
import Banner from "../components/Banner.jsx";
import About from "../components/About.jsx";
import Team from "../components/Team.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import ApiDemo from "../components/Apidemo.jsx";
import Carousel from "../components/Carousel.jsx"


function HomePage() {
  return (
    <>
      <Banner />
      <About />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apidemo" element={<ApiDemo />} />
      </Routes>
    </Router>
  );
}

export default App;

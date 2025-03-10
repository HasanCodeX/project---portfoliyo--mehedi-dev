import "./App.css";
import Banner from "./components/banner.jsx"; // Import Banner component
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import WorkSection from "./components/workstation.jsx";
import About from "./components/about.jsx";
import SkillSection from "./components/skill.jsx";
import ServicesSection from "./components/services";
import ContactSection from "./components/contact.jsx";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <WorkSection />
      <ServicesSection />
      <SkillSection />
      <ContactSection />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;

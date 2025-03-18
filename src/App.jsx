import "./App.css";
import Banner from "./components/banner.jsx"; // Import Banner component
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

import About from "./components/about.jsx";
import SkillSection from "./components/skill.jsx";

import ContactSection from "./components/contact.jsx";
import WhatsAppButton from "./components/WhatsAppButton";
import BlogSection from "./components/BlogSection.jsx";
import ProjectSection from "./components/ProjectSection.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <ProjectSection />
      
      <BlogSection />
      <SkillSection />
      <ContactSection />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;

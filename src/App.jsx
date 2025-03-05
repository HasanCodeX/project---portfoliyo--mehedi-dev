import './App.css';
import Banner from './components/banner.jsx';  // Import Banner component
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import WorkSection from './components/workstation.jsx';
import About from './components/about.jsx';
import SkillSection from './components/skill.jsx';
import ServicesSection from './components/services';
import ContactSection from './components/contact.jsx';



function App() {
  return (
    <div className="App">
       
      <Navbar />  {/* Navbar component */}
      <Banner />  {/* Banner component */}
      <About/>
      

  
<WorkSection/> 
<ServicesSection/>
<SkillSection/>
<ContactSection/>
<Footer />  {/* Footer component */}

    </div>
  );
}

export default App;

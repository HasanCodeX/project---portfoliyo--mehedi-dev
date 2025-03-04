import './App.css';
import Banner from './components/banner.jsx';  // Import Banner component
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import WorkSection from './components/workstation.jsx';


function App() {
  return (
    <div className="App">
      <Navbar />  {/* Navbar component */}
      <Banner />  {/* Banner component */}
  
<WorkSection/> 
<Footer />  {/* Footer component */}
    </div>
  );
}

export default App;

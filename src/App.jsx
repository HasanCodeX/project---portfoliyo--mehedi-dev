import './App.css';
import Banner from './components/banner.jsx';  // Import Banner component
import Navbar from './components/navbar.jsx';  // Import Navbar component

function App() {
  return (
    <div className="App">
      <Navbar />  {/* Navbar component */}
      <Banner />  {/* Banner component */}
    </div>
  );
}

export default App;

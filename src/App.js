import Carusel from './components/Carusel';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carusel />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';
import Header from './layout/Header'
import Background from './pages/Background'
import About from './pages/About';
import Pricing from './pages/Pricing';
import Footer from './layout/Footer'
import Booking from './pages/Booking'
import Services from './pages/Services';


function App() {
  return (

    <div className="App">
      <Header/>
      <Background/>
      <About/>
      <Pricing/>
      <Services/>
      <Booking/>
      <Footer/>
    </div>
  );
}

export default App;

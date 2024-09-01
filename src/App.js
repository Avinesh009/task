import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Carousel from './Carousel';
import About from './About';
import Services from './Services';

function App() {
  return (
    <div className='App'>
    <Header></Header>
    <Carousel></Carousel>
    <About></About>
    <Services></Services>
    </div>
  );
}

export default App;

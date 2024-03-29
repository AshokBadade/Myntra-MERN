import './App.css';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;

import NavBar from './components/navbarComponent';
import FooterNavBar from './components/footerNavBar';
import About from './components/aboutComponent';
import Project from './components/projectComponent';
import Contact from './components/contactComponent';
import Intro from './components/introComponent';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';



function App() {
  return (
    <>
      <NavBar/>
      <Intro/>
      <About/>
      <Project/>
      <Contact/>
      <FooterNavBar/>

    </>
  );
}

export default App;

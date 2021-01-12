import NavBar from './components/navbarComponent';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import FooterNavBar from './components/footerNavBar';
import Top from './components/topComponent';
import About from './components/aboutComponent';
import Project from './components/projectComponent';
import Contact from './components/contactComponent';


function App() {
  return (
    <>
      <NavBar/>
      <Top/>
      <About/>
      <Project/>
      <Contact/>
      <FooterNavBar/>

    </>
  );
}

export default App;

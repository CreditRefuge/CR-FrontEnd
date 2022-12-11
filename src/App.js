import './App.css';

// COMPONENTS
import Navigation from './components/nav-componenets/Navigation';
import ContactUs from './components/page-components/ContactUs';
import GetStarted from './components/page-components/GetStarted';
import Learn from './components/page-components/Learn';
import MainComponent from './components/page-components/MainComponent';
import OurProgram from './components/page-components/OurProgram';
import Footer from './components/nav-componenets/Footer';

function App() {
  return (
    <div id='app-main-div'>

      <header>
        <nav>
          <Navigation />
        </nav>
      </header>

      <main>
        <MainComponent />
        <OurProgram />
        <Learn />
        <ContactUs />
        <GetStarted />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

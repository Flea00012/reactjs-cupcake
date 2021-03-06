import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CakeCupCake from './components/cakecupcake.jsx';

import Nav from '../src/components/Nav';
import About from '../src/components/Nav';
import Contact from './Contact'

function App() {
  return (
    <div>
      <Header />
      <CakeCupCake />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, useHistory } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() { 
  const history = useHistory();
  return (
    <BrowserRouter history={history}>
      <Navbar />
      <Footer />
    </BrowserRouter>
  );
  }

export default App;




import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HeroSection from './components/HeroSection';
import Home from './components/pages/Home.js';
import Services from './components/pages/Services.js';
import Products from './components/pages/Products.js';
import SignUp from './components/pages/SignUp.js';

function App() {
  return(
    <>

      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/products' exact component={Products} />
          <Route path='/sign-up' exact component={SignUp} />
        </Switch>
      </Router>

    </>
  );
}

export default App;

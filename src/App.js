
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HeroSection from './components/HeroSection';
import Home from './components/pages/Home.js';

function App() {
  return(
    <>

      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />

        </Switch>
      </Router>

    </>
  );
}

export default App;

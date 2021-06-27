//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/index';
import Contact from './contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FaqPage from './contact';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/faq" exact component={FaqPage}/>
        <Route path="/terms" exact component={Contact}/>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App;

  
  ReactDOM.render(<App />, document.querySelector("#root"));
  
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Service from './Pages/Services/Service';
import Involve from './Pages/Involve/Involve';
import Footer from './Components/Footer/Footer';



function App() {
  return ( <>
    <Switch>
      <Route path='/Bald'>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Route>
    <Route path='/'>
    <Home/>
    <About/>
    <Service/>
    <Involve/>
      </Route>
      </Switch>
    <Footer/>
    </>
  );
}

export default App;

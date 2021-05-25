import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Service from './Pages/Services/Service';
import Involve from './Pages/Involve/Involve';
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import BoardOfDirectors from './Pages/BoardOfDirectors/BoardOfDirectors';
import Staff from './Pages/Staff/Staff';
import Partners from './Pages/Partners/Partners';
import { Navigation } from './Components/Navigation/Navigation';

function App() {
  const paths = [
    {name: 'Home', to:''},
    {name: 'About', to:'about'},
    {name: 'Board of Directors', to:'boardofdirectors'},
    {name: 'Contact', to:'contact'},
    {name: 'Involve', to:'involve'},
    {name: 'Partners', to:'partners'},
    {name: 'Service', to:'service'},
    {name: 'Staff', to:'staff'},
    ]

  return ( <>
    <Route render={(routerProps) => <Navigation paths={paths} nav={routerProps.location}/>}/>
    <Switch>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/service'>
          <Service/>
        </Route>
        <Route path='/involve'>
          <Involve/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/boardofdirectors'>
          <BoardOfDirectors/>
        </Route>
        <Route path='/staff'>
          <Staff/>
        </Route>
        <Route path='/partners'>
          <Partners/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    <Footer/>
    </>
  );
}

export default App;

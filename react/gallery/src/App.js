import './App.css';
import Gallery from './Gallery';
import Nav from './Nav';
import Footer from './Footer';
import Register from './Register';
import Contactus from './Contactus';
import { BrowserRouter, Route, Switch } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <div id="mainContent">
          <Switch>
            <Route exact path='/'>
              <Gallery />
            </Route>

            <Route path='/register'>
              <Register />
            </Route>

            <Route path='/contactus'>
              <Contactus />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

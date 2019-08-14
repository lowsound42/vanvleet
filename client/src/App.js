import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage.js';
import Locations from './components/Locations/Locations.js';

class App extends React.Component {
  render(){
    return(
      <div>
        <Router>
          <Switch>
            <Route path='/warehouses' component/>
            <Route path='/warehouses/:id' component/>
            <Route exact path='/' component={MainPage} />
            <Route path='/warehouses' component= {Locations}/>
            {/* <Route path='/warehouses/:id' component/>
            <Route path='/inventory' component/>
            <Route path='/inventory/:id' component/> */}
          </Switch>
        </Router>
      </div>
    )}
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Inventory from'./components/Inventory/Inventory.js';
import MainPage from './components/MainPage/MainPage.js';
import Locations from './components/Locations/Locations.js';

class App extends React.Component {
  componentDidMount() {
    
  }
  render(){
    return(
      <div>
        <Router>
          <Switch>
            <Route path='/inventory' component={Inventory} />
            <Route path='/inventory/:id' component/>
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

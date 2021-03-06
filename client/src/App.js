import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Inventory from'./components/Inventory/Inventory.js';
import MainPage from './components/MainPage/MainPage.js';
import ProductSummary from './components/Inventory/ProductSummary.js'
import LocationsId from './components/Locations/LocationsId';

class App extends React.Component {

  render(){
    return(
      <div>
      
        <Router>
          <Switch>
            <Route exact path='/inventory' component={Inventory} />
            <Route path='/inventory/:id' component={ProductSummary}/>
            <Route exact path='/' component={MainPage} />
            <Route path='/warehouses/' exact component= {MainPage}/>
            <Route path='/warehouses/:id' exact component={LocationsId}/>
          </Switch>
        </Router>
      </div>
    )}
}

export default App;

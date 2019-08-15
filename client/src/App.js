import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Inventory from'./components/Inventory/Inventory.js';
import MainPage from './components/MainPage/MainPage.js';
import Locations from './components/Locations/Locations.js';
import AddInvenItem from './components/AddInvenItem/AddInvenItem.js';
import ProductSummary from './components/Inventory/ProductSummary.js'
import LocationId from './components/Locations/LocationsId';

class App extends React.Component {

  render(){
    return(
      <div>
      
        <Router>
          <Switch>
            <Route path='/inventory' component={Inventory} />
            <Route path='/inventory/:id' component={ProductSummary}/>
            <Route exact path='/' component={MainPage} />
            <Route path='/warehouses' component= {MainPage}/>
            <Route path='/:id' exact component={LocationId}/>
          </Switch>
        </Router>
      </div>
    )}
}

export default App;

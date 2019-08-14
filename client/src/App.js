import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Inventory from'./components/Inventory/Inventory.js';
import MainPage from './components/MainPage/MainPage.js';
import Locations from './components/Locations/Locations.js';
import AddInvenItem from './components/AddInvenItem/AddInvenItem.js';

class App extends React.Component {
  render(){
    return(
      <div>
        <Router>
          <Switch>
            <Route path='/inventory' component={Inventory} />
            <Route path='/inventory/:id' component/>
          {/* Added AddInvenItem Instead of MainPage for Demo Display */}
            <Route exact path='/' component={AddInvenItem} />
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

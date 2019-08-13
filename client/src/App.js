import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Inventory from'./components/Inventory/Inventory.js';

class App extends React.Component {
  render(){
    return(
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component/>
            <Route path='/warehouses' component/>
            <Route path='/warehouses/:id' component/>
            <Route path='/inventory' component={Inventory} />
            <Route path='/inventory/:id' component/>
          </Switch>
        </Router>
      </div>
    )}
}

export default App;

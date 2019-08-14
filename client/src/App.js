import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Inventory from'./components/Inventory/Inventory.js';
import MainPage from './components/MainPage/MainPage.js';

class App extends React.Component {
  render(){
    return(
      <div>
        <Router>
          <Switch>
            <Route path='/inventory' component={Inventory} />
            <Route path='/inventory/:id' component/>
            <Route exact path='/' component={MainPage} />
            <Route path='/warehouses' component= {MainPage}/>
            {/* <Route path='/warehouses/:id' component/> */}
          </Switch>
        </Router>
      </div>
    )}
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from "./component/NavBar/NavBar";

class App extends React.Component {
  render(){
    return(
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={NavBar}/>
            <Route path='/warehouses' component/>
            <Route path='/warehouses/:id' component/>
            <Route path='/inventory' component/>
            <Route path='/inventory/:id' component/>
          </Switch>
        </Router>
      </div>
    )}
}

export default App;

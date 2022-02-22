import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import SideBar from './Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/result">
            <SideBar />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;

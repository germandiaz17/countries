import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//components render
import Home from './components/pages/Home';
import Error from './components/pages/Error';
import MoreInfo from './components/views/MoreInfo';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/country/:info">
          <MoreInfo />
        </Route>
        <Route path="/" component={Home} exact />
        <Route path="/**" component={Error} exact/>
      </Switch>
    </Router>  
  )
}

export default App;

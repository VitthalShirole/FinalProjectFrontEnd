import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import AddProduct from './Components/AddProduct';
import Gold from './Components/Gold';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      
    <Router>
        <Switch>
        <Route path="/" exact component={Gold}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/addProduct" component={AddProduct}></Route>
        
        {/* <Route path="/home" component={Home}></Route> */}
        </Switch>
    </Router>
    
    </div>
  );
}

export default App;
